import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const View = styled.View`
  gap: 64px;
`

export const Box = styled.View`
  gap: 16px;
`

export const Heading = styled.Text`
  color: black;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
`

export const Description = styled.Text`
  max-width: 100%;
  width: 300px;

  color: black;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
`

export const ExternalLink = styled.Pressable`
  background-color: black;
  padding: 10px;
  width: 150px;
  margin: 0 auto;
  border-radius: 8px;
`

export const Label = styled.Text`
  color: white;
  font-weight: 500;
  text-align: center;
`
