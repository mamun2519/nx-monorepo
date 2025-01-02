import React from 'react';
import { Login } from '@nx-monorepo/login';

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  return {
    email,
    password,
  };
};

const LoginPage = () => {
  return (
    <div>
      <Login></Login>
    </div>
  );
};

export default LoginPage;
