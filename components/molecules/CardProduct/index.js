import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const CardProduct = ({ image, name, detail }) => {
  return (
    <View style={styles.page}>
      <ScrollView>

        <View style={{ paddingTop: 10, paddingHorizontal: 10, paddingBottom: 10 }}>

          {/* <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 8, borderRadius: 10 }}> */}
          <View style={[styles.card, styles.shadowProp]}>
            <Image
              source={image}
              style={{ width: 90, height: 90, borderRadius: 8, overflow: 'hidden', marginRight: 12, marginLeft: -12, paddingVertical: 60, paddingHorizontal: 60 }}
            />
            <View style={{ flex: 1, alignItems: 'flex-start' }}>
              {/* <Text style={{ fontSize: 12, color: '#020202', paddingVertical: 5, }}>{name}</Text> */}
              <Text style={{ fontSize: 12, color: '#f19097', paddingVertical: 5, }}>{name}</Text>
              <Text style={{ fontSize: 10, color: '#8D92A3' }}>{detail}</Text>
            </View>
            {/* <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('EditBank')}>
                <View>
                  <Image
                    source={Forward}
                    style={{ width: 30, height: 30, borderRadius: 8, overflow: 'hidden', marginRight: 12, marginLeft: -12, marginTop: 20 }}
                  />
                </View>
              </TouchableOpacity>
            </View> */}
          </View>

        </View>

      </ScrollView>
    </View>
  )
}

export default CardProduct

const styles = StyleSheet.create({
  page: { flex: 1 },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 10
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

})
