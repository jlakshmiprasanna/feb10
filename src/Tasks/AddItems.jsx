import { Component } from "react";

class AddItems extends Component {

    constructor() {
        super()
        this.state = {
            text: "",
            items: []
        }
    }

    handelChange = (e) => {
        this.setState({
            text: e.target.value
        })

    }

    handleadd = () => {
        this.setState({items: [...this.state.items, this.state.text]}
    )}

    render() {
        return (
            <>
            <h1>Add Items :</h1>
                <input
                    type="text"
                    placeholder="addtext"
                    onChange={this.handelChange}
                />

                <button onClick={this.handleadd}>Add</button>

                <div>
                    {this.state.items.map((items, index) => (
                        <>
                            <h1 key={index}>{items}</h1>
                        </>

                    ))}
                </div>
            </>
        )
    }

}

export default AddItems;