import React from 'react';
import {View,Text} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import styles from './style';

const Story = ({imageUri, name}) => (
  <View style={styles.container}>
    <ProfilePicture uri={imageUri} />
    <Text style={styles.name}>{name}</Text>
  </View>
);

export default Story;
