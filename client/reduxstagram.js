// let's go!
import React from 'react'
import { render } from 'react-dom'

//import css
import css from './styles/style.styl'

import { Router } from 'react-router'
import route from './routes/routes'
import { Provider } from 'react-redux'
import store, { history } from './store'

render(
  <Provider store={ store }>
    <Router history={ history }>
      { route() }
    </Router>
  </Provider>,
  document.getElementById('root')
)
