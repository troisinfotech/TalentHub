// @ts-nocheck 
import React from 'react';
import useSurveyHistory from './hooks/useSurveyHistory';
import List from './List';

const SurveyHistory = ({ navigation }): React.ReactElement => {

  const history = useSurveyHistory(navigation);

  const onItemPress = (index: number): void => {
    console.log('item pressed')
  };

  return (
    <List
      data={history}
      onItemPress={onItemPress}
    />
  );
};

export default SurveyHistory