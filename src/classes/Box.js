import * as React from "react";

export default class Box extends React.Component {
    render(value, playerSign) {
        if (value === 4 || value === 7) {
            return (<div className="box new-line" onClick={event => this.handleClick(event, playerSign)}>
            </div>);
        }
        return (<div className="box" onClick={event => this.handleClick(event, playerSign)}>
        </div>);
    }

    handleClick = (event, playerSign) => {
        event.target.textContent = playerSign;
    };
}
