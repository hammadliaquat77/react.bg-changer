import './App.css'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'
import UserProvider from './Context/UserContextProvider'

function App() {

  return (
    <>
      <UserProvider>
        <div className='flex justify-center items-center flex-col h-screen'>
          <Login />
          <Profile />
        </div>
      </UserProvider>
    </>
  )
}

export default App
