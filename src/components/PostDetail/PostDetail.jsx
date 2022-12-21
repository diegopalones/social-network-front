import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../features/posts/postsSlice";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostById(id));
  }, []);
  return (
    <div>
      PostDetail
      {console.log(id)}
    </div>
  );
};

export default PostDetail;
