import React from 'react';
import { Login } from '@nx-monorepo/login';
import { log } from 'console';

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  console.log('email', email);
  console.log('password', password);
  return null;
};
const LoginPage = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
