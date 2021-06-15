import React, { Component } from 'react';
import DisplayCv from './components/display-cv';
import Education from './components/education';
import Personal from "./components/personal-info"
import Work from "./components/work-experience"
import "./styles.css"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      personalInformations: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      },
      work_1: {
        company: "",
        position: "",
        from: "",
        to: "",
        city: "",
        description: "",
      },
      work_2: {
        company: "",
        position: "",
        from: "",
        to: "",
        city: "",
        description: "",
      },
      edu_1: {
        university: "",
        major: "",
        stu_from: "",
        stu_to: "",
        location: "",
        details: "",
      },
      edu_2: {
        university: "",
        major: "",
        stu_from: "",
        stu_to: "",
        location: "",
        details: "",
      },
      resumeIsVisible: false,
      work2Visible: false,
      edu2Visible: false,
    };
  }

  handlePersonalData = (firstName, lastName, phone, email) => {
    this.setState({
      personalInformations:{
        firstName:firstName,
        lastName:lastName,
        phone:phone,
        email: email
      }
    })
  }


  handleWorkData = (company, position, from, to, city, description, id) => {
    this.setState({
      [id]:{
        company:company,
        position:position,
        from:from,
        to:to,
        city:city,
        description:description
      }
    })
  }

  handleEducationData = (university, major, stu_from, stu_to, location, details, id) => {
    this.setState({
      [id]:{
        university:university,
        major:major,
        stu_from:stu_from,
        stu_to:stu_to,
        location:location,
        details:details
      }
    })
  }

  toggleResumeDisplay = () => {
    this.setState({
      resumeIsVisible: !this.state.resumeIsVisible
    })
  }

  toggleWork2 = () => {
    this.setState({
      work2Visible : !this.state.work2Visible
    })
  }

  toggleEducation2 = () => {
    this.setState({
      edu2Visible : !this.state.edu2Visible
    })
  }

  render(){
    const {firstName, lastName, phone, email} = this.state.personalInformations;
    const {company, position, from, to, city, description} = this.state.work_1;
    const {university, major, stu_from, stu_to, location, details} = this.state.edu_1;
    return (
      <div>
        <header id="header">CV Application</header>
        <div className="section">
          {!this.state.resumeIsVisible ? (
            <>
             <Personal
             handleData={this.handlePersonalData}
             firstName={firstName}
             lastName={lastName}
             phone={phone}
             email={email} 
             />
             <Work 
             id="work_1"
             handleData={this.handleWorkData}
             company={company}
             position={position}
             from={from}
             to={to}
             city={city}
             description={description}
             onClick={this.toggleWork2}
             visible={this.state.work2Visible}
             buttonVisible={true}
             />
             {this.state.work2Visible && (
                <Work
                  id="work_2"
                  handleData={this.handleWorkData}
                  company={this.state.work_2.company}
                  position={this.state.work_2.position}
                  from={this.state.work_2.from}
                  to={this.state.work_2.to}
                  location={this.state.work_2.city}
                  details={this.state.work_2.description}
                  onClick={this.toggleWork2}
                  visible={this.state.work2Visible}
                  buttonVisible={false}
                />
              )}
             <Education 
             id="edu_1"
             handleData={this.handleEducationData}
             university={university}
             major={major}
             stu_from={stu_from}
             stu_to={stu_to}
             location={location}
             details={details}
             onClick={this.toggleEducation2}
             visible={this.state.edu2Visible}
             buttonVisible={true}
             />
              {this.state.edu2Visible && (
                <Education 
                id="edu_2"
                handleData={this.handleEducationData}
                university={this.state.edu_2.university}
                major={this.state.edu_2.major}
                stu_from={this.state.edu_2.stu_from}
                stu_to={this.state.edu_2.stu_to}
                location={this.state.edu_2.location}
                details={this.state.edu_2.details}
                onClick={this.toggleEducation2}
                visible={this.state.edu2Visible}
                buttonVisible={false}
                />
              )}
              <div>
                <button id="btn3" onClick={this.toggleResumeDisplay}>Display CV</button>
              </div>
             </>
          ):(
            <div>
              <DisplayCv 
              personalInformations={this.state.personalInformations} 
              work_1={this.state.work_1}
              work_2={this.state.work_2}
              edu_1={this.state.edu_1}
              edu_2={this.state.edu_2}
              />
              <div>
                  <button id="btn3" onClick={this.toggleResumeDisplay}>Edit CV</button>
                  {/* <a href="/display-cv" download="cv"><button type="button">Download</button></a> */}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
