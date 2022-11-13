import React, { Component, useState } from 'react'
import { Text, View, TextInput, SafeAreaView, ScrollView } from 'react-native'
import { Button } from '../../../components/Index'
import SignupStyle from './SignupStyle'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function Signup (props) {
  const {navigation} = props;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    return (
      <SafeAreaView style={SignupStyle.container}>
        <ScrollView contentContainerStyle={SignupStyle.mainView}>
          <View>
              <Text style={SignupStyle.textStyle}>Create an Account</Text>
            <View style={SignupStyle.setMargin}>
              <Text>First Name</Text>
              <TextInput value={firstName} placeholder="John" 
                style={SignupStyle.textInputStyle} 
                onChangeText={(e)=>setFirstName(e)}
              />
            </View>
            <View style={SignupStyle.setMargin}>
              <Text>Last Name</Text>
              <TextInput value={lastName} placeholder="Amadi" 
                style={SignupStyle.textInputStyle} 
                onChangeText={(e)=>setLastName(e)}
              />
            </View>
            <View style={SignupStyle.setMargin}>
              <Text>Email</Text>
              <TextInput value={email} placeholder="Amadi@email.com" 
                style={SignupStyle.textInputStyle} 
                onChangeText={(e)=>setEmail(e)}
              />
            </View>
            <View style={SignupStyle.setMargin}>
              <Text>Password</Text>
              <TextInput value={password} placeholder="****" 
                style={SignupStyle.textInputStyle} 
                onChangeText={(e)=>setPassword(e)}
              />
            </View>
            <View style={SignupStyle.section}>
              <Text style={SignupStyle.textStyle2}>
                I certify that I'm 18 or older, and I agree to the
                <TouchableWithoutFeedback style={SignupStyle.linkStyle}><Text>User Agreement</Text>
                </TouchableWithoutFeedback>
                <Text>and</Text>
                <TouchableWithoutFeedback style={SignupStyle.linkStyle}><Text>Privacy Policy</Text>
                </TouchableWithoutFeedback>
              </Text>
            </View>
          </View>

          <View style={SignupStyle.btnView}>
            <Button text="Start" disable={false} />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
}
