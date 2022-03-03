import { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';

const LoginForm = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = Object.fromEntries(form);

    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 fw-normal">Моля влезте в профила си</h1>
      <FloatingLabel label="Имейл" className="w-100 mb-2">
        <Form.Control
          name="email"
          placeholder="name@example.com"
          isInvalid={errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel label="Парола" className="w-100 mb-4">
        <Form.Control
          name="password"
          type="password"
          placeholder="**************"
          isInvalid={errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </FloatingLabel>
      <Button type="submit" variant="primary" size="lg" className="w-100 mb-2">
        Вход
      </Button>
      <Button variant="outline-secondary" size="lg" className="w-100">
        Регистрация
      </Button>
    </Form>
  );
};

export default LoginForm;
