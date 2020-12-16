import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './Form'
import * as yup from 'yup'
import schema from "./formSchema";
import Person from './Person'


const InitialFormValues = {
  // text input
name: '',
email: '',
password:'',
// checkbox
tos:'', // terms of service
}

const InitialFormErrors = {
  name:'',
  email:'',
  password:'',
}
const initialPeople = []
const initialDisabled = true;




export default function App(){


const [people, setPeople] = useState(initialPeople) // will be thre array that holds everyone
const [formValues, setFormValues] = useState(InitialFormValues) // the object of starting values
const {errors, setErrors} = useState(InitialFormErrors) // object with errors 
const [disabled, setDisabled] = useState(initialDisabled) // boolean about whether the button is disabled or not


const postNewPerson = (newPerson) => {
  axios
  .post('https://reqres.in/api/users', newPerson )
  .then(response => {
    setPeople([response.data, ...people])
    setFormValues(InitialFormValues)
    console.log(response)
  })
  .catch(error => {
    debugger
  })
}

const inputChange = (name, value) => {
  yup
    .reach(schema, name) 
    .validate(value) 
    .then(() => {
  
      setErrors({
        ...errors,
        [name]: "",
      });
    })

    .catch((error) => {
      setErrors({
        
        [name]: error.errors[0],
      });
    });

  setFormValues({
    ...formValues,
    [name]: value, 
  });
};

const formSubmit = () => {
  const newPerson = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    tos: ["agree", "decline"].filter(
      (terms) => formValues[terms]
    ),
  };
 
  postNewPerson(newPerson);
};

useEffect(() => {
  schema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  });
}, [formValues]);



return (
  <div>
    <h1>Register</h1>

    <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={errors}
      />
  </div>


)

}
