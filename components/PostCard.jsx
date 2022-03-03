import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Card, Container, Stack } from 'react-bootstrap';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import PostModal from './PostModal';

const PostCard = ({ post }) => {
  const router = useRouter();
  const [showEdit, setShowEdit] = useState(false);

  const handleShowEdit = () => setShowEdit(true);
  const handleEdit = () => {
    router.replace(router.asPath, null, { scroll: false });
    setShowEdit(false);
  };

  return (
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
              <Button
                aria-label="Редактиране"
                onClick={handleShowEdit}
                variant="outlined-light"
              >
                <BsFillPencilFill />
              </Button>
              <PostModal
                postId={post._id}
                body={post.body}
                show={showEdit}
                onPublish={handleEdit}
              />
              <Button variant="danger">
                <BsFillTrashFill />
              </Button>
            </Stack>
          </div>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
