import styles from './login.module.css';

export function Login() {
  return (
    <div className={styles['container']}>
      <h1 className="text-center text-xl mt-10">Welcome to Login!</h1>
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
          name="email"
          placeholder="Enter Your Email"
          id=""
        />
        <button className="bg-blue-600 text-white px-4 rounded">Login</button>
      </div>
    </div>
  );
}

export default Login;
