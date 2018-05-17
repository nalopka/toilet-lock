import React from "react";
import { Switch, Route } from "react-router-dom";

import ListCode from "./ListCode";
import AddNumberForm from "./addNumberForm";
import Choose from "./Choose";
import NotFound from "./NotFound";

class Main extends React.Component {
    render() {
        return (
            <div className="linkWrapper">
                <Switch>
                    <Route exact path="/" component={Choose} />
                    <Route path="/add" component={AddNumberForm} />
                    <Route path="/list" component={ListCode} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default Main;
