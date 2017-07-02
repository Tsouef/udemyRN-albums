import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const {
    thumbnailStyle,
    thumbnailContainerStyle,
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
    </Card>
  );
};

 const styles = StyleSheet.create({
   headerContentStyle: {
     flexDirection: 'column',
     justifyContent: 'center'
   },
   headerTextStyle: {
     fontSize: 18
   },
   thumbnailStyle: {
     height: 50,
     width: 50
   },
   thumbnailContainerStyle: {
     justifyContent: 'center',
     alignItems: 'center',
     marginLeft: 10,
     marginRight: 10
   },
   imageStyle: {
     height: 300,
     width: null,
     flex: 1
   }
 });

export default AlbumDetail;
