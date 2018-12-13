import React from 'react';
import TextField from './TextField.jsx';

const LastNameField = ({...rest}) => (
    <TextField name="lastName"
        {...rest} />
);

export default LastNameField;