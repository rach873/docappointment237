import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage1 from "./pages/Homepage1";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Spinners from "./components/Spinners";
import {useSelector} from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoutes from "./components/PublicRoutes";
import Applydoctor from "./pages/Applydoctor";
import Notificationpage from "./pages/Notificationpage";
import Users from "./pages/admin/Users";
import Doctors from "./pages/admin/Doctors";
import Profile from "./pages/doctor/Profile";
import Bookingpage from "./pages/Bookingpage";
import Appointment from "./pages/Appointment";
import DoctorAppointment from "./pages/doctor/DoctorAppointment";
//import Userprofile from "./pages/Users/Userprofile";
/*import DocLayout from "./components/DocLayout";
import Dochomepage from "./pages/Dochomepage";
import Adminhomepage from "./pages/Adminhomepage";*/
//import Mainpage from "./pages/Users/Mainpage";
//import Home from './pages/Home';
function App() {
  const {loading} = useSelector(state => state.alerts)
  return (
    <>
    
      <BrowserRouter>

      {loading ? (<Spinners/> ):
      ( 
         <Routes>
            <Route
           path = "/"
           element={
            <ProtectedRoutes>
           <Homepage1/>
             </ProtectedRoutes>
            }
          />
          
          <Route
           path = "/apply-doctor"
           element={
            <ProtectedRoutes>
           <Applydoctor/>
             </ProtectedRoutes>
            
          }
          />
      
          
            <Route
           path = "/admin/users"
           element={
            <ProtectedRoutes>
           <Users/>
             </ProtectedRoutes>
            
          }
          />
            <Route
           path = "/admin/doctors"
           element={
            <ProtectedRoutes>
           <Doctors/>
             </ProtectedRoutes>
            
          }
          />
                <Route
           path = "/doctor/profile/:id"
           element={
            <ProtectedRoutes>
           <Profile/>
             </ProtectedRoutes>
            
          }
          />
              <Route
           path = "/doctor/book-appointment/:doctorId"
           element={
            <ProtectedRoutes>
           <Bookingpage/>
             </ProtectedRoutes>
            
          }
          />
           <Route
           path = "/notification"
           element={
            <ProtectedRoutes>
           <Notificationpage/>
             </ProtectedRoutes>
            
          }
          />
          <Route 
          path="/login" 
          element={
         <PublicRoutes>
         <Login /> 
         </PublicRoutes>
}/>

       
          <Route
           path="/register" 
           element={
           <PublicRoutes>
            <Register/>
            </PublicRoutes>
          } />

         <Route
           path="/appointments" 
           element={
           <ProtectedRoutes>
            <Appointment/>
            </ProtectedRoutes>
          } />
          
         <Route
           path="/doctor-appointments" 
           element={
           <ProtectedRoutes>
            <DoctorAppointment/>
            </ProtectedRoutes>
          } />
          
          </Routes>
     
  )}
       </BrowserRouter>
          {/* <Route path="/homepage" element={<Homepage />} /> */}
          

          {/* <Route path="/applydoctor" element={<Applydoctor />} />  */}
          {/* <Route path="/doclayout" element={<DocLayout />} />  */}
           {/* <Route path="/dochomepage" element={<Dochomepage />} />  */}
          {/* <Route path="/adminhomepage" element={<Adminhomepage />} />  */}
    
    </>
  );
}

export default App;
