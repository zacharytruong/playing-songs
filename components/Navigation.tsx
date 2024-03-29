'use client';

import { Link, Stack } from '@chakra-ui/react';
import React from 'react';

const Navigation = () => {
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
      name: 'Sign In',
      url: '/signin'
    }
  ];

  return (
    <Stack direction="row" spacing="24px">
      {items.map((item, index) => (
        <Link key={index} href={item.url}>
          {item.name}
        </Link>
      ))}
    </Stack>
  );
};

export default Navigation;
