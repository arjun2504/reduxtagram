import React from 'react'

import App from '../components/App'
import PhotoGrid from '../components/PhotoGrid'
import Single from '../components/Single'

//import react router dependencies
import { Route, IndexRoute } from 'react-router'

function routes() {
  return(
    <Route path="/" component={ App }>
        <IndexRoute component={ PhotoGrid } />
        <Route path="/view/:id" component={ Single } />
    </Route>
  )
}

export default routes
