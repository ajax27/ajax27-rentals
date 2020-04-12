import React from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import { sameAs } from 'helpers/validators';

const Error = ({ children }) =>
  <div className="alert alert-danger">
    {children}
  </div>

/*eslint-disable-next-line*/
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const RegisterForm = ({ onSubmit }) => {

  const { register, handleSubmit, getValues, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          className="form-control"
          id="username"
          ref={register({
            required: "Username is Required",
            maxLength: { value: 20, message: "Username has a minimum of 20 characters" }
          })}
        />
        <ErrorMessage as={<Error />} errors={errors} name="username">
          {({ message }) => <p>{message}</p>}
        </ErrorMessage>
      </div>

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
        <ErrorMessage as={<Error />} errors={errors} name="email">
          {({ message }) => <p>{message}</p>}
        </ErrorMessage>
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

      <div className="form-group">
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          name="passwordConfirmation"
          type="password"
          className="form-control"
          id="passwordConfirmation"
          ref={register({
            required: true,
            minLength: 8,
            validate: { sameAs: sameAs('password', getValues) }
          })}
        />
        {errors.passwordConfirmation &&
          <div className="alert alert-danger">
            {errors.passwordConfirmation.type === 'required' &&
              <span>Password confirmation is required!</span>
            }
            {errors.passwordConfirmation.type === 'minLength' &&
              <span>Minimum length of password confirmation is 8 characters!</span>
            }
            {errors.passwordConfirmation.type === 'sameAs' &&
              <span>Password confirmation and Password must match!</span>
            }
          </div>
        }
      </div>
      <button
        type="submit"
        className="btn btn-bwm-main">Submit</button>
      <input
        className="btn btn-bwm-main"
        type="reset"
        value="Reset"
      />
    </form>
  )
}

export default RegisterForm;
