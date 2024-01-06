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
import { useState } from 'react';

export default function Home() {
  const [isError] = useState(false);

  return (
    <Stack>
      <h1>H1 Heading</h1>
      <FormControl isInvalid={isError}>
        <FormLabel fontWeight={300}>Continue or create a new session</FormLabel>
        <Input
          type="number"
          // value={input}
          // onChange={handleInputChange}
          size="lg"
          focusBorderColor="brand.200"
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
          Outline Medium !
        </Button>
        <Button size="lg" variant="outline">
          Outline lg !
        </Button>
        <Button size="sm" variant="solid">
          Solid Small !
        </Button>
      </FormControl>
    </Stack>
  );
}
