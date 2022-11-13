import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import welcomeStyle from './styles/welcomeStyle';
import { Button } from '../components/Index';


const Welcome = (props) => {
  //destructure/unpack navigation from props
  const {navigation} = props;
  //hooks for turning visible on/off
  const [visible, setVisible] = useState(false);

  //splash screen timeout before showing the access buttons with visible
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 2000)
  }, [])

  return (
    <SafeAreaView style={welcomeStyle.container}>
      <View style={welcomeStyle.mainView}>
        <Text style={welcomeStyle.textStyle}>CoinKingdom</Text>
        {
          visible &&
          <View style={welcomeStyle.bottomView}>
            <Button 
              text="Get Started - Bido" 
              disabled={false} 
              onPress={() => navigation.navigate("Signup")}
              btnStyle={welcomeStyle.btnStyle}
              btnTextStyle={welcomeStyle.btnTextStyle}
            />
            <Button text="Sign In - Bata" disabled={false} 
              onPress={() => navigation.navigate("Login")} 
              btnTextStyle={welcomeStyle.btnStyle2} 
            />
          </View>
        }
      </View>
    </SafeAreaView>
  )
}

export default Welcome;
