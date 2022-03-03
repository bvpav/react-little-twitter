import { useState } from 'react';
import api from '../lib/api';

const useAuthForm = (endpoint) => {
  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = Object.fromEntries(form);

    setLoading(true);
    try {
      const response = await api.post(`/auth/${endpoint}`, data);
      setErrors({});
      // TODO: handle response
    } catch ({ response }) {
      setErrors(response.data.errors);
    }
    setLoading(false);
  };

  return { errors, isLoading, handleSubmit };
};

export default useAuthForm;
