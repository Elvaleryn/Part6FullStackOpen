import anecdoteService from '../services/anecdotes'

const anecdoteReducer  = (state = [], action) => {
  switch (action.type) {

    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'VOTE':
      const id = action.data
      const voted = state.find(a => a.id === id)
      const changed = {
        ...voted,
        votes: voted.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changed
      )
      .sort((a, b) => (a.votes > b.votes) ? -1 : 1)
      case 'INIT_ANECDOTES':      
      return action.data
      .sort((a, b) => (a.votes > b.votes) ? -1 : 1)
    default: return state
  }
}


export const vote = (anecdote) => {
  const updatedAnecdote = {
    content: anecdote.content,
    votes: anecdote.votes + 1
  }
  return async dispatch => {
    await anecdoteService.update(anecdote.id, updatedAnecdote)
    dispatch({
      type: 'VOTE',
      data: anecdote.id
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer