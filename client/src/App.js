import './App.css';
import React from "react";
import {ChakraProvider} from '@chakra-ui/react'
import { Router } from './router/index';
import theme from './themes/index'
import { QueryClient, QueryClientProvider} from 'react-query'
 
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Router/>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
