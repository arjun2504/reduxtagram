import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

//import root reducer
import rootReducer from './reducers/index'

//import data
import comments from './data/comments'
import posts from './data/posts'

const defaultState = {
  posts,
  comments
}

const enhancers = compose(
  window.devToolExtension ? window.devToolExtension() : f => f
)

const store = createStore(rootReducer, defaultState, enhancers)
export const history = syncHistoryWithStore(browserHistory, store)

//hot reloading of reducers
if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
