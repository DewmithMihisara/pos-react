import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoutes from './util/ProtectedRouts';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Home from './pages/Home';
import Customer from './pages/Customer';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            
            <Route element={<ProtectedRoutes />}>
                <Route index element={<Home />}/>
                <Route path="customer" element={<Customer />} />
            </Route>

            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;
