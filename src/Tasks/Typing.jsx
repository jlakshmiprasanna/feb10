import { Component } from "react";

class Typing extends Component {
    constructor(){
        super()
        this.state = {
            showText : "Prasanna"
        }
    }

    handleInputValue = (event) => {
        console.log(event)
        this.setState({showText : event.target.value})
    }

    render(){
        return (
            <>
            <h1>Typing :</h1>
            <p><b>Typed Value : {this.state.showText}</b></p>
            <input type="text" placeholder="type something..." onChange={this.handleInputValue} />
            </>
        )
    }
}
export default Typing 