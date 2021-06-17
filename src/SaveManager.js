import React from 'react';
import SaveButton from "./SaveButton";
import AlertBox from "./AlertBox";

const IDLE = 'IDLE';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const WAITING = 'WAITING';
class SaveManager extends React.Component {
    // props { saveFunction, data }
    constructor() {
        super();
        this.state = { saveStatus: IDLE }
        this.handleSave = this.handleSave.bind(this);
    }

    handleSave(event) {
        event.preventDefault();
        this.setState(() => ({ saveStatus: WAITING }))
        this.props.saveFunction(
            () => { this.setState(() => ({ saveStatus: SUCCESS }))},
            () => { this.setState(() => ({ saveStatus: FAILURE }))}
        )
    }

    render() {
        return (
            <div className="flex flex-column mv-2">
                <SaveButton onSave={this.handleSave} />
                <AlertBox status={this.state.saveStatus} />
            </div>
        );
    }
}

export default SaveManager;
