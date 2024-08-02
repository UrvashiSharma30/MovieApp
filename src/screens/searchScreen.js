import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Header from '../component/header';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data);
      });
  };

  const handleClear = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <>
     <Header/>
      <View style={{backgroundColor: 'black', height: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5%',
          }}>
          <TextInput
            placeholder="Enter movie name"
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
            style={[
              styles.serachInput,
              {width: searchTerm.length > 0 ? '75%' : '90%'},
            ]}
          />
          {searchTerm.length > 0 && (
            <TouchableOpacity onPress={handleClear} style={styles.crossButton}>
              <Icon name="cross" size={40} color={'red'} />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          title="Search Movie"
          onPress={handleSearch}
          style={styles.searchButton}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              fontWeight: '400',
            }}>
            SEARCH
          </Text>
        </TouchableOpacity>
        {searchResults.length > 0 && (
          <Text style={styles.resultText}>
            Results for "{searchTerm}"
          </Text>
        )}
        <FlatList
          data={searchResults}
          keyExtractor={item => item.show.id.toString()}
          numColumns={2}
          renderItem={({item}) => (
            <View style={styles.movieCard}>
              {item.show.image && (
                <Image
                  source={{uri: item.show.image.medium}}
                  style={{width: 140, height: 140, marginTop: 10,objectFit:'fill'}}
                />
              )}
              <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
                {item.show.name}
              </Text>
            </View>
          )}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  serachInput: {
    borderWidth: 1,
    backgroundColor: 'grey',
    borderRadius: 6,
    padding: 10,
  },
  movieCard: {
    backgroundColor: 'grey',
    margin: 15,
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    width:160,
    height:'auto'
  },
  crossButton: {
        backgroundColor: '#FFFFFF97', 
        width: "auto", 
        height: 'auto', 
        borderRadius: 5, 
        borderWidth: 0.8, 
        borderColor: 'grey',
        padding: 2, 
        marginLeft: 10
      },
  searchButton: {
    height: 50,
    width: '90%',
    padding: 10,
    backgroundColor: '#FFFFFF87',
    borderColor: '#FFFFFF',
    alignSelf: 'center',
    margin: 10,
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: 'center',
  },
  listContent: {
    alignItems: 'center',
    paddingBottom: '20%',
  },
  resultText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'left',
    margin: 15,
  },
});

export default SearchScreen;
































// import React, { useState } from 'react';
// import {
//   View,
//   TextInput,
//   Button,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Entypo';
// import Icon3 from 'react-native-vector-icons/Ionicons';
// const SearchScreen = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = () => {
//     fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
//       .then(response => response.json())
//       .then(data => {
//         setSearchResults(data);
//       });
//   };

//   const handleClear = () => {
//     setSearchTerm('');
//     setSearchResults([]);
//   };

//   return (
//     <>
//       <View style={{ backgroundColor: 'black', flexDirection: 'column',justifyContent:'flex-start' }}>
//         <Icon3
//           name="glasses"
//           size={60}
//           style={{ marginLeft: 12, color: 'white' }}
//         />
//         <Text
//           style={{
//             color: 'white',
//             fontSize: 12,
//             marginLeft: 22,
//             marginTop: -16,
//           }}>
//           Movies
//         </Text>
//       </View>
//       <View style={{ backgroundColor: 'black', height: '100%' }}>
//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginTop: '5%',
//           }}>
//           <TextInput
//             placeholder="Enter movie name"
//             value={searchTerm}
//             onChangeText={text => setSearchTerm(text)}
//             style={[
//               styles.serachInput,
//               { width: searchTerm.length > 0 ? '75%' : '90%' },
//             ]} />
//           {searchTerm.length > 0 && (
//             <TouchableOpacity onPress={handleClear} style={styles.crossButton}>
//               <Icon name="cross" size={40} color={'red'} />
//             </TouchableOpacity>
//           )}
//         </View>
//         <TouchableOpacity title="Search Movie" onPress={handleSearch} style={styles.searchButton} >
//           <Text style={{
//             textAlign: 'center', fontSize: 14, fontWeight: '400',
//           }}>SEARCH</Text>
//         </TouchableOpacity>
//         <ScrollView style={{display:'flex'}}>
//           {searchResults.map(item => (
//             <View key={item.show.id} style={styles.movieCard}>
//               <Image
//                 source={{ uri: item.show.image.medium }}
//                 style={{ width: 140, height: 140, marginTop: 10 }}
//               />
//               <Text style={{ color: 'white', fontSize: 18 }}>
//                 {item.show.name}
//               </Text>
//             </View>
//           ))}
//         </ScrollView>
//       </View>
//     </>
//   );
// };
// const styles = StyleSheet.create({
//   serachInput: {
//     borderWidth: 1,
//     width: '90%',
//     backgroundColor: 'grey',
//     borderRadius: 6,
//     padding: 10
//   },
//   movieCard: {
//     backgroundColor: 'grey',
//     width: '45%',
//     marginBottom: 15,
//     marginTop: 10,
//     alignItems: 'center',
//     alignSelf: 'center',
//     borderRadius: 10,
//     height: 'auto',
//     marginBottom: 10,
//   },
//   crossButton: {
//     backgroundColor: '#FFFFFF97', 
//     width: "auto", 
//     height: 'auto', 
//     borderRadius: 5, 
//     borderWidth: 0.8, 
//     borderColor: 'grey',
//     padding: 2, 
//     marginLeft: 10
//   },
//   searchButton: {
//     height: 45,
//     width: "90%",
//     padding: 5,
//     backgroundColor: '#FFFFFF87',
//     borderColor: 'grey',
//     alignSelf: 'center',
//     margin: 10,
//     borderRadius: 5,
//     borderWidth: 1,
//     justifyContent: 'center'

//   }
// });
// export default SearchScreen;
