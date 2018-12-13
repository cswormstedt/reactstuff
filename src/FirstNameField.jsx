import React from 'react';
import TextField from './TextField.jsx';

const FirstNameField = ({...rest}) =>(
    <TextField name="firstName"
               {...rest}/>
);

export default FirstNameField;