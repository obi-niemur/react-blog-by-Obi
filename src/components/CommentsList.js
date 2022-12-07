import React from "react";

const CommentsList = ({comments})=>{

    const test = comments.map(comment => {
        return(
            <div className="comment" >
                <h4>{comment.postedBy}</h4>
                <p>{comment.text}</p>
            </div>
        )
            
        
    })
 return(
    <>
    <h3>Comments:</h3>
         {test}
    
     </>
 )


}

export default CommentsList