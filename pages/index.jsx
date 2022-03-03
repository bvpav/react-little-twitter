import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import cookie from 'cookie';
import { Button, Container, Modal, Nav, Navbar } from 'react-bootstrap';
import api from '../lib/api';
import PostModal from './../components/PostModal';
import PostList from '../components/PostList';
import { Navigation } from './../components/Navigation';

const Home = ({ groupPosts }) => {
  const router = useRouter();
  const [showPublish, setShowPublish] = useState(false);

  const handleShowPublish = () => setShowPublish(true);
  const handleCreatePost = (post) => {
    // TODO: stug
    // alert(JSON.stringify(post, null, 2));
    router.replace(router.asPath);
    setShowPublish(false);
  };

  return (
    <>
      <Head>
        <title>Little Twitter</title>
      </Head>
      <Container fluid className="text-center">
        <Navigation />
        <Button
          onClick={handleShowPublish}
          size="lg mt-5 mb-3"
          variant="primary"
        >
          Публикувайте нещо
        </Button>
        <PostModal show={showPublish} onPublish={handleCreatePost} />
        <PostList posts={groupPosts} />
      </Container>
    </>
  );
};

export const getServerSideProps = async ({ req }) => {
  const cookies = cookie.parse(req.headers.cookie);
  if (!cookies.accessToken || !cookies.groupId) {
    return {
      redirect: {
        destination: !cookies.accessToken ? '/login' : '/first-post',
        permanent: false,
      },
    };
  }

  const response = await api.get(`/group/${cookies.groupId}/post`, {
    headers: { Authorization: `Bearer ${cookies.accessToken}` },
  });
  return { props: { groupPosts: response.data.response.groupPosts } };
};

export default Home;
