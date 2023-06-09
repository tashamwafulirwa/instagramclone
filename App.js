import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput } from 'react-native';

function App() {
const [name, setName] = useState('');
const [birth, setBirth] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmationPassword, setConfirmationPassword] = useState('');

function confirmPasswordsMatch(props) {
  const { nativeEvent: { text } } = props;

  if (text !== password) {
    alert('Passwords do not match, please try again.')
  }
}

return (
  <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
    <InputWithLabel
      label="Name"
      placeholder="Type your name here"
      value={name}
      onChangeText={setName}>
    </InputWithLabel>
    <InputWithLabel
      label="Date of birth"
      placeholder="Type your birthday here"
      value={birth}
      onChangeText={setBirth}>
    </InputWithLabel>
    <InputWithLabel
      label="Email"
      placeholder="Type your email here"
      value={email}
      onChangeText={setEmail}/>
    <InputWithLabel
      label="Password"
      placeholder="Type your password here"
      value={password}
      onChangeText={setPassword}
      secureTextEntry={true}>
    </InputWithLabel>
    <InputWithLabel
      label="Confirm password"
      placeholder="Confirm your password here"
      value={confirmationPassword}
      onChangeText={setConfirmationPassword}
      secureTextEntry={true}
      onSubmitEditing={confirmPasswordsMatch}>
    </InputWithLabel>
  </ScrollView>
);
}

function InputWithLabel(props) {
const { label, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing } = props;
return (
  <View style={{ padding: 16}}>
    <Text style={{ padding: 8, fontSize: 18 }}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      onSubmitEditing={onSubmitEditing}
      style={{ padding: 8, fontSize: 18 }}>
    </TextInput>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ecf0f1',
  },
  contentContainer: {
    paddingBottom: 2000, // set a large enough padding bottom value to allow for scrolling
  },
});

export default App;