import { useTranslation } from 'react-i18next'
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
  const { t: translate } = useTranslation()

  async function handleOnPress() {
    const githubLink = 'https://github.com/iamdevmarcos/react-native-boilerplate'

    const isSupportedLink = await Linking.canOpenURL(githubLink)
    if (isSupportedLink) {
      await Linking.openURL(githubLink)
    } else {
      const invalidUrlMsg = translate('screens.welcome.invalidUrl')
      Alert.alert(`${invalidUrlMsg} ${githubLink}`)
    }
  }

  return (
    <Container>
      <View>
        <Box>
          <Heading testID="Heading.Text">{translate('screens.welcome.title')}</Heading>

          <Description testID="Heading.Description">
            {translate('screens.welcome.description')}
          </Description>
        </Box>

        <ExternalLink onPress={handleOnPress} testID="ExternalLink.Button">
          <Label>{translate('screens.welcome.githubButton')}</Label>
        </ExternalLink>
      </View>
    </Container>
  )
}

export default Welcome
