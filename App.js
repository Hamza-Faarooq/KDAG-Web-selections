import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CoursePage from './components/CoursePage';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2', // Update with your preferred color theme
    },
    secondary: {
      main: '#f50057', // Update with your preferred color theme
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CoursePage />
      </div>
    </ThemeProvider>
  );
}
export default App;
