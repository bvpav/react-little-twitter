import cookie from 'cookie';
import LoginForm from '../components/LoginForm';
import CenterPage from '../components/ui/CenterPage';
import parseCookies from '../lib/utils/parseCookies';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Вход | React Little Twitter</title>
        <meta
          name="description"
          content="Влезте в профила си в React Little Twitter – Единствената социална мрежа, която съществува"
        />
      </Head>

      <CenterPage>
        <LoginForm />
      </CenterPage>
    </>
  );
};

export const getServerSideProps = async ({ req }) => {
  const cookies = parseCookies(req);
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
