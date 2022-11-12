import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'

export default function Button(props) {
    const {text, icon, disable } = props;

    return (
      <TouchableOpacity activeOpacity={0.5}>
        {text && <Text>{text}</Text>}
        {icon && <Image source={icon} resizeMode="contain" />}
      </TouchableOpacity>
    )
}
