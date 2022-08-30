import { Provider } from 'react-redux'
import UserList from './src/components/UserList'
import { store } from './src/redux/store'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <UserList />
      </Provider>
    </>
  )
}

export default App
