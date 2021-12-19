import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.headerImage}
          source={require('../assets/images/headerimg.png')}
        />
      </View>
      <ImageBackground
        source={require('../assets/images/Miko.png')}
        style={styles.contents}>
        <View style={styles.overlay}>
          <Text style={styles.overlayTitle}>This is Miko...</Text>
          <Text style={styles.aboutContent}>He's a rescued dog.</Text>
          <Text style={styles.aboutContent}>
            Lucky for him, he's found a loving family who loves him and gives
            him a home. Sadly, not many dogs are as lucky as him. Some end up
            living on the streets and are often abused by people. Some others
            spend their lives in poor conditions in animal shelters as many
            animal shelters struggle to fund their operational activities.
          </Text>
          <Text style={styles.aboutContent}>
            On the other hand, there are many people out there who want to keep
            a dog, yet their life situation doesn't allow to do so. If this is
            you, you can still do something!
          </Text>
          <Text style={styles.aboutContent}>
            You can save a dog or two, even more!
          </Text>
          <Text style={styles.aboutContent}>
            You can keep a dog(s) without having to have them in your house by
            sponsoring them. We will take care of them for you! You will get a
            regular update on your dogs, their photos, health condition, what
            toys they like, and some pawprints for you! You can also plan a
            regular visit to play with them. We will send you financial reports
            regularly, so you know where your money goes.
          </Text>
          <Text style={styles.aboutContent}>
            You can make a difference to the lives of these precious souls!
          </Text>
        </View>
      </ImageBackground>
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
  overlay: {
    backgroundColor: 'rgba(100,120,120,0.4)',
    padding: 20,
    paddingTop: 35,
    height: '100%',
  },
  avatarStyle: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 50,
    alignSelf: 'center',
  },
  textStyle: {
    marginTop: 10,
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  balanceContainer: {
    padding: 10,
  },
  contents: {
    display: 'flex',
    width: imageWidth,
    height: 560,
    resizeMode: 'stretch',
  },
  aboutContent: {
    color: 'white',
    marginBottom: 5,
  },
  overlayTitle: {
    marginBottom: 5,
    fontSize: 18,
    color: 'white',
  },
});

export default Home;
