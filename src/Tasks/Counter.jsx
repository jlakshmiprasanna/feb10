import { Component } from "react";

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }


    handleIncrement = () => {
        if(this.state.count < 100)
        this.setState({count : this.state.count + 1})
    }

    handleDecrement = () => {
        this.setState({count : this.state.count - 1})
    }

    handlereset = () => {
        this.setState({count : 0})
    }

    render(){
        return (
            <>
            <h1>Counter App :</h1>
                <h2>Count : {this.state.count} </h2>

                <button disabled={this.state.count >= 100} onClick={this.handleIncrement}>Increment</button>
                <button disabled={this.state.count == 0} onClick={this.handlereset}>reset</button>
                <button disabled={this.state.count <= 0} onClick={this.handleDecrement}>Decrement</button>
            </>
        )
    }
}


export default Counter;