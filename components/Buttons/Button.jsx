import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import style from './style';

export default function Button(props) {
    const {text, icon, disable, btnStyle, onPress, btnTextStyle } = props;

    return (
      <TouchableOpacity 
        activeOpacity={0.5}
        onPress={onPress}
        disable={disable}
        style={[style.btnContainer, btnStyle]}

      >
        {text && 
          <Text style={[style.btnText, btnTextStyle, {marginRight: icon ? 10 : 0}]}>
            {text}
          </Text>}
        {icon && <Image source={icon} resizeMode="contain"  style={style.iconStyle} />}
      </TouchableOpacity>
    )
}
