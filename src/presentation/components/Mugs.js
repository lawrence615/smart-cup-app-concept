import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView, FlatList, TouchableOpacity, Image, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { useDispatch } from 'react-redux';

import { setMug } from 'reducers/mugSlice'

const items = [
  {
    id: 1,
    name: 'Tiny Animal Sculpture',
    price: '$19.99',
    colors: ['#9cab93', '#c67139', '#c84142', '#f80e1b'],
    image: 'https://mymodernmet.com/wp/wp-content/uploads/2020/11/ap-curiosities-ceramic-animal-mug-10.jpg'
  },
  {
    id: 2,
    name: 'Magical Mug',
    price: '$14',
    colors: ['#ece6d4', '#b3a187', '#655232'],
    image: 'https://mymodernmet.com/wp/wp-content/uploads/2020/11/ap-curiosities-ceramic-animal-mug-4.jpg'
  },
  {
    id: 3,
    name: 'Flower Mug',
    price: '$10',
    colors: ['#c1c3ba', '#cda687', '#352b27', '#cecac7'],
    image: 'https://i.etsystatic.com/9332448/r/il/8a2f2d/3341446207/il_1588xN.3341446207_4cnd.jpg'
  },
  {
    id: 4,
    name: 'Green Fairy Frog Mug',
    price: '$20',
    colors: ['#a9a87c', '#445c24'],
    image: 'https://m.media-amazon.com/images/I/71RGX787sfL._AC_SL1500_.jpg'
  }
]

const Mugs = () => {

  const dispatch = useDispatch()
  const navigation = useNavigation()

  return (
    <SafeAreaView style={tw`flex-grow`}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              dispatch(setMug(item))
              navigation.navigate('DetailsScreen')
            }}
            style={tw`flex-row bg-white m-2 rounded-lg`}>
            <View style={tw`flex-row`}>
              <Image style={{ width: 110, height: 120, resizeMode: 'contain' }} source={{ uri: item.image }} />
              <View style={tw`p-2`}>
                <Text style={tw`mt-2 text-lg font-semibold`}>{item.name}</Text>
                <Text style={tw`mt-1 text-base`}>Price: {item.price}</Text>
                <Text style={tw`mt-1 text-base`}>Color:</Text>
                <FlatList
                  data={item.color}
                  renderItem={({ color }) => (
                    <View style={tw`w-10`, { backgroundColor: color }}></View>
                  )} />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

export default Mugs