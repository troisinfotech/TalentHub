import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from '@ui-kitten/components';

interface IErrorMessage {
  error: string
}

const ErrorMessage: FC<IErrorMessage> = ({ error }) => (
  <Text status='danger'>{error}</Text>
)

const styles = StyleSheet.create({
  container: {
    marginLeft: 10
  },
})

export default ErrorMessage