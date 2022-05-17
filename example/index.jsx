import React from 'react';
import { render } from 'react-dom';
import Layout from './layout';
import { HashRouter, Route, Switch,Redirect} from 'react-router-dom'
render(<div>
    <HashRouter history={history}>
        <Switch>
            <Route exact path='/' component={Layout} />
            <Route exact path='/components/*' component={Layout} />
            <Route exact path='/login' component={()=>{return <div>111</div>}} />
            <Route exact path='/404' component={()=>{return <div>404</div>}} />
            <Redirect to="/404"/>
        </Switch>
    </HashRouter>
</div>, document.querySelector("#root"))