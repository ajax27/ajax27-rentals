import React from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import FormError from './FormError';

const Error = ({ children }) =>
  <div className="alert alert-danger">
    {children}
  </div>

/*eslint-disable-next-line*/
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginForm = ({ onSubmit }) => {

  const { register, handleSubmit, errors } = useForm();
  // onSubmit = (data, e) => {
  //   e.target.reset(); // reset after form submit
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="email"
          ref={register({
            required: "Valid Email is Required",
            pattern: { value: EMAIL_PATTERN, message: "Must provide a valid Email" }
          })}
        />
        <FormError errors={errors} name="email">
          {message => <p>{message}</p>}
        </FormError>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="password"
          ref={register({
            required: "Password is Required",
            minLength: { value: 8, message: "Password has a minimum of 8 characters" }
          })}
        />
        <ErrorMessage as={<Error />} errors={errors} name="password">
          {({ message }) => <p>{message}</p>}
        </ErrorMessage>
      </div>
      <button
        type="submit"
        className="btn btn-bwm-main">
        Submit
      </button>
      <input
        className="btn btn-bwm-main"
        type="reset"
        value="Reset"
      />
    </form>
  )
}

export default LoginForm;