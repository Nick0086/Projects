import React from "react";

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "Nikunj",
            email: "nikunj99@gmail.com"
        }
    }

    getUser = () => {
        this.setState({name:"Nikunj Kalathiya"});
    }

    render() {
        return (
            <>
                <h1>Welcome to the home page!</h1>
                <h3>Name : {this.state.name}</h3>
                <h3>Email : {this.state.email}</h3>
                <h4>Contact : {this.props.Contact}</h4>
                <button onClick={this.getUser} >Click</button>
            </>
        )
    }

}

export default Home;