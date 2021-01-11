import React from 'react'
import { HashRouter, Route, Redirect, Switch} from 'react-router-dom';
import  Login from '../pages/login'
import  Home from '../pages/home'
import  Detail from '../pages/detail'

class RouteMap extends React.Component {
  render() {
    return (
      <HashRouter>
        <main>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/detail/:id" exact component={Detail}/>
            <Redirect to='/' />
          </Switch>
        </main>
      </HashRouter>
    )
  }
}

export default RouteMap
