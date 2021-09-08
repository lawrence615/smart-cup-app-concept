import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SafeAreaView, View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'

import { selectedFilter } from 'selectors/filterSlice'
import Filters from 'components/Filters'
import Mugs from 'components/Mugs'


const HomeScreen = () => {
  const filterSelected = useSelector(selectedFilter)

  return (
    <SafeAreaView style={styles.container}>
      <View style={tw`p-5`}>
        <View style={tw`flex-row items-center justify-center`}>
          <TextInput
            style={tw`flex-1 bg-white rounded-full`}
            placeholder="Search..." />
          <Icon style={tw`items-center`} name="search" type='ionicon' color='gray' />
        </View>
        <View>
          <Text style={tw`py-5 text-2xl`}>Ceramic mugs</Text>
          <Filters />
          <Text style={tw`py-2`}>Selected: {filterSelected?.label}</Text>
          <Mugs />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#F5F5F4',
    backgroundColor: '#E7E5E4',
    flex: 1
  },
})