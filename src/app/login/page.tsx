import * as React from 'react';
import { SignInPage, type AuthProvider} from '@toolpad/core/SignInPage';
import { PageContainer } from '@toolpad/core';
import SignIn from './SignIn';
const providers = [{ id: 'credentials', name: 'Email and Password' }];

export default function CredentialsSignInPage() {
  return (
    <PageContainer>
      <SignInPage
        signIn={SignIn}
        providers={providers}
        key={'SignInContainer'}
      />
      </PageContainer>
  );
}