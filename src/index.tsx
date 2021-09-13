import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

//todo include <Provider store={store}> wrapper tag for redux
import  CssBaseline  from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider} from '@material-ui/core/styles';

// for global typography breakpoints/(mediaqueries)
// const defaultTheme = createTheme();
const globalTheme = createTheme({
  palette: {
    background: {
      default: '#eee'
    }
  },
  typography: {
    htmlFontSize: 10
  }

})

ReactDOM.render(
  <ThemeProvider theme={globalTheme}>
    <CssBaseline/>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
