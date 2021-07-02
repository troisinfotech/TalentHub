import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserProfile } from '../../../redux/modules/user/actions';

const useUserProfile = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state: any) => state.user.profile)

  useEffect(() => {
    dispatch(getUserProfile());
  }, [])

  return userProfile;
};

export default useUserProfile;
