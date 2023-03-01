import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Center, Square, Text, Box } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import CenteredText from './components/CenteredText'
import { useState } from 'react';

const MIN = 0
const MAX = 20

function App() {
  const [leftNumber, setLeftNumber]  = useState(1)
  const [rightNumber, setRightNumber]  = useState(2)
  return (
    <ChakraProvider><div>
    <Flex color='white'>
      <Center flex='1' bg='green.500'>
        <NumberInput defaultValue={leftNumber} min={MIN} max={MAX}
        onChange={(i)=> setLeftNumber(i)}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Center>
      <Center flex='1' bg='green.500'>
        <AddIcon />
      </Center>
      <Center flex='1' bg='green.500'>
        <NumberInput defaultValue={rightNumber} min={MIN} max={MAX}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Center>
      <Center flex='1' bg='green.500'>
        <Text> = </Text>
      </Center>
      <Center flex='2' bg='green.500'>
        <Text>Box 1</Text>
      </Center>
    </Flex>

    <Flex color='white'>
      <CenteredText text={leftNumber} />
      <CenteredText text="Box 1" />
      <CenteredText text="Box 1" />
      <CenteredText text="Box 1" />
      <CenteredText text="Box 1" />
      <Square bg='blue.500' size='150px'>
        <Text>Box 2</Text>
      </Square>
      <Box flex='1' bg='tomato'>
        <Text>Box 3</Text>
      </Box>
    </Flex>




      
    </div>
    </ChakraProvider>
  );
}

export default App;
