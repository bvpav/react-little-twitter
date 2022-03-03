import Link from 'next/link';
import { Form, FloatingLabel, Button, Alert } from 'react-bootstrap';
import useAuthForm from '../hooks/useAuthForm';

const RegisterForm = () => {
  const { errors, isLoading, handleSubmit } = useAuthForm('sign-up');

  return (
    <Form class="form" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 fw-normal">Регистрация</h1>
      {!!errors.general && <Alert variant="danger">{errors.general}</Alert>}
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
      <FloatingLabel label="Парола" className="w-100 mb-2">
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
      <FloatingLabel label="Потвърди парола" className="w-100 mb-4">
        <Form.Control
          name="passwordConfirm"
          type="password"
          placeholder="**************"
          isInvalid={errors.passwordConfirm}
          disabled={isLoading}
        />
        <Form.Control.Feedback type="invalid">
          {errors.passwordConfirm}
        </Form.Control.Feedback>
      </FloatingLabel>
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-100 mb-2"
        disabled={isLoading}
      >
        {!isLoading ? 'Създай профил' : 'Създаване...'}
      </Button>
      <Link href="/login" passHref>
        <Button
          as="a"
          variant="outline-secondary"
          size="lg"
          className="w-100"
          disabled={isLoading}
        >
          Вход
        </Button>
      </Link>
    </Form>
  );
};

export default RegisterForm;
