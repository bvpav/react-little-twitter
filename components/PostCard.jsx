import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Card, Container, Stack } from 'react-bootstrap';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import PostModal from './PostModal';
import ConfirmationModal from './ConfirmationModal';
import api from '../lib/api';
import Cookies from 'js-cookie';

const PostCard = ({ post }) => {
  const router = useRouter();
  const [showEdit, setShowEdit] = useState(false);

  const handleShowEdit = () => setShowEdit(true);
  const handleEdit = () => {
    router.replace(router.asPath, null, { scroll: false });
    setShowEdit(false);
  };
  const handleDelete = async () => {
    try {
      const groupId = Cookies.get('groupId');
      const accessToken = Cookies.get('accessToken');
      await api.delete(`/group/${groupId}/post/${post._id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    } catch {}
    router.replace(router.asPath, null, { scroll: false });
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
              <ConfirmationModal
                component={(props) => (
                  <Button {...props} variant="danger">
                    <BsFillTrashFill />
                  </Button>
                )}
                onConfirm={handleDelete}
              />
            </Stack>
          </div>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
