import { useEffect, useState } from 'react';
import database from '@react-native-firebase/database';
import objectToArray from '../../../utils/objectToArray';

const useSurveyHistory = (navigation: any) => {
  const [survey, setSurvey] = useState([])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      database()
        .ref('/survey')
        .once('value')
        .then(snapshot => {
          const result = snapshot.val()
          setSurvey(objectToArray(result))
        });
    });
    return unsubscribe;
  }, [navigation]);

  return survey;
};

export default useSurveyHistory;
