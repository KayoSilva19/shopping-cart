import { Header } from './components/Header'
import { Products } from './components/Products'
import { Wrapper } from './components/Wrapper'
import { Provider } from './context/Provider'

function App() {
  return (
    <Provider>
      <Header />
      <Wrapper>
        <Products />
      </Wrapper>
    </Provider>
  )
}

export default App
