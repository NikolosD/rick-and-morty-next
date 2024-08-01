// app/page.tsx
'use client';
import { observer } from 'mobx-react-lite';
import { Button, Box } from '@chakra-ui/react';
import { useStore } from '@/src/stores/storeContext';

const Home = observer(() => {

  return (
    <><h1>Hello</h1></>
  );
});

export default Home;
