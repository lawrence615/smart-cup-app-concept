import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const options = [
  {
    id: 1,
    value: "All",
  },
  {
    id: 2,
    value: "Mugs",
  },
  {
    id: 3,
    value: "Vases",
  },
  {
    id: 4,
    value: "Plates",
  }
]

const Filters = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>

    </SafeAreaView>
  )
}