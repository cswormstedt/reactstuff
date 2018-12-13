import React from "react";

import Greetings from './Greetings.jsx';

export default class SimpleForm extends React.Component {
    state = {
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: ""
        };
    
    validateName = name => {
        const regex = /[A-Za-z]{3,}/;

        return !regex.test(name)
            ? "the name must be at least three letters. Numbers and Special characters are not allowed"
            : "";
    };

    onFirstNameBlur = () => {
        const {firstName} = this.state;

        const firstNameError = this.validateName(firstName);

        return this.setState({firstNameError});
    };
    onLastNameBlur = () => {
        const {lastName} = this.state;

        const lastNameError = this.validateName(lastName);

        return this.setState({lastNameError});
    };

    onFirstNameChange = event =>
    this.setState({
        firstName: event.target.value
    });

    onLastNameChange = event =>
    this.setState({
        lastName: event.target.value
    });
    render() {
        const {firstNameError, firstName, lastName, lastNameError} = this.state;

        return ( 
            <div >
                <div>
                    <input
                        type="text" 
                        placeholder="First Name"
                        name="firstName" 
                        onChange={this.onFirstNameChange}
                        onBlur={this.onFirstNameBlur}
                    />
                    {firstNameError && <div>{firstNameError}</div>}
                </div>
                <div>
                    <input 
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={this.onLastNameChange}
                        onBlur={this.onLastNameBlur}
                    />
                    {lastNameError && <div>{lastNameError}</div>}
                </div>
    
                <Greetings 
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                />
            </div>
            
        );
    }
}

