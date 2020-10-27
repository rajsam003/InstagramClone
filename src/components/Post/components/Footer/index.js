import React, {useState, useEffect} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Footer = ({likesCount: likesCountProp, caption, postedAt}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(()=> {
    setLikesCount(likesCountProp)
  }, [])

  const onLikePressed = () => {
    const likeAmount = isLiked ? -1 : 1;
    setLikesCount(likesCount + likeAmount)
    setIsLiked(!isLiked);
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            {isLiked ?
            <ADIcon name="heart" size={25} color={'#e73838'} />
            :<ADIcon name="hearto" size={25} color={'#4f4f4f'} />

            }
          </TouchableWithoutFeedback>
          <FontistoIcon name="comment" size={23} color={'#4f4f4f'} />
          <IoniconsIcon
            name="paper-plane-outline"
            size={25}
            color={'#4f4f4f'}
          />
        </View>
        <FontAwesomeIcon name="bookmark-o" size={25} color={'#4f4f4f'} />
      </View>
      <Text style={styles.likesCount}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
