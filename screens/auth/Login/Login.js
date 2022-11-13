import React, { useState } from 'react'
import { Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { Button } from '../../../components/Index'
import LoginStyle from './LoginStyle';

export default function Login (props) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    return (
      <SafeAreaView style={LoginStyle.container}>
        <ScrollView contentContainerStyle={LoginStyle.mainView}>
          <View>
            <Text style={LoginStyle.textStyle}>Sign in - Bata n'ugbo</Text>
            <View style={LoginStyle.setNargin}>
              <Text style={LoginStyle.textStylePrivacy}>Email</Text>
              <TextInput value={password} placeholder="*****"
                onChangeText={(text)=>setPassword(text)} style={LoginStyle.textInputStyle} />
            </View>
            <View style={LoginStyle.setNargin}>
              <Text style={LoginStyle.textStylePrivacy}>Password</Text>
              <TextInput value={email} placeholder="odogwu@email.com"
                onChangeText={(text)=>setEmail(text)} style={LoginStyle.textInputStyle} />
            </View>
            <View style={LoginStyle.flexRowView}>
              <TouchableOpacity style={LoginStyle.linkStyle}>
                <Text>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={LoginStyle.linkStyle}>
                <Text>Ochi abughi-uto policy?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={LoginStyle.btnView}>
            <Button text="Sign in" disabled={false} 
              onPress={()=>navigation.navigate('Home')} />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
}
