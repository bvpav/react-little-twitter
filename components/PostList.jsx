import PostCard from './PostCard';
import { Container, Stack } from 'react-bootstrap';

const PostList = ({ posts }) => {
  return (
    <Container className="text-start my-3" style={{ maxWidth: '560px' }}>
      <Stack gap={3}>
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </Stack>
    </Container>
  );
};

export default PostList;
