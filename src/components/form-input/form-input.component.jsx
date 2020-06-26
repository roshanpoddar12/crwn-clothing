import React from 'react';

import './form-input.styles.scss';
//The reason we are using handle change here is that we want to bubblr up any change in onChange
const FormInput = ({ handleChange , label, ...otherProps })=>(
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label?
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;