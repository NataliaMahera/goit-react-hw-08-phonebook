import React from 'react';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onLoginSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    console.log('data login ', formData);

    dispatch(loginThunk(formData));
    form.reset();
  };

  return (
    <form onSubmit={onLoginSubmit} className={css.form}>
      <label className={css.label}>
        <p>Email</p>
        <input type="email" name="userEmail" className={css.input} required />
      </label>

      <label className={css.label}>
        <p>Password</p>
        <input
          type="password"
          name="userPassword"
          className={css.input}
          minLength={7}
          required
        />
      </label>

      <button type="submit" className={css.addBtn}>
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
