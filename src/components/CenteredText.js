
import { Center, Text} from '@chakra-ui/react'

function CenteredText(props) {
  const { w, text, color } = props
  return (<>
    <Center w={w  || '100px'} bg={color || 'green.500'}>
      <Text>{text}</Text>
    </Center>
  </>);
}
export default CenteredText;