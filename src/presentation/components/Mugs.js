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
    colors: [{ id: 1, code: '#9cab93' }, { id: 2, code: '#c67139' }, { id: 3, code: '#c84142' }, { id: 4, code: '#f80e1b' }],
    image: 'https://mymodernmet.com/wp/wp-content/uploads/2020/11/ap-curiosities-ceramic-animal-mug-10.jpg'
  },
  {
    id: 2,
    name: 'Magical Mug',
    price: '$14',
    colors: [{ id: 1, code: '#ece6d4' }, { id: 2, code: '#b3a187' }, { id: 3, code: '#655232' }],
    image: 'https://mymodernmet.com/wp/wp-content/uploads/2020/11/ap-curiosities-ceramic-animal-mug-4.jpg'
  },
  {
    id: 3,
    name: 'Flower Mug',
    price: '$10',
    colors: [{ id: 1, code: '#c1c3ba' }, { id: 2, code: '#cda687' }, { id: 3, code: '#352b27' }, { id: 4, code: '#cecac7' }],
    image: 'https://i.etsystatic.com/9332448/r/il/8a2f2d/3341446207/il_1588xN.3341446207_4cnd.jpg'
  },
  {
    id: 4,
    name: 'Green Fairy Frog Mug',
    price: '$20',
    colors: [{ id: 1, code: '#a9a87c' }, { id: 2, code: '#445c24' }],
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
                <View style={tw`flex-row items-center mt-1`}>
                  <Text style={tw`text-base`}>Color:</Text>
                  <FlatList
                    data={item.colors}
                    // keyExtractor={(item) => item.id}
                    horizontal
                    renderItem={(color) => (
                      <View style={tw`h-4 w-4 ml-2`}>
                        <Text style={{ backgroundColor: color.item.code }}></Text>
                      </View>
                    )} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

export default Mugs