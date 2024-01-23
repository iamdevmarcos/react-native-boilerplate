import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import LottieView from 'lottie-react-native'
import React from 'react'

import Astronaut from '~/assets/animations/astronaut.json'
import { RootStackParamList } from '~/navigation'

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList>

const SplashScreen = () => {
  const navigation = useNavigation<OverviewScreenNavigationProps>()

  return (
    <LottieView
      autoPlay
      loop={false}
      source={Astronaut}
      onAnimationFinish={() => navigation.navigate('Home')}
      style={{ flex: 1, backgroundColor: 'transparent' }}
    />
  )
}

export default SplashScreen
