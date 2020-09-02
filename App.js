import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Home from './src';

import themes from './src/themes';
import { ThemeProvider } from 'styled-components';

export default function App() {

  const [theme, setTheme] = useState(themes.dark);

  function defineTheme() {
    setTheme(theme == themes.dark ? themes.light : themes.dark);
    console.log(theme);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Home switchTheme={defineTheme} />
        <StatusBar style="light" />
      </ThemeProvider>
    </>
  );
}

