import { Alert, Linking } from 'react-native'

import {
  View,
  Heading,
  Container,
  Description,
  ExternalLink,
  Box,
  Label
} from './styles/welcome.styles'

const Welcome = () => {
  async function handleOnPress() {
    const githubLink = 'https://github.com/iamdevmarcos/react-native-boilerplate'

    const isSupportedLink = await Linking.canOpenURL(githubLink)
    if (isSupportedLink) {
      await Linking.openURL(githubLink)
    } else {
      Alert.alert(`Don't know how to open this URL: ${githubLink}`)
    }
  }

  return (
    <Container>
      <View>
        <Box>
          <Heading>Expo Boilerplate</Heading>
          <Description>
            🔥 A React-Native starter kit using Expo, React Navigation, Styled Components,
            TypeScript and Eslint.
          </Description>
        </Box>

        <ExternalLink onPress={handleOnPress}>
          <Label>Visit on Github</Label>
        </ExternalLink>
      </View>
    </Container>
  )
}

export default Welcome
