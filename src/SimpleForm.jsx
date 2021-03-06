import React from "react";
import Greetings from './Greetings.jsx';
import TextField from './TextField.jsx';
import FirstNameField from './FirstNameField.jsx';
import LastNameField from './LastNameField.jsx';

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
                <FirstNameField
                    onChange={this.onFirstNameChange}
                    onBlur={this.onFirstNameBlur}
                    error={firstNameError}             
                />
                <LastNameField
                    onChange={this.onLastNameChange}
                    onBlur={this.onLastNameBlur}
                    error={lastNameError}
                />
                <Greetings 
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                />
            </div>       
        );
    }
}

