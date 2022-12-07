import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFound from "./NotFound";
import axios from 'axios';
import CommentsList from "../components/CommentsList";
import AddComment from "../components/AddComment";
import useUser from "../hooks/useUser";

const ArticlePage = () => {

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [], canUpvote:false });
    const {canUpvote} = articleInfo;
    const params = useParams()
    const { articleId } = params;

    const { user, loading } = useUser()

    useEffect(() => {
        const loadArticleInfo = async () => {
            const token = user && await user.getIdToken();
            const headers = token ? { authtoken: token } : {};
            const response = await axios.get(`/api/articles/${articleId}`, { headers });
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }

        if (loading) {
            loadArticleInfo();
        }
    }, [loading, user]);

    const article = articles.find(article => article.name === articleId);

    // Function that will request the server to add an new vote

    const upVote = async () => {

        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.put(`/api/articles/${articleId}/upvote`, null, { headers });
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    if (!article) {
        return <NotFound />
    }
    return (
        <>
            <h1>{article.title}</h1>
            <div className="upvotes-section">
                {user
                    ? <button onClick={upVote}>{canUpvote ? 'vote' : 'voted'}</button>
                    : <button>Log in to upvote</button>}
                <p>This article has {articleInfo.upvotes} vote(s)</p>
            </div>
            {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
            {user
            ?<AddComment
                articleName={articleId}
                onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}/>
                :<button>Log in to add a comment</button>}
            <CommentsList comments={articleInfo.comments} />
        </>

    )
}

export default ArticlePage;