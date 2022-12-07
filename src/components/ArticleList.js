import React from 'react'
import { Link } from "react-router-dom";


const ArticleList = ({ articles })=>{
    return(
        <>
            {articles.map(title => (

                <Link key={title.name} className="article-list-item" to={`/articles/${title.name}`}>
                    <h3>{title.title}</h3>
                    <p>{title.content[0].substring(0, 150)}...</p>

                </Link>

            ))
        }

        </>
    )

}

export default ArticleList