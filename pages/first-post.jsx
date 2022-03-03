import cookie from 'cookie';
import CenterPage from '../components/ui/CenterPage';
import FirstPostForm from '../components/FirstPostForm';

const FirstPostPage = () => {
  return (
    <CenterPage>
      <FirstPostForm />
    </CenterPage>
  );
};

export const getServerSideProps = ({ req }) => {
  const cookies = cookie.parse(req.headers.cookie);
  if (!cookies.accessToken || cookies.groupId) {
    return {
      redirect: {
        destination: !cookies.accessToken ? '/login' : '/',
        permanent: false,
      },
    };
  }
  return { props: {} };
};

export default FirstPostPage;
