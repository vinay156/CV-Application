import React, { Component } from 'react';
import uniqid from "uniqid";


class Education extends Component {
    constructor(props){
        super(props);
        this.state = {
            university:this.props.university,
            major:this.props.major,
            stu_from:this.props.stu_from,
            stu_to:this.props.stu_to,
            location:this.props.location,
            details:this.props.details,
            id: this.props.id,
            Error:""
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    valid = () => {
        if(this.state.university==="" || this.state.major==="" || this.state.stu_from==="" || this.state.stu_to==="" || 
        this.state.location==="" || this.state.details===""){
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
            this.state.university,
            this.state.major,
            this.state.stu_from,
            this.state.stu_to,
            this.state.location,
            this.state.details,
            this.state.id
        )
    }
    
    render() { 
        return (
            <div>
                <h2>Education</h2>
                <form id={uniqid()} onSubmit={this.submitTask}>
                    <input type="text" id="university" placeholder="University" name="university" value={this.state.university} onChange={this.inputHandler} />
                    <input type="text" id="major" placeholder="Major" name="major" value={this.state.major} onChange={this.inputHandler}/>
                    <label for="from" id="l1">From:</label>
                    <input type="date" id="date" name="stu_from" value={this.state.stu_from} onChange={this.inputHandler}/>
                    <label for="to" id="l2">To:</label>
                    <input type="date" id="date" name="stu_to" value={this.state.stu_to} onChange={this.inputHandler} />
                    <input type="text" id="email" placeholder="City, Country" name="location" value={this.state.location} onChange={this.inputHandler} />
                    <label for="from" id="l3">Details:</label>
                    <textarea id="details" name="details" value={this.state.details} onChange={this.inputHandler}/>
                    <p style={{color:"red", marginLeft:"25%"}}>{this.state.Error}</p>
                    <button type="submit" id="btn1" >Submit</button>
                </form>
                <div>
                {this.props.buttonVisible ? (
                    <>
                    {!this.props.visible ? (
                            <button onClick={this.props.onClick} id="btn2">Add Education</button>
                        ) : (
                            <button onClick={this.props.onClick} id="btn2">Remove Education</button>
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
 
export default Education;