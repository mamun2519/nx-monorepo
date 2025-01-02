import React from 'react';
import { Login } from '@nx-monorepo/login';
import { useNavigation } from '@remix-run/react';

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
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';
  console.log(isSubmitting);
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
