import React, { useState } from 'react';
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Spinner,
} from 'reactstrap';

const LoginForm = ({ auth, loginUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (evt) => {
    if (email && password) {
      loginUser({
        email,
        password,
      });
    }
    return evt.preventDefault();
  };

  const onEnter = (e) => {
    if (e.key === 'Enter' && email && password) {
      loginUser({
        email,
        password,
      });
    }
  };

  if (auth?.loading) {
    return (
      <div style={{ margin: '50px' }}>
        <Spinner color="success" />
      </div>
    );
  }

  return (
    <Form style={{ marginTop: '20px' }}>
      {Boolean(auth?.error) && (
        <FormGroup>
          <Alert color="danger">Error loggin in.</Alert>
        </FormGroup>
      )}
      <FormGroup>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={onEnter}
        />
      </FormGroup>
      <Button
        disabled={auth.loading}
        color="primary"
        size="md"
        onClick={handleLogin}
      >
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
