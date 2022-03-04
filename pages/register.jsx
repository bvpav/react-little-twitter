import Head from 'next/head';
import RegisterForm from '../components/RegisterForm';
import CenterPage from '../components/ui/CenterPage';
import parseCookies from '../lib/utils/parseCookies';

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>Регистрация | React Little Twitter</title>
        <meta
          name="description"
          content="Регистрирайте профил в React Little Twitter – Единствената социална мрежа, която съществува"
        />
      </Head>

      <CenterPage>
        <RegisterForm />
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

export default RegisterPage;
