import React, { Component } from 'react';
import uniqid from "uniqid";

class Work extends Component {
    constructor(props){
        super(props);
        this.state={
            company:this.props.company,
            position:this.props.position,
            from:this.props.from,
            to:this.props.to,
            city:this.props.city,
            description:this.props.description,
            id:this.props.id,
            Error:""
        }
    }
    
    inputHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    valid = () => {
        if(this.state.company==="" || this.state.position==="" || this.state.from==="" || this.state.to==="" || 
        this.state.city==="" || this.state.description===""){
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
        }
        this.props.handleData(
            this.state.company,
            this.state.position,
            this.state.from,
            this.state.to,
            this.state.city,
            this.state.description,
            this.state.id
        )
    }

    render() { 
        return (
            <div>
                <h2>Work Experience</h2>
                <form id={uniqid()} onSubmit={this.submitTask} >
                    <input type="text" id="company" placeholder="Company" name="company" value={this.state.company} onChange={this.inputHandler} />
                    <input type="text" id="position" placeholder="Position" name="position" value={this.state.position} onChange={this.inputHandler} />
                    <label for="from" id="l1">From:</label>
                    <input type="date" id="date" name="from" value={this.state.from} onChange={this.inputHandler} />
                    <label for="to" id="l2">To:</label>
                    <input type="date" id="date" name="to" value={this.state.to} onChange={this.inputHandler} />
                    <input type="text" id="email" placeholder="City, Country" name="city" value={this.state.city} onChange={this.inputHandler} />
                    <label for="from" id="l3">Responsibility:</label>
                    <textarea type="text" id="respons" name="description" value={this.state.description} onChange={this.inputHandler} />
                    <p style={{color:"red", marginLeft:"25%"}}>{this.state.Error}</p>
                    <button type="submit" id="btn1" >Submit</button>
                </form>
                <div>
                    {this.props.buttonVisible ? (
                        <>
                        {!this.props.visible ? (
                            <button onClick={this.props.onClick} id="btn2">Add Work Experience</button>
                        ) : (
                            <button onClick={this.props.onClick} id="btn2">Remove Work Experience</button>
                        )}
                    </>
                    ):(
                    <></>
                    )}
                </div>
            </div>
        );
    }
}
 
export default Work;