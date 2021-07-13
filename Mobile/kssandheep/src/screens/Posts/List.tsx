import React, { FC } from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import { Card, CardElement, List, ListElement, ListProps, Text } from '@ui-kitten/components';

export interface PostListProps extends Omit<ListProps, 'renderItem'> {
  data: any;
  onItemPress: (index: number) => void;
}
const PostList: FC<PostListProps> = ({
  data,
  onItemPress,
  ...listProps
}): ListElement => {


  const renderItem = (info: ListRenderItemInfo<any>): CardElement => (
    <Card
      style={styles.itemContainer}
      onPress={() => onItemPress(info.index)}>
      <Text
        category='s1'>
        Title: {info.item.title}
      </Text>
      <Text
        style={styles.itemDescription}
        appearance='hint'>
        Views: {info.item.views}
      </Text>
    </Card>
  );

  return (
    <List
      data={data}
      contentContainerStyle={[styles.container]}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  itemContainer: {
    marginVertical: 4,
    marginHorizontal: 4,
  },
  itemDescription: {
    marginTop: 4,
  },
});

export default PostList;