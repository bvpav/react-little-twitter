import { Button, Card, Container, Stack } from 'react-bootstrap';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';

const PostList = ({ posts }) => {
  return (
    <Container className="my-3" style={{ maxWidth: '560px' }}>
      <Stack gap={3}>
        {posts.map((post) => (
          <Card key={post._id}>
            <Card.Body>
              <Stack direction="horizontal">
                <div>
                  <Card.Title>{post.body}</Card.Title>
                  <Card.Subtitle>
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    {post.createdAt !== post.updatedAt && (
                      <small className="text-muted"> (Редактирано)</small>
                    )}
                  </Card.Subtitle>
                </div>
                <div className="ms-auto">
                  <Stack direction="horizontal" gap={3}>
                    <Button variant="outlined-light">
                      <BsFillPencilFill />
                    </Button>
                    <Button variant="danger">
                      <BsFillTrashFill />
                    </Button>
                  </Stack>
                </div>
              </Stack>
            </Card.Body>
          </Card>
        ))}
      </Stack>
    </Container>
  );
};

export default PostList;
