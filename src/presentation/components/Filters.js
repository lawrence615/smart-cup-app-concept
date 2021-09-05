import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'

const options = [
  {
    id: 1,
    value: "all",
    label: "All"
  },
  {
    id: 2,
    value: "mugs",
    label: "Mugs"
  },
  {
    id: 3,
    value: "vases",
    label: "Vases"
  },
  {
    id: 4,
    value: "plates",
    label: "Plates"
  }
]

const Filters = () => {

  const navigation = useNavigation()
  const [selected, setSelected] = useState(null)

  return (
    <SafeAreaView style={tw`flex-grow`}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={options}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: { id, value, label }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(value)}
            style={
              tw`flex-row justify-between items-center px-3 ${id === selected?.id && 'bg-gray-200'}`}>
            <View style={tw`m-5 rounded-full`, { width: 80 }}>
              <TouchableOpacity disabled={!selected} style={tw`py-5 m-3 ${!selected && "bg-gray-300"}`, { backgroundColor: '#d9d9d9', borderRadius: 20 }}>
                <Text style={tw`text-center p-1 text-base`}>{label}</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

export default Filters