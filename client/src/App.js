import React from "react";
import Navbar from "./components/Navbar";
import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Main from "./components/Main"
import PrivateRoute from "./components/PrivateRoute";

class App extends React.Component {

    state = {
        savedImgs:[]
    }

    componentDidMount = async () => {
        const res = await fetch('http://localhost:8000/pictures');
        const json = await res.json();
        this.setState(prevState => ({
            ...prevState,
            savedImgs: json
        }));
        console.log(this.state)
    };
    render() {
    return(

<div className="App">
<BrowserRouter>
<header>
<Navbar />
</header>
<Switch>
<Route path="/" component={Main} exact />
<PrivateRoute path="/profile" component={Profile} savedImgs={this.state.savedImgs} />
</Switch>
</BrowserRouter>
</div>
)
    ;
}
}

export default App;