import React from "react";

function Comments({comments}) {
  console.log(comments)
  const commentList = comments.map((comment) => {
    return (
      <div key={comment.id}>
        <h4>{comment.user}</h4>
        <p>{comment.comment}</p>
      </div>
    )
  })
  return (
    <div>
      <button>Comments show</button>
      <hr />
      <h3>{comments.length} Comments</h3>
      {commentList}
    </div>
  )
}

export default Comments;