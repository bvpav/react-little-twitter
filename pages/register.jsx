import cookie from 'cookie';
import RegisterForm from '../components/RegisterForm';
import CenterPage from '../components/ui/CenterPage';

const RegisterPage = () => {
  return (
    <CenterPage>
      <RegisterForm />
    </CenterPage>
  );
};

export const getServerSideProps = async ({ req }) => {
  const cookies = cookie.parse(req.headers.cookie);
  if (cookies.accessToken) {
    return {
      redirect: {
        destination: !cookies.groupId ? '/first-post' : '/',
        permanent: false,
      },
    };
  }
  return { props: {} };
};

export default RegisterPage;
