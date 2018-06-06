import React from "react";

class AddNumberForm extends React.Component {
    render() {
        return (
            <form>
                <div className="inputWrapper">
                    <input type="text" placeholder="Enter your number" />
                </div>
                <button className="addNumber">Submit</button>
            </form>
        );
    }
}

export default AddNumberForm;
