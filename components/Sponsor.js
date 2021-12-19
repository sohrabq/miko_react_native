import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;
import dogs from '../assets/data/dogs';

function Home({navigation}) {
  useEffect(() => {
    console.log(dogs[0].image);
  });
  const sponsored = () =>
    Alert.alert(
      'Information',
      'Thank You!, Please signup first for sponsoring me.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.navigate('Signup')},
      ],
    );
  const renderDogItems = ({item}) => {
    return (
      <View style={styles.dogItemWrapper}>
        <View style={styles.dogImageWrapper}>
          <Image source={item.image} style={styles.dogImage} />
        </View>
        <View style={styles.desc}>
          <Text style={styles.dogDescription1}>{item.description2}</Text>
          <Text style={styles.dogDescription2}>{item.description2}</Text>
        </View>
        <View style={styles.action}>
          <TouchableOpacity onPress={sponsored}>
            <Text style={styles.btn}>Sponsor Me!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.headerImage}
          source={require('../assets/images/headerimg.png')}
        />
      </View>
      <View style={styles.banner}>
        <View style={styles.sponserTitleWrapper}>
          <Text style={styles.sponserTitle}>Sponsor a Dog</Text>
        </View>
        <View>
          <FlatList
            data={dogs}
            renderItem={renderDogItems}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  headerWrapper: {
    display: 'flex',
  },
  headerImage: {
    height: imageHeight,
    width: imageWidth,
  },
  banner: {
    marginVertical: 10,
  },
  dogItemWrapper: {
    display: 'flex',
    width: imageWidth - 20,
    paddingHorizontal: 30,
    alignContent: 'center',
    backgroundColor: '#2F4F4F',
    borderRadius: 11,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    height: 480,
  },
  dogImageWrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 17,
  },
  dogImage: {
    height: imageHeight,
    width: imageWidth - 20,
    resizeMode: 'stretch',
    borderWidth: 1,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
  },
  sponserTitleWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
  sponserTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'verdana',
  },
  desc: {
    marginTop: 10,
    display: 'flex',
  },
  dogDescription1: {
    color: 'white',
  },
  dogDescription2: {
    marginTop: 10,
    color: 'white',
  },
  action: {
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
  },
  btn: {
    color: 'black',
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: '#D0CDD7',
  },
});

export default Home;
