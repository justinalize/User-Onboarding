import React from 'react'

export default function Form(props){
const { values, submit, change, disabled, errors  } = props;

// what it does when u press submit
const onSubmit = event => {
    event.preventDefault()
    submit()
}

// what it does when things change
const onChange = event => {
    const { name, value, type, checked } = event.target
    // if the value type is checkbox use checked to change and if its not checkbox then use the value
    change(name, value)
}

const onCheck = event => {
    const { name, value, type, checked } = event.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
}

return (
<form onSubmit={onSubmit}>
<div>
<h2>Information</h2>
<button disabled={disabled}>Submit</button>
    <div >
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
    </div>
</div>

        <div>
        <label>
        Name
        <input 
        value={values.name}
        onChange={onChange}
        name='name'
        type='text'
        />
        </label>

        <label>
        Email
        <input 
        value={values.email}
        onChange={onChange}
        name='email'
        type='text'
        />
        </label>

        <label>
        Password
        <input 
        value={values.password}
        onChange={onChange}
        name='password'
        type='text'
        />
        </label>

        <h4>terms of servive</h4>
        <label>
        Agree
        <input 
        value={values.agree}
        onChange={onCheck}
        name='agree'
        type='checkbox'
        />
        </label>

        <label>
        Decline
        <input 
        value={values.decline}
        onChange={onChange}
        name='decline'
        type='checkbox'
        />
        </label>


</div>
</form>
)
}