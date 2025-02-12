import React, { Component } from "react";
// import './Form.css';
class Form extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            formdata: [] 
        };
    }

    handlechange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handlesubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = this.state;
        this.setState({ formdata: [...this.state.formdata,{username, email, password } ]});
    };

    render() {
        console.log(this.state);

        return (
            <>
                <h1>Forms:</h1>
                <form onSubmit={this.handlesubmit}>
                    <label htmlFor="username">Name:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter username"
                        value={this.state.username}
                        onChange={this.handlechange}
                    />
                    <br /><br />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={this.handlechange}
                    />
                    <br /><br />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={this.handlechange}
                    />
                    <br /><br />

                    <button type="submit">Submit</button>
                </form>

                <h2>Submitted Data:</h2>
                {this.state.formdata.length > 0 ? (
                    this.state.formdata.map((user, index) => (
                        <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
                            <h3>Name: {user.username}</h3>
                            <h3>Email: {user.email}</h3>
                            <h3>Password: {user.password}</h3>
                        </div>
                    ))
                ) : (
                    <p>No data submitted yet.</p>
                )}
            </>
        );
    }
}

export default Form;