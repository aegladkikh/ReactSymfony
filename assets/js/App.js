import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Note} from "./pages/Note";
import {Search} from "./pages/Search";
import {Navbar} from "./components/Navbar";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {FirebaseState} from "./context/firebase/FirebaseState";
import {Footer} from "./components/Footer";
import {Aside} from "./components/Aside";

export default function App() {
    return (
        <FirebaseState>
            <AlertState>
                <BrowserRouter>
                    <header>
                        <Navbar/>
                    </header>
                    <main role="main" className="container pt-4">
                        <div className="row">
                            <div className="col-md-8 blog-main">
                                <Alert/>
                                <Switch>
                                    <Route path={'/'} exact component={Home}/>
                                    <Route path={'/search'} component={Search}/>
                                    <Route path={'/about'} component={About}/>
                                    <Route path={'/note/:id'} component={Note}/>
                                </Switch>
                            </div>
                            <Aside/>
                        </div>
                    </main>
                    <Footer/>
                </BrowserRouter>
            </AlertState>
        </FirebaseState>
    )
}