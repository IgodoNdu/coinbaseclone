import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

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
    <SafeAreaView>
      <View>
        <Text>CoinKingdom</Text>
      </View>
    </SafeAreaView>
  )
}

export default Welcome;
