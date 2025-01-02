import styles from './login.module.css';

export function Login() {
  return (
    <div className={styles['container']}>
      <h1 className="text-center text-xl mt-10">Welcome to Login!</h1>
      <p>This Is Login Page</p>
    </div>
  );
}

export default Login;
