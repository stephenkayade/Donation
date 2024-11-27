import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import style from './style'
import { useSelector } from 'react-redux'
import globalStyle from '../../assets/styles/globalStyle'
import BackButton from '../../components/BackButton/BackButton'
import Badge from '../../components/Badge/Badge'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'

const SingleDonationItem = ({ navigation, route }) => {

  const donationItem = useSelector(state => state.donations.selectedDonationInfo)

  console.log(donationItem)

  const categoryInfo = route.params.categoryInfo

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container}>

        <BackButton onPress={() => navigation.goBack()} />

        <Image
          source={{ uri: donationItem.image }}
          style={style.image}
        />

        <View style={style.badge}>
          <Badge title={categoryInfo.name} />
        </View>

        <Header type={1} title={donationItem.name} />
        <Text style={style.description}>{donationItem.description}</Text>


      </ScrollView>

      <View style={style.button}>
        <Button title='Donate' />
      </View>


    </SafeAreaView>
  )
}

export default SingleDonationItem