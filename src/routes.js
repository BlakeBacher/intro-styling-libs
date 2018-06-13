import React from 'react'
import BootstrapClass from './Components/BootstrapClass'
import BootstrapComponent from './Components/BootstrapComponent'
import AntDesign from './Components/AntDesign'
import Semantic from './Components/Semantic'
import Material from './Components/Material'
import { Route, Switch } from 'react-router-dom'

export default (
    <Switch>
        <Route exact path='/' render={ () => <h1> Click the links on the nav bar above to see an example of each library </h1> } />
        <Route path='/bootstrap/class' component={ BootstrapClass } />
        <Route path='/bootstrap/component' component={ BootstrapComponent } />
        <Route path='/antdesign' component={ AntDesign } />
        <Route path='/semantic' component={ Semantic } />
        <Route path='/material' component={ Material } />
    </Switch>
)

