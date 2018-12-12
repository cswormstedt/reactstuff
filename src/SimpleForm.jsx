import React from "react";
import style from './Style.js';
import Greetings from './Greetings.jsx';

export default class SimpleForm extends React.Component {
    state = {
        firstName: "",
        firstNameError: "",
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

    onFirstNameChange = event =>
    this.setState({
        firstName: event.target.value
    });
    render() {
        const {firstNameError, firstName} = this.state;

        return ( 
                <div style={style.form}>>
                <div style={style.inputGroup}>
                    <label>
                        First Name:
                        <input 
                            style={style.input}
                            type="text" 
                            name="firstName" 
                            onChange={this.onFirstNameChange}
                            onBlur={this.onFirstNameBlur}
                        />
                        {firstNameError && <div style={style.error}>{firstNameError}</div>}
                    </label>
                    
                </div> 
                    <Greetings 
                        firstName={this.state.firstName}
                    />
            </div>
            
        );
    }
}

