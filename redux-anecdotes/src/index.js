import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

// import { createAnecdote } from './reducers/anecdoteReducer'
// import { setMessage } from './reducers/notificationReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notifications: notificationReducer
})

const store = createStore(reducer)


console.log(store.getState())

// store.subscribe(() => console.log(store.getState()))
// store.dispatch(createAnecdote('IMPORTANT'))
// store.dispatch(setMessage('combineReducers forms one reduces from many simple reducers'))

ReactDOM.render(
  <Provider store={store}>    
    <App />  
  </Provider>,  
  document.getElementById('root')
)
