import { fireEvent, render } from '@testing-library/react-native'

import i18n from '../../localization/i18n'
import Welcome from '../welcome'

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => i18n.t(str)
    }
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {}
  }
}))

describe('<Welcome />', () => {
  it('should render a heading', () => {
    const { getByText, getByTestId } = render(<Welcome />)

    expect(getByTestId('Heading.Text')).toBeTruthy()
    expect(getByText('Expo Boilerplate')).toBeTruthy()
  })

  it('should render a description', () => {
    const { getByText, getByTestId } = render(<Welcome />)

    expect(getByTestId('Heading.Description')).toBeDefined()
    expect(
      getByText(
        '🔥 A React-Native starter kit using Expo, React Navigation, Styled Components, TypeScript and Eslint.'
      )
    ).toBeTruthy()
  })

  it('should click on the button and open an external link', async () => {
    const { getByTestId } = render(<Welcome />)
    expect(fireEvent.press(getByTestId('ExternalLink.Button'))).toBeTruthy()
  })
})
