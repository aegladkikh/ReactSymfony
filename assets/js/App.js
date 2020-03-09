import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {FirebaseState} from "./context/firebase/FirebaseState";
import {Footer} from "./components/Footer";

export default function App() {
    return (
        <FirebaseState>
            <AlertState>
                <BrowserRouter>
                    <header>
                        <Navbar/>
                    </header>
                    <main role="main">
                        <div className="container pt-4">
                            <Alert/>
                            <Switch>
                                <Route path={'/'} exact component={Home}/>
                                <Route path={'/about'} component={About}/>
                            </Switch>
                        </div>
                    </main>
                    <Footer/>
                </BrowserRouter>
            </AlertState>
        </FirebaseState>
    )
}