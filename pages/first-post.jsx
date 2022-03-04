import cookie from 'cookie';
import CenterPage from '../components/ui/CenterPage';
import FirstPostForm from '../components/FirstPostForm';
import parseCookies from '../lib/utils/parseCookies';
import Head from 'next/head';

const FirstPostPage = () => {
  return (
    <>
      <Head>
        <title>Начало | React Little Twitter</title>
        <meta
          name="description"
          content="Публикувайте пътвото си съобщение на стената в единствената социална мрежа, която съществува."
        />
      </Head>

      <CenterPage>
        <FirstPostForm />
      </CenterPage>
    </>
  );
};

export const getServerSideProps = ({ req }) => {
  const cookies = parseCookies(req);
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
