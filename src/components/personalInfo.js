import React, { Component } from 'react';

class Personal extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            phone: this.props.phone,
            email:this.props.email
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitTask = (e) => {
        e.preventDefault();
        this.props.handleData(
            this.state.firstName,
            this.state.lastName,
            this.state.phone,
            this.state.email
        )
    }
    
    render() { 
        console.log(this.state);
        return (
            <div>
                <h2>Personal Information</h2>
                <form onSubmit={this.submitTask}>
                    <input 
                    type="text"
                    id="name"
                    placeholder="Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.inputHandler}
                    />
                    <input 
                    type="text" 
                    id="surname" 
                    placeholder="Surname"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.inputHandler}
                    />
                    <input 
                    type="text" 
                    id="phoneno" 
                    placeholder="Phone No"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.inputHandler}
                    />
                    <input 
                    type="text"     
                    id="email" 
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.inputHandler} 
                    />
                    <button type="submit" id="btn1" >Submit</button>
                </form>
            </div>
        );
    }
}
 
export default Personal;