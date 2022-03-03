import { useState } from 'react';
import Link from 'next/link';
import { Form, FloatingLabel, Button } from 'react-bootstrap';

const RegisterForm = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = Object.fromEntries(form);

    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 fw-normal">Регистрация</h1>
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
      <FloatingLabel label="Парола" className="w-100 mb-2">
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
      <FloatingLabel label="Потвърди парола" className="w-100 mb-4">
        <Form.Control
          name="passwordConfirm"
          type="password"
          placeholder="**************"
          isInvalid={errors.passwordConfirm}
        />
        <Form.Control.Feedback type="invalid">
          {errors.passwordConfirm}
        </Form.Control.Feedback>
      </FloatingLabel>
      <Button type="submit" variant="primary" size="lg" className="w-100 mb-2">
        Създай профил
      </Button>
      <Link href="/login" passHref>
        <Button as="a" variant="outline-secondary" size="lg" className="w-100">
          Вход
        </Button>
      </Link>
    </Form>
  );
};

export default RegisterForm;
