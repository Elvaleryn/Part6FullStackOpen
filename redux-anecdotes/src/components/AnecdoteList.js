import React from 'react';
import { connect } from 'react-redux'
import Anecdote from './Anecdote'
import { vote } from '../reducers/anecdoteReducer'


const AnecdoteList = ({store}) => {
    return (
        <div>
            {store.getState().anecdotes.map(anecdote => 
            <Anecdote 
                key={anecdote.id}
                anecdote={anecdote}
                handleClick={() => store.dispatch(vote(anecdote.id))}
            />
        )}
        </div>
    );
};


const mapStateToProps = {
      vote

  }
  

const ConnectedNotes = connect(mapStateToProps)(AnecdoteList)
export default ConnectedNotes