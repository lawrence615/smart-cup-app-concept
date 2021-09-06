import React, { useEffect } from 'react'
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

import { selectedMug } from 'selectors/mugSlice'

const DetailsScreen = () => {

  const mug = useSelector(selectedMug)
  const navigation = useNavigation()

  useEffect(() => {
    if (!mug) return
  }, [mug])

  return (
    <View style={tw`flex-1`, { backgroundColor: '#E7E5E4' }}>
      <TouchableOpacity
        style={tw` bg-gray-100 absolute top-5 left-5 z-50 p-3 rounded-full`}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Icon name="chevron-left" size={35} />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Image style={tw`flex-grow`, { resizeMode: 'stretch', width: '100%', height: '100%' }} source={{ uri: mug?.image }} />
      </View>
      <View style={tw`h-1/2 p-5`}>
        <Text style={tw`text-2xl font-bold`}>{mug?.name}</Text>
      </View>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  text: {
    color: 'blue'
  }
})