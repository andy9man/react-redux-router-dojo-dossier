import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import './index.css';
import './ui-toolkit/css/nm-cx/main.css';
import store from './state/store.js';
import UserView from './views/UserView';
import TodoView from './views/TodoView';
import {FreakingAwesomeNavLink as CustomNav} from './components/helpers';

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <header className="margin-vert-xlarge padding-vert-large padding-horiz-xlarge">
                        <h1>Dojo Dossier</h1>
                    </header>
                            <nav>
                                <ul className="heading-nav padding-bottom-medium">
                                    <CustomNav to="/" label="Home" generalClassName="heading-nav-entry" activeOnlyWhenExact={true} />
                                    <CustomNav to="/users" label="Users" generalClassName="heading-nav-entry" activeOnlyWhenExact={true} />
                                    <CustomNav to="/todos" label="Todos" generalClassName="heading-nav-entry" activeOnlyWhenExact={true} />
                                </ul>
                            </nav>
                            <div className="row">
                                <div className="small-6 medium-10 medium-centered large-centered columns">
                                    <Switch>
                                        <Route exact path="/" component={() => (<h1>Home</h1>)} />
                                        <Route path="/users" component={UserView} />
                                        <Route path="/todos" component={TodoView} />
                                    </Switch>
                                </div>
                            </div>
                </div>
            </BrowserRouter>
        </Provider>
    )
}
ReactDOM.render(<Root />, document.getElementById('root'));
