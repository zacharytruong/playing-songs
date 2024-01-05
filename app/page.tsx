'use client';

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormControl isInvalid={isError}>
        <FormLabel>Continue or create a new session</FormLabel>
        <Input type="number" value={input} onChange={handleInputChange} />
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
      </FormControl>
    </main>
  );
}
