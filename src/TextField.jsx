import React from 'react';

const TextField = ({name, onChange, onBlur, error}) => (
    <form class="needs-validation" novalidate>
        <div>
            <label for="validationCustom01">{name}</label>
            <input 
                type="text"
                name="name"
                onChange="onChange"
                onBlur="onBlur"
                class="form-control" 
                id="validationCustom01" 
                placeholder="" 
                value="" 
                required
                />
            {error && <div>{error}</div>}
        </div>
    </form>
    
);

export default TextField;