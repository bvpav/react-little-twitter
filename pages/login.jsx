import cookie from 'cookie';
import LoginForm from '../components/LoginForm';
import CenterPage from '../components/ui/CenterPage';

const LoginPage = () => {
  return (
    <CenterPage>
      <LoginForm />
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

export default LoginPage;
