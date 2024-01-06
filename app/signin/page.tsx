'use client';

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SignIn() {
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const [input, setInput] = useState<string>('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (isError) {
      setIsError(false);
    }
    setInput(e.target.value);
    if (e.target.value === '') {
      setIsError(true);
    }
  };

  const handleSubmit = () => {
    if (input === '') {
      setIsError(true);
      return;
    }
    localStorage.setItem('playSongs-sessionID', input);
    router.push('/');
  };

  useEffect(() => {
    const currentSessionID = localStorage.getItem('playSongs-sessionID');
    if (currentSessionID) {
      router.push('/');
    }
  }, [router]);
  
  return (
    <Stack minH="400px" alignItems="center" justifyContent="center" p={24}>
      <FormControl isInvalid={isError}>
        <FormLabel fontWeight={300} my={10}>
          Create a new session (Numbers only)
        </FormLabel>
        <Input
          type="number"
          value={input}
          onChange={handleInput}
          size="lg"
          focusBorderColor="brand.200"
        />
        {!isError ? null : (
          <FormErrorMessage my={3}>
            Session ID cannot be blank.
          </FormErrorMessage>
        )}

        <Button my={10} size="lg" variant="outline" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
    </Stack>
  );
}
