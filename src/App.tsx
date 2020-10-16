import * as React from 'react';
import Grid from './components/Grid';
import Controlls from './components/Controls';
import { MatrixContextProvider } from './components/MatricContext';

import './styles.css';

export default function App() {
  return (
    <MatrixContextProvider>
      <Grid />
      <Controlls />
    </MatrixContextProvider>
  );
}
