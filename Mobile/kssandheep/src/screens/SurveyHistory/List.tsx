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
        Name: {info.item.name}
      </Text>
      <Text
        style={styles.itemDescription}
        appearance='hint'>
        Age: {info.item.age}
      </Text>
      <Text
        style={styles.itemDescription}
        appearance='hint'>
        Date of Birth: {info.item.dob}
      </Text>
      <Text
        style={styles.itemDescription}
        appearance='hint'>
        Mobile Number: {info.item.mobile}
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