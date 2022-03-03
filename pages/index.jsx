import { Navigation } from './../components/Navigation';
import Head from 'next/head';
import cookie from 'cookie';
import api from '../lib/api';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import PostList from '../components/PostList';

const Home = ({ groupPosts }) => {
  return (
    <>
      <Head>
        <title>Little Twitter</title>
      </Head>
      <Container fluid className="text-center">
        <Navigation />
        <Button size="lg mt-5 mb-3" variant="primary">
          Публикувайте нещо
        </Button>
        <PostList posts={groupPosts} />
      </Container>
    </>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const cookies = cookie.parse(req.headers.cookie);
  if (!cookies.accessToken || !cookies.groupId) {
    res.writeHead(307, {
      Location: !cookies.accessToken ? '/login' : '/first-post',
    });
    res.end();
    return { props: {} };
  }

  const response = await api.get(`/group/${cookies.groupId}/post`, {
    headers: { Authorization: `Bearer ${cookies.accessToken}` },
  });
  return { props: { groupPosts: response.data.response.groupPosts } };
};

export default Home;
