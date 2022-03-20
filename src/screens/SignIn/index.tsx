import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container } from "./styles";

const SignIn = () => {
  return (
    <Container>
      <Input
        placeholder="E-mail"
        type="secondary"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Input placeholder="Password" type="secondary" secureTextEntry />

      <Button title="Enter" type="secondary" />
    </Container>
  );
};

export { SignIn };
