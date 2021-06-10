import React, { Component } from 'react';

class DisplayCv extends Component {
    constructor(props){
        super(props);
        this.state={
            personalInformations:this.props.personalInformations,
            work_1:this.props.work_1,
            work_2:this.props.work_2,
            edu_1:this.props.edu_1,
            edu_2:this.props.edu_2
        }
    }


    render() { 
        return ( 
            <div id="display">
                <div id="resume">
                  <h1>Resume</h1>
                  <div id="personalInfo" >
                    <p>Name: {this.state.personalInformations.firstName} {this.state.personalInformations.lastName}</p>
                    <p>Phone: {this.state.personalInformations.phone}</p>
                    <p>Email: {this.state.personalInformations.email} </p>
                  </div>
                </div>
                <div id="workExp">
                    <h1>Work Experience</h1>
                    <p id="dis-city">{this.state.work_1.city}</p>
                    <h3>{this.state.work_1.position}, {this.state.work_1.company}</h3>
                    <p>{this.state.work_1.from} - {this.state.work_1.to}</p>
                    <br/>
                    <p>{this.state.work_1.description}</p>
                    {this.state.work_2.company !== "" ? (
                        <>
                        <p id="dis-city">{this.state.work_2.city}</p>
                        <h3>{this.state.work_2.position}, {this.state.work_2.company}</h3>
                        <p>{this.state.work_2.from} - {this.state.work_2.to}</p>
                        <br/>
                        <p>{this.state.work_2.description}</p>
                        </>
                    ):(
                        <></>
                    )}
                </div>
                <div id="education">
                    <h1>Education</h1>
                    <p id="dis-city">{this.state.edu_1.location}</p>
                    <h3>{this.state.edu_1.major}, {this.state.edu_1.university}</h3>
                    <p>{this.state.edu_1.stu_from} - {this.state.edu_1.stu_to}</p>
                    <br/>
                    <p>{this.state.edu_1.details}</p>
                    {this.state.edu_2.university !=="" ? (
                        <>
                        <p id="dis-city">{this.state.edu_2.location}</p>
                        <h3>{this.state.edu_2.major}, {this.state.edu_2.university}</h3>
                        <p>{this.state.edu_2.stu_from} - {this.state.edu_2.stu_to}</p>
                        <br/>
                        <p>{this.state.edu_2.details}</p>
                    </>
                    ):(
                        <></>
                    )}
                </div>
            </div>
         );
    }
}
 
export default DisplayCv;