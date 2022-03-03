import Cookies from 'js-cookie';
import { useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import api from '../lib/api';

const PostModal = ({ show, onPublish }) => {
  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = Object.fromEntries(form);

    setLoading(true);
    try {
      const accessToken = Cookies.get('accessToken');
      const groupId = Cookies.get('groupId');
      const response = await api.post(`/group/${groupId}/post`, data, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setErrors({});
      onPublish(response.data.response.post);
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
    <Modal show={show} onHide={onPublish} centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header className="h3">Публикация</Modal.Header>
        <Modal.Body>
          {!!errors.general && <Alert variant="danger">{errors.general}</Alert>}
          <Form.Group>
            <Form.Control
              name="body"
              as="textarea"
              rows={10}
              placeholder="Здрасти..."
              isInvalid={errors.body}
              disabled={isLoading}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary">
            Публикувай
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default PostModal;
