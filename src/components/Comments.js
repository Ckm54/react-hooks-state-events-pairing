import React, { useState } from "react";

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

  const [showing, setShowing] = useState(true)
  function handleComments() {
    setShowing((showing) => !showing)
  }
  const btnText = showing ? "Hide comments" : "Show Comments"
  return (
    <div>
      <button onClick={handleComments}>{btnText}</button>
      <hr />
      <h3>{comments.length} Comments</h3>
      {showing ? commentList : ""}
    </div>
  )
}

export default Comments;