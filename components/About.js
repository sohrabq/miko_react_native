import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 9) / 12);
const imageWidth = dimensions.width;

function About() {
  return (
    <View style={styles.container}>
      <View style={styles.teamImageWrapper}>
        <Image
          source={require('../assets/images/teamwork.png')}
          style={styles.teamImage}
        />
      </View>
      <View style={styles.aboutUsWrapper}>
        <Text style={styles.aboutUsTitle}>About Us</Text>
        <View style={styles.aboutContentWrapper}>
          <Text style={styles.aboutContent}>
            SaveMiko! was founded in Tallinn, Estonia by a group of animal
            lovers, who are passionate about helping unfortunate dogs. All
            members are actively involved in "Adopt, don't shop!" campaign in
            Estonia. The office and shelter is located in the Mustamae area.
          </Text>
          <Text style={styles.aboutContent}>
            Every month, the team gathers to enjoy quality time together and
            have discussions on future plans. Each member usually brings their
            pets, so the pets can also play together during the gathering.
          </Text>
          <Text style={styles.aboutContent}>
            The name "SaveMiko!" is inspired by a dog who was neglected by his
            owners for years, before he was finally rescued.
          </Text>
          <Text style={styles.aboutContent}>
            The SaveMiko! team welcomes new volunteers who are also passionate
            about helping dogs and willing to commit minimum 5 hours per week to
            help in the shelter. Contact us for more info!
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          ©2021 All rights reserved. Fifi Arisandi for End User Computing.
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#2F4F4F',
  },
  headerImage: {
    height: imageHeight,
    width: imageWidth,
  },
  teamImage: {
    height: imageHeight,
    width: imageWidth - 20,
    resizeMode: 'stretch',
    borderWidth: 1,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
  },
  teamImageWrapper: {
    paddingTop: 20,
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 17,
  },
  aboutUsWrapper: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
  },
  aboutUsTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
  aboutContentWrapper: {
    padding: 20,
  },
  aboutContent: {
    color: 'white',
    marginBottom: 10,
  },
  footer: {
    backgroundColor: '#344',
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
  },
});

export default About;
