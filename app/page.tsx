'use client';

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack
} from '@chakra-ui/react';
import { SetStateAction, useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInput(e.target.value);
    e.target.value === '' ? setIsError(true) : setIsError(false);
  };

  return (
    <Stack>
      <h1>H1 Heading</h1>
      <FormControl isInvalid={isError}>
        <FormLabel fontWeight={300}>Continue or create a new session</FormLabel>
        <Input
          type="number"
          value={input}
          onChange={handleInputChange}
          size="lg"
        />
        {!isError ? (
          <FormHelperText>
            Enter a session ID to continue, or if no session exists with that
            ID, a new session will be created.
          </FormHelperText>
        ) : (
          <FormErrorMessage>
            A session ID is required. It will be creaetd if not exist.
          </FormErrorMessage>
        )}
        <Button size="md" variant="outline">
          Start Medium !
        </Button>
        <Button size="sm" variant="solid">
          Start Small !
        </Button>
      </FormControl>
    </Stack>
  );
}
