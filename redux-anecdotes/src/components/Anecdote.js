import React from 'react';

const Anecdote = ({ anecdote, handleClick }) => {
    return (
      <div>
        {anecdote.content}
        has {anecdote.votes} vote <button onClick={handleClick}>Vote</button>
      </div>
    )
  }

export default Anecdote;