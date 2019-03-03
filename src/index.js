import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

import Routes from './routes/index'
import store from './store/index'

import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import 'react-photoswipe-component/src/style.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

const client = new ApolloClient({
  uri: process.env.REACT_APP_CLIENT,
  request: async (operation) => {
    const token = await localStorage.getItem('token') || ''
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
