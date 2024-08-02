import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Header from '../component/header';

const HomeScreen = ({navigation}) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);

  return (
    <>
    <Header/>
    <View style={{backgroundColor: 'black', justifyContent: 'space-between'}}>
      <FlatList
        data={shows}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', {show: item})}>
            <View
              style={styles.movieCard}>
              <Image
                source={{uri: item.image && item.image.medium}}
                style={styles.image}
              />
              <Text style={{color: 'white', fontSize: 16, fontWeight: '800'}}>
                {item.name}
              </Text>
              <View
                style={{display:'flex',  flexDirection: 'row',width:150,justifyContent:'space-between',marginTop:4}}>
                <Text style={{color: 'white'}}>
                  Status:{item.status}
                  {'\t'}
                </Text>
                <Text style={{color: 'yellow',marginLeft:30}}>
                  {item.rating && item.rating.average}
                </Text>
                <Icon
                  name="star"
                  size={15}
                  color={'yellow'}
                  style={{marginTop: 1}}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
    </>
  );
};
const styles = StyleSheet.create({
movieCard:{
  backgroundColor: 'grey',
  borderRadius: 10,
  height: 'auto',
  width: 170,
  justifyContent:'center',
  alignItems:'center',
  padding:15,
  margin:10
},
image:{
  height:150,
  width:150,
  objectFit:'fill'
},
listContent: {
  alignItems: 'center',
  padding:10,
  paddingBottom: '10%',
},
});

export default HomeScreen;
