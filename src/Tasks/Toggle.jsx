import { Component } from "react";

class Toggle extends Component {
    constructor() {
        super()
        this.state = {
            name: "prasanna",
            isVisible: true
        }
    }

    handleToggle = () => {
        this.setState({ isVisible: !this.state.isVisible })
    }

    render() {
        return (
            <>
                <h1>Toggle Task :</h1>
                <h2>{this.state.isVisible && this.state.name}</h2>
                <button onClick={this.handleToggle}>{this.state.isVisible ? "Hide" : "Show"}</button>
            </>
        )
    }
}

export default Toggle