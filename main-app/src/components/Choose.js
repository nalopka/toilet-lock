import React from "react";
import { Link } from "react-router-dom";

class Choose extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Link className="primaryButton" to="/add">
                    Ввести данные
                </Link>
                <Link className="primaryButton" to="/list">
                    Загрузить список кодов
                </Link>
            </React.Fragment>
        );
    }
}

export default Choose;
