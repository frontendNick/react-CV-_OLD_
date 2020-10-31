//  components
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Vanilla from "./components/vanillaJavaScriptProjects/Vanilla";
import Requests from "./components/requests/Requests";

//  router
import {Route, Switch, NavLink} from 'react-router-dom'

//  Оболочка приложения -> component app, app wrapper component

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a
                className="navbar-brand"
                href="https://github.com/frontendNick?tab=repositories"
                target='_blank'
            >frontendNick</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink exact className='nav-link' to='/'><b>Home</b></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/skills'>Мои <b>навыки</b></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/vanilla'>Мои проекты на <b>чистом js</b></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/requests'>Запросы на json<b>PlaceHolder</b></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        {/*  routes registered  */}
        <Switch>
            <Route
                exact
                path='/'
                component={Home}
            />
            <Route
                path='/skills'
                component={Skills}
            />
            <Route
                path='/vanilla'
                component={Vanilla}
            />
            <Route
                path='/requests'
                component={Requests}
            />
            {/*  Route for redirect  */}
            <Route
                render={ () => <h1>redirect was happened</h1>}
            />
        </Switch>
    </div>
  );
}
export default App;
