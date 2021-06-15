import React, { Component } from 'react';

class Personal extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            phone: this.props.phone,
            email:this.props.email,
            Error:""
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    valid = () => {
        if(this.state.firstName==="" || this.state.lastName==="" || this.state.phone==="" || this.state.email===""){
            this.setState({
                Error: "Some input is empty"
            })
        }else{
            return true;
        }
    }

    submitTask = (e) => {
        e.preventDefault();
        if(this.valid()){
            this.setState({
                Error:""
            })
            this.props.handleData(
                this.state.firstName,
                this.state.lastName,
                this.state.phone,
                this.state.email
            )
        }
    }
    
    render() { 
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
                    type="tel"
                    pattern="[0-9]{10}"
                    id="phoneno" 
                    placeholder="Phone (length-10)"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.inputHandler}
                    />
                    <input 
                    type="email"     
                    id="email" 
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.inputHandler} 
                    />
                     <p style={{color:"red", marginLeft:"25%"}}>{this.state.Error}</p>
                    <button type="submit" id="btn1" >Submit</button>
                </form>
            </div>
        );
    }
}
 
export default Personal;