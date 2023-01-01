import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/posts/postsSlice";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getById(id));
  }, []);
  return (
    <div key={post.id}>
      <p>{post.User?.userName}</p>
      <h2>Título: {post.title}</h2>
      <p>Cuerpo: {post.body}</p>
      {/* {console.log(post.userId?.username)} */}
          </div>
  )
};

export default PostDetail;
