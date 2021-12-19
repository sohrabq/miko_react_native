import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
function Signup({navigation}) {
  const created = () =>
    Alert.alert('Account Created', 'Thank You!, We will get back to you soon', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => navigation.navigate('Home')},
    ]);
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Create an account to become a sponsor.</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="username"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="email"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="password"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="confirm password"
        placeholderTextColor="white"
      />
      <View style={styles.loginBtnSeperator} />
      <View style={styles.action}>
        <TouchableOpacity onPress={created}>
          <Text style={styles.btn}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={{color: 'white'}}>Already have an account? Login</Text>
        <Text style={{color: 'white'}}>Login</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    fontWeight: 900,
    fontSize: 54,
    backgroundColor: '#2F4F4F',
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  footer: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    color: 'white',
    marginTop: 10,
  },
  loginBtnSeperator: {
    marginTop: 10,
  },
  action: {
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
  },
  btn: {
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#D0CDD7',
  },
});

export default Signup;
