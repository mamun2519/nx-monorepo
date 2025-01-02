import { Form } from '@remix-run/react';
import styles from './login.module.css';

export function Login({ actionData, isSubmitting }) {
  return (
    <div className={styles['container']}>
      <h1 className="text-center text-xl mt-10">Welcome to Login!</h1>
      <Form method="post">
        <div className="flex justify-center mt-5 gap-5">
          <input
            className="border outline-gray-400 h-10 w-96 p-2"
            type="text"
            name="email"
            placeholder="Enter Your Email"
            id=""
          />

          <input
            className="border outline-gray-400 h-10 w-96 p-2"
            type="text"
            name="password"
            placeholder="Enter Your Email"
            id=""
          />
          <button type="submit" className="bg-blue-600 text-white px-4 rounded">
            Login
          </button>
        </div>
      </Form>
      {isSubmitting && <p>Loading..........</p>}
      {actionData && (
        <div className="text-center mt-10">
          <h3>Login Information</h3>
          <p>Email: {actionData?.email}</p>
          <p>Password: {actionData?.password}</p>
        </div>
      )}
    </div>
  );
}

export default Login;
