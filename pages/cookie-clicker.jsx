import cookie from 'cookie';
import Head from 'next/head';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Navigation } from '../components/Navigation';
import PostModal from '../components/PostModal';
import BigClickableButton from '../components/ui/BigClickableButton';
import parseCookies from '../lib/utils/parseCookies';

const CookieClickerPage = () => {
  const [clicks, setClicks] = useState(0);
  const [showPublish, setShowPublish] = useState(false);

  const handleShowPublish = () => setShowPublish(true);
  const handleHidePublish = () => setShowPublish(false);

  return (
    <>
      <Head>
        <title>Little Twitter</title>
      </Head>

      <Container fluid className="text-center">
        <Navigation />

        <BigClickableButton onClick={() => setClicks((c) => c + 1)}>
          Кликове: {clicks}
        </BigClickableButton>

        <Button variant="outline-secondary" onClick={handleShowPublish}>
          Публикувайте Вашите кликове!
        </Button>
        <PostModal
          body={`Кликнах Cookie Clicker бутона ${clicks} път${
            clicks === 1 ? '' : 'и'
          }`}
          show={showPublish}
          onPublish={handleHidePublish}
        />
      </Container>
    </>
  );
};

export const getServerSideProps = async ({ req }) => {
  const cookies = parseCookies(req);
  if (!cookies.accessToken || !cookies.groupId) {
    return {
      redirect: {
        destination: !cookies.accessToken ? '/login' : '/first-post',
        permanent: false,
      },
    };
  }
  return { props: {} };
};

export default CookieClickerPage;
