import React from "react";

class AddNumberForm extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Number..." />
                <button>Add</button>
            </form>
        );
    }
}

export default AddNumberForm;
