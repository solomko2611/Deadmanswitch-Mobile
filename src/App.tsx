import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@styles/theme';
import StackNavigator from "@src/modules/navigation";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StackNavigator/>
    </ThemeProvider>
  );
};

export default App;
