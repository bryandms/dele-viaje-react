import React from 'react'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import { isAuth } from '../helpers/auth'
import store from '../store/index'

import Layout from '../components/Partials/Layout'
import Authorization from '../components/Auth/Authorization'
import NotFound from '../components/Errors/NotFound'
import Home from '../components/Home'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import Logout from '../components/Auth/Logout'
import AdminDashboard from '../components/Admin/AdminDashboard'
import UserDashboard from '../components/User/UserDashboard'
import ShowPlace from '../components/Place/ShowPlace'

const Admin = Authorization(['admin'], store)
const User = Authorization(['user'], store)
const AdminUser = Authorization(['admin', 'user'], store)

const PrivateRoute = props =>
  isAuth() ? <Layout {...props} /> : <Redirect to='/login' />

export default () => (
  <Router>
    <Switch>
      <Layout path='/' exact component={Home} />
      <Layout path='/login' exact component={Login} />
      <Layout path='/register' exact component={Register} />
      <Layout path='/logout' exact component={Logout} />
      <Layout path='/place/:id' exact component={ShowPlace} />
      <PrivateRoute path='/dashboard' exact component={User(UserDashboard)} />
      <PrivateRoute path='/admin/dashboard' exact component={Admin(AdminDashboard)} />
      <Layout component={NotFound} />
    </Switch>
  </Router>
)
