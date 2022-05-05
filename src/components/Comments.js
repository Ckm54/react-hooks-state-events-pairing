import React, { useState } from "react";
import Votes from "./Votes";

function Comments({comments}) {
  console.log(comments)
  const [commentsDisplay, setComment] = useState(comments)
  let inputFromUser;
  
  function getInputValue(event) {
    event.preventDefault()
    inputFromUser = event.target.value
  }

  function handleSubmit(event) {
    event.preventDefault()

    const commentsDisplayed = comments.filter((comment) => {
      if(!inputFromUser){
        return comment;
      } else {
        return (comment.user === inputFromUser)
      }
    })
    setComment(commentsDisplayed)
  }

  

  const commentList = commentsDisplay.map((comment) => {
    let initialUp = 0
    let initialDown = 0
    return (
      <div key={comment.id}>
        <h4>{comment.user}</h4>
        <p>{comment.comment}</p>
        <Votes upvotes={initialUp} downvotes={initialDown}/>
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
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search by username..." onChange={getInputValue}/>
        <input type="submit" value="Search" />
      </form>
      <br/>
      <br/>
      <h3>{comments.length} Comments</h3>
      {showing ? commentList : ""}
    </div>
  )
}

export default Comments;