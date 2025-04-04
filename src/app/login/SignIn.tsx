import { signIn } from "next-auth/react"
import type { AuthProvider } from '@toolpad/core';

const SignIn: (provider: AuthProvider, formData: FormData) => void = async (
  provider,
  formData,
) => {
  await signIn(provider.id,{
    redirect: true,
    redirectTo: '/profile',
    email: formData.get('email'),
    password: formData.get('password')
  });
};
//email: formData.get('email'),
//password: formData.get('password'),
export default SignIn;