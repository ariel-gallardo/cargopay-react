'use server'
import type { AuthProvider, AuthResponse } from '@toolpad/core';
import { signIn as svSignIn } from '@/utils/auth';

const SignIn = async (provider: AuthProvider, formData: FormData) => {
  let result = {} as AuthResponse;
  try {
    await svSignIn(provider.id, {
      redirect: true,
      redirectTo: '/profile',
      email: formData.get('email'),
      password: formData.get('password'),
    })
    result.success = 'Welcome';
  } catch (e) {
    result.error = (e as Error).message;
    result.type = 'AuthError';
  }
  return result;
}

//email: formData.get('email'),
//password: formData.get('password'),
export default SignIn;

