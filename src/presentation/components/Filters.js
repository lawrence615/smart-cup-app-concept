import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'

import { setFilter } from 'reducers/filterSlice'
import { selectedFilter } from 'selectors/filterSlice'

const options = [
  {
    id: "all",
    label: "All"
  },
  {
    id: "mugs",
    label: "Mugs"
  },
  {
    id: "vases",
    label: "Vases"
  },
  {
    id: "plates",
    label: "Plates"
  }
]

const Filters = () => {

  const dispatch = useDispatch()
  const [selected, setSelected] = useState(null)
  const filterSelected = useSelector(selectedFilter)

  return (
    <SafeAreaView style={tw`flex-grow`}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={options}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: { id, value, label }, item }) => (
          <View style={tw`border-gray-100`, { marginRight: 15, backgroundColor: '#d9d9d9', borderRadius: 20, alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => dispatch(setFilter(item))}
              style={tw`rounded-full w-20  ${id === filterSelected?.id && 'bg-black'}`}>
              <Text style={tw`text-center p-1 text-base font-semibold ${id === filterSelected?.id && 'text-white '}`}>{label}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Filters