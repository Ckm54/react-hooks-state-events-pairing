import React, { useState } from "react";

function Votes({upvotes, downvotes}) {
  const [vote, upvote] = useState(upvotes)

  function upVote(){
    upvote(vote + 1)
    console.log(vote)
  }

  const [votes, downvote] = useState(downvotes)
  function downVote() {
    downvote(votes - 1)
  }
  return (
    <>
    <button onClick={upVote}>{vote}👍</button>
    <button onClick={downVote}>{votes}👎</button>
    </>
  )
}

export default Votes;