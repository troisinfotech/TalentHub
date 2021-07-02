import { SpinnerElement } from '@ui-kitten/components';
import React, { FC, useEffect, useState } from 'react';
import AppNavigator from './navigation/AppNavigator';
import { getToken } from './services/storage.service';
import Login from './screens/Login';
import SplashScreen from './screens/SplashScreen';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from './redux/modules/user/actions';


const AppContainer: FC = () => {

  const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch the toke
    const loadAccessToken = async () => {
      let userToken: any;

      try {
        userToken = await getToken();
        console.log('userToken-----', userToken)
      } catch (e) {
        // Restoring token failed
      }

      if (userToken) {
        dispatch(loginSuccess())
      }

      setLoading(false)

    };

    loadAccessToken();

  }, [])

  console.log('isLoading', isLoading, isLoggedIn)

  return (<>
    {isLoading && <SplashScreen />}
    {!isLoading && isLoggedIn && <AppNavigator />}
    {!isLoading && !isLoggedIn && <Login />}
  </>
  );
};

export default AppContainer;