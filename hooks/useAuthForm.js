import { useState } from 'react';
import Cookies from 'js-cookie';
import api from '../lib/api';
import { useRouter } from 'next/router';

const useAuthForm = (endpoint) => {
  const router = useRouter();
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
      const { accessToken } = response.data.response;
      Cookies.set('accessToken', accessToken, { sameSite: 'strict' });
      router.push('/first-post');
    } catch ({ response }) {
      setErrors(response.data.errors);
    }
    setLoading(false);
  };

  return { errors, isLoading, handleSubmit };
};

export default useAuthForm;
