import React from 'react';
import Landingpage from './landingpage';
import Home from './home';
import Aboutme from './aboutme';
import Contact from './contact';
import Register from './register';
import Login from './login';
import { Switch , Route} from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/landingpage" component={Landingpage} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/contact" component={Contact} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
    </Switch>
)
export default Main;