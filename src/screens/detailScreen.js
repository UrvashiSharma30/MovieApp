import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
const DetailsScreen = ({route}) => {
  const {show} = route.params;

  return (
    <ScrollView style={{backgroundColor: 'black', height: '100%'}}>
      <Image
        source={{uri: show.image && show.image.medium}}
        style={{
          width: '100%',
          height: 300,
          resizeMode: 'contain',
          marginTop: 15,
        }}
      />
      <View style={{marginLeft: 10, marginRight: 10}}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {show.name}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text style={{color: 'white'}}>Language: {show.language}</Text>
          <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <Text style={{color: 'white', marginLeft: 10}}>
              Rating: {show.rating && show.rating.average}
            </Text>
            <Icon
              name="star"
              size={15}
              color={'yellow'}
              style={{marginTop: 2}}
            />
          </View>
        </View>
        <Text style={{color: 'white'}}>Status: {show.status}</Text>
        <Text style={{color: 'white'}}>
          Genres: {show.genres && show.genres.join(', ')}
        </Text>
        <Text
          style={{
            color: 'white',
            marginTop: 10,
            fontSize: 17,
            textDecorationLine: 'underline',
          }}>
          Description:
        </Text>
        <Text style={{color: 'white', marginTop: 10, marginBottom: 20}}>
          {' '}
          {show.summary}
        </Text>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
