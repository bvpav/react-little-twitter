import { useState } from 'react';
import Link from 'next/link';
import { Form, FloatingLabel, Button } from 'react-bootstrap';

const LoginForm = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(false);

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
          disabled={isLoading}
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
          disabled={isLoading}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </FloatingLabel>
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-100 mb-2"
        disabled={isLoading}
      >
        {!isLoading ? 'Вход' : 'Влизане...'}
      </Button>
      <Link href="/register" passHref>
        <Button
          as="a"
          variant="outline-secondary"
          size="lg"
          className="w-100"
          disabled={isLoading}
        >
          Регистрация
        </Button>
      </Link>
    </Form>
  );
};

export default LoginForm;
