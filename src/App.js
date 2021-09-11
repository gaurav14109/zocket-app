import {Fragment} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import RegistrationForm from './components/forms/Registerform'
import Loginform from './components/forms/Loginform'
import PageNotFound from './components/pagenotfound/PageNotFound'
function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Nav/>

                
                <Switch>
                <Route exact path="/"  component={Landing}/>
                    <Route exact path="/registeration"  component={RegistrationForm}/>
                    <Route exact path="/login"  component={Loginform}/>
                    <Route component={PageNotFound}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
