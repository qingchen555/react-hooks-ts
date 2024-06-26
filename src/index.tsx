import ReactDOM from 'react-dom/client'
import '@/index.css'
import App from '@/App'
import './assets/css/index.less'
import 'normalize.css'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
)
