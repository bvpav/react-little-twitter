import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import api from '../lib/api';

const FirstPostForm = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = Object.fromEntries(form);

    setLoading(true);
    try {
      const accessToken = Cookies.get('accessToken');
      let response = await api.post(`/group`, null, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const { groupId } = response.data.response;
      response = await api.post(`/group/${groupId}/post`, data, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setErrors({});
      Cookies.set('groupId', groupId, { sameSite: 'secure' });
      router.push('/');
    } catch (e) {
      const { response } = e;
      if (response) {
        setErrors(response.data.errors);
      } else {
        throw e;
      }
    }
    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="h1 mb-3 fw-normal">Започнете разговора!</h1>
      {!!errors.general && <Alert variant="danger">{errors.general}</Alert>}
      <Form.Group className="w-100 mb-2">
        <Form.Control
          name="body"
          as="textarea"
          required
          rows={10}
          placeholder="Здрасти..."
          isInvalid={errors.body}
          disabled={isLoading}
        />
        <Form.Control.Feedback type="invalid">
          {errors.body}
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-100 mb-2"
        disabled={isLoading}
      >
        {!isLoading ? 'Изпрати' : 'Изпращане...'}
      </Button>
    </Form>
  );
};

export default FirstPostForm;
