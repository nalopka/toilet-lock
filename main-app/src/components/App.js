import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Main from "./Main";

class App extends React.Component {
    render() {
        return (
            <div className="mainWrapper">
                <h1>Welcome to starbucks toilet app!</h1>
                <Main />
            </div>
        );
    }
}

export default App;
