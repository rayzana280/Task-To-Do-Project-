import './App.css'
import { Route, Routes } from 'react-router-dom';

import Tasks from './components/tasks';
import LogInPage from './components/UserAccess/login'
import SignUpPage from './components/UserAccess/signup'
import Reset from './components/UserAccess/reset';

function App() {

  return (
    <>
      <header>
        <h1>Adventure App</h1>
        <h3>Tasks to display:</h3>
      </header>
      <nav>
        <Routes>
          <Route path='/' element={<Tasks />} />
          <Route path='/LogIn' element={<LogInPage />} />
          <Route path='/SignUp' element={<SignUpPage />} />
          <Route path='/Reset' element={<Reset />} />
        </Routes>
      </nav>
    </>
  )
}

export default App
