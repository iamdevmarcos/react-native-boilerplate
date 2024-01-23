import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import LottieView from 'lottie-react-native'
import React, { useLayoutEffect } from 'react'
import { Platform } from 'react-native'

import Astronaut from '~/assets/animations/astronaut.json'
import { RootStackParamList } from '~/navigation/RootStack'

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList>

const SplashScreen = () => {
  const navigation = useNavigation<OverviewScreenNavigationProps>()
  const goToHome = () => navigation.navigate('Home')

  useLayoutEffect(() => {
    if (Platform.OS !== 'ios') goToHome()
  }, [])

  return (
    <LottieView
      autoPlay
      loop={false}
      source={Astronaut}
      onAnimationFinish={goToHome}
      style={{ flex: 1, backgroundColor: 'transparent' }}
    />
  )
}

export default SplashScreen
