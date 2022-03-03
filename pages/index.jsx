import Head from 'next/head';
import cookie from 'cookie';
import api from '../lib/api';

const FeedPage = () => {
  return (
    <>
      <Head>
        <title>Little Twitter</title>
      </Head>
      <div className="text-center">s;fgjslkgjsf</div>
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

  const response = await api.get(`/group/${cookies.groupId}/post`);
  return { props: { groupPosts: response.data.response.groupPosts } };
};

export default FeedPage;
