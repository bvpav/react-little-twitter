import Head from 'next/head';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Navigation } from '../components/Navigation';
import PostModal from '../components/PostModal';

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
        <style jsx>{`
          div {
            max-width: 350px;
            font-size: 3em;
            margin: 2em auto;
            transition: all 0.05s cubic-bezier(0.7, 0, 0.84, 0);
          }
          div:active {
            transform: scale(123%);
          }
        `}</style>
        <div>
          <Button
            size="lg"
            className="w-100 h-100"
            style={{ height: '100%', fontSize: 'inherit' }}
            onClick={() => setClicks((c) => c + 1)}
          >
            Кликове: {clicks}
          </Button>
        </div>
        <Button variant="outline-secondary" onClick={handleShowPublish}>
          Публикувайте Вашите кликове!
        </Button>
        <PostModal
          body={`Кликнах Cookie Clicker бутона ${clicks} път(и)`}
          show={showPublish}
          onPublish={handleHidePublish}
        />
      </Container>
    </>
  );
};

export default CookieClickerPage;
