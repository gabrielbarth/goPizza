import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from 'react-native'

import { Button } from "@components/Button"
import { Input } from "@components/Input";

import brandImg from '@assets/brand.png'

import { useAuth } from '@hooks/auth'

import { 
  Brand, 
  Container, 
  Content, 
  Title,
  ForgotPasswordButton,
  ForgotPasswordLabel
} from "./styles";

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { isLogging, signIn, forgotPassword } = useAuth()

  function handleSignIn() {
    signIn(email, password)
  }

  function handleForgotPassword() {
    forgotPassword(email)
  }

  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
          <Brand source={brandImg} />
          <Title>Login</Title>
          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
            />
          <Input 
            placeholder="Password"
            type="secondary" 
            secureTextEntry 
            onChangeText={setPassword} 
          />

          <ForgotPasswordButton onPress={handleForgotPassword}>
            <ForgotPasswordLabel>
              Esqueci minha senha
            </ForgotPasswordLabel>
          </ForgotPasswordButton>

          <Button 
            title="Enter" 
            type="secondary" 
            onPress={handleSignIn} 
            isLoading={isLogging}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};

export { SignIn };
