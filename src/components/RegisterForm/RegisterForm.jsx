import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { registerThunk } from 'redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const onRegisterSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    console.log('data registration ', formData);

    dispatch(registerThunk(formData));
    form.reset();
  };

  return (
    <form onSubmit={onRegisterSubmit} className={css.form}>
      <label className={css.label}>
        <p>Name</p>
        <input
          type="text"
          name="userName"
          className={css.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>

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
          required
        />
      </label>

      <button type="submit" className={css.addBtn}>
        Sign up
      </button>
    </form>
  );
};

export default RegisterForm;
