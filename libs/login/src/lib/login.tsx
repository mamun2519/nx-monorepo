import styles from './login.module.css';

export function Login() {
  return (
    <div className={styles['container']}>
      <h1 className="text-center text-xl mt-10">Welcome to Login!</h1>
      <div>
        <input
          className="border outline-gray-400 h-12 w-96"
          type="text"
          name="email"
          id=""
        />
      </div>
    </div>
  );
}

export default Login;
