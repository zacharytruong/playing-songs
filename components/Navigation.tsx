'use client';

import { Link, Stack, useColorMode } from '@chakra-ui/react';
import React from 'react';

const Navigation = () => {
  const { toggleColorMode } = useColorMode();

  const items = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Playlist',
      url: '/playlist'
    },
    {
      name: 'Playing',
      url: '/playing'
    },
    {
      name: 'Mode',
      url: undefined,
      action: true
    }
  ];

  return (
    <Stack direction="row" spacing="24px">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          onClick={item.action ? toggleColorMode : undefined}
        >
          {item.name}
        </Link>
      ))}
    </Stack>
  );
};

export default Navigation;
