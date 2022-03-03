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

export const getServerSideProps = ({ req, res }) => {
  const cookies = cookie.parse(req.headers.cookie);
  if (!cookies.accessToken || cookies.groupId) {
    res.writeHead(307, {
      Location: !cookies.accessToken ? '/login' : '/',
    });
    res.end();
  }
  return { props: {} };
};

export default FirstPostPage;
