'use client';

import { Spinner } from '@chakra-ui/react';
import { ReactNode, useEffect, useState } from 'react';

const Hydrate = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return <>{isHydrated ? children : <Spinner />}</>;
};

export default Hydrate;
