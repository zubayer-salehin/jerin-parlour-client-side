import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard/Dashboard';
import MyProfile from './pages/Dashboard/MyProfile';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import SingUp from './pages/Login/SingUp';
import Header from './shared/Header';
import PayToProced from './pages/ServiceBooking/PayToProced';
import Payment from './pages/Payment/Payment';
import BookingList from './pages/Dashboard/BookingList/BookingList';
import AddReveiw from './pages/Dashboard/AddReveiw';
import ManageService from './pages/Dashboard/ManageService/ManageService';
import AddService from './pages/Dashboard/AddService';
import ManageBooking from './pages/Dashboard/ManageBooking/ManageBooking';
import ManageUser from './pages/Dashboard/ManageUser.js/ManageUser';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import RequireAdmin from './pages/Login/RequireAdmin';
import MyPortofolio from './pages/MyPortofolio/MyPortofolio';
import OurTeam from './pages/OurTeam/OurTeam';
import ServiceBooking from './pages/ServiceBooking/ServiceBooking';
import NotFound from './shared/NotFound/NotFound';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from './shared/Loading/Loading';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [2000])
  }, [])

  return (loading ? <Loading loadingStatus="true"></Loading> :
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Navigate to="/home"></Navigate>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/serviceBooking/:id' element={<RequireAuth><ServiceBooking /></RequireAuth>}></Route>
        <Route path='/payToProced/:id' element={<RequireAuth><PayToProced /></RequireAuth>}></Route>
        <Route path='/payment/:id' element={<RequireAuth><Payment /></RequireAuth>}></Route>
        <Route path='/ourTeam' element={<OurTeam></OurTeam>}></Route>
        <Route path='/myPortofolio' element={<MyPortofolio></MyPortofolio>}></Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='bookingList' element={<BookingList></BookingList>}></Route>
          <Route path='addReveiw' element={<AddReveiw></AddReveiw>}></Route>
          <Route path='manageBooking' element={<RequireAdmin><ManageBooking></ManageBooking></RequireAdmin>}></Route>
          <Route path='manageService' element={<RequireAdmin><ManageService></ManageService></RequireAdmin>}></Route>
          <Route path='addService' element={<RequireAdmin><AddService></AddService></RequireAdmin>}></Route>
          <Route path='manageUser' element={<RequireAdmin><ManageUser></ManageUser></RequireAdmin>}></Route>
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singUp' element={<SingUp></SingUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
