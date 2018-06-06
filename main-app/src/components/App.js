import React from "react";
import { Link } from "react-router-dom";

import Main from "./Main";

class App extends React.Component {
    render() {
        return (
            <div className="mainWrapper">
                <h1>Welcome!</h1>
                <div className="links">
                    <Link className="primaryButton" to="/add">
                        Add
                    </Link>
                    <Link className="primaryButton" to="/list">
                        Load codes
                    </Link>
                </div>
                <Main />
            </div>
        );
    }
}

export default App;
