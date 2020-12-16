import React from "react";


export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (event) => {
    event.preventDevfault();
    submit();
  };

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Regisration</h2>

        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.terms}</div>
        </div>
      </div>

      <div className="form-group inputs">
        <h4>Information</h4>

        <label>
          Name
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          />
          <br />
        </label>

        <label>
          Email
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="text"
          />
          <br />
        </label>

        <label>
          Password
          <input
            value={values.password}
            onChange={onChange}
            name="password"
            type="text"
          />
          <br />
        </label>

        <label>
          Terms of Service
          <input
            type="checkbox"
            name="terms"
            onChange={onChange}
            checked={values.terms}
          />
          <br />
        </label>
      </div>
      <button disabled={disabled}>submit</button>
    </form>
  );
}