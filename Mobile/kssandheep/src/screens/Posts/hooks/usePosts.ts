import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../redux/modules/post/actions';

const usePosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.post.list)

  useEffect(() => {
    if (!posts) {
      dispatch(getPosts());
    }
  }, [])

  return posts;
};

export default usePosts;
