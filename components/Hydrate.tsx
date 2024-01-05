'use client';

import { Spinner } from '@chakra-ui/react';
import { ReactNode, useEffect, useState } from 'react';

const Hydrate = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {isHydrated ? (
        children
      ) : (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default Hydrate;
