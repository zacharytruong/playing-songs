'use client';

import { Heading, Spinner, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const sessionID = localStorage.getItem('playSongs-sessionID');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!sessionID) {
      router.push('/signin');
    } else {
      setIsLoading(false);
    }
  }, [router, sessionID]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Stack>
          <Heading>Homepage</Heading>
          <Text>Session ID: {sessionID}</Text>
        </Stack>
      )}
    </>
  );
}
