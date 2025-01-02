import React from 'react';
import { Login } from '@nx-monorepo/login';

export const action = ({ request }: { request: Request }) => {
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
