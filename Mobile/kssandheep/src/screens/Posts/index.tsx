// @ts-nocheck 
import React from 'react';
import usePosts from './hooks/usePosts';
import List from './List';

const Posts = ({ navigation }): React.ReactElement => {

  const posts = usePosts();

  const onItemPress = (index: number): void => {
    console.log('item pressed')
  };

  return (
    <List
      data={posts}
      onItemPress={onItemPress}
    />
  );
};

export default Posts