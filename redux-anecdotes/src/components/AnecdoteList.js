import React from 'react';
import { connect } from 'react-redux'
import Anecdote from './Anecdote'
import { vote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/notificationReducer'



const AnecdoteList = (props) => {
	
	const addVote = (anecdote) => {
		props.vote(anecdote.id)
    props.setMessage(`you voted '${anecdote.content}'`)
}
	
    return (
        <div>
            {props.visibleAnecdotes.map(anecdote => 
            <Anecdote 
                key={anecdote.id}
                anecdote={anecdote}
                handleClick={() => addVote(anecdote)}
            />
        )}
        </div>
    );
};


const anecdotesToShow = ({anecdotes, filter}) => {
  return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
}

const mapStateToProps = (state) => {
	return {
    visibleAnecdotes: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
	vote,
	setMessage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)