import React, { Component } from 'react'

export class UserForm extends Component {
    state = {
        step: 1, 
        firstName: "",
        lastName: "",
        email: "",
        typeOfAccount: "",
        teacherName: "",
        className: "",
        displayName: "",
        password: "",
        themeColor: "",
        gradeLevel: "",
        studentHobby: ""
    }

    //Creating steps to go through form signup process
    //step 1: everyone completes... firstName, lastName, email, password

    //step 2: everyone completes.. displayName, typeOfAccount
        // will use a toggle 
            //if student: teacher dropdown, studentHobby
            //if teacher: className, themeColor, studentEmails

    //step 3: everyone sees.. confirmation of their inputs based on typeOfAccount
        //should there be a student confirmation and a teacher confirmation?

    //step 4: everyone sees.. Success message letting them know they are registered

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    //check for type of account set state based on input
    // typeOfUserAccount = typeOfAccountValue => {        
    //     switch(typeOfAccountValue){
    //         case "student":
    //             this.setState({
    //                 typeOfAccount: "student"
    //             })
    //         case "teacher":
    //             this.setState({
    //                 typeOfAccount: "teacher"
    //             })
    //     }
    // }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, typeOfAccount, teacherName, displayName, password, themeColor, gradeLevel, studentHobby } = this.state;
        
        
    }
}

export default UserForm
