import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";
import schema from "./formSchema";
import * as yup from "yup";
import Person from './Person'

const initialFormValues = { name: "", email: "", password: "", terms: false };
const initialFormErrors = { name: "", email: "", password: "" };

export default function App() {

  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);


  const postNewUser = (newUser) => {
    axios
     
      .post("https://reqres.in/api/users", newUser)
      .then(response => {
        setUsers([response.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch(error => {
        console.log(error);
        debugger;
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser);
  };
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
console.log(users)
  return (
    <div className="container">
      <header>
        <h1>Users</h1>
      </header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

    <Person details={users} />
    </div>
  );
}