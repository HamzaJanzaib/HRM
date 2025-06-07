import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Layout Components
import { Header, Footer, ErrorPage} from './pages/Client/index';

// Client Pages
import {
  Dashboard,
  Settings,
  Leaves,
  Payroll,
  Jobs,
  Employees,
  Attendance,
  Holidays,
  Departments,
  Candidates,
  AdminLayout
} from './pages/dashboard/index';

// Admin Pages
import {
  Login,
  Register,
  ForgetPassword,
  ResetPassword,
  VerifyOtp,
  SuccessPassword
} from './pages/Auth/index';

import ProtectedRoute from './components/ProtectedRoute';
import { useAuthContext } from './context/AuthContext';

const App = () => {
  const location = useLocation();
  const isPrivatePath = location.pathname.includes('/admin') || location.pathname.includes('/hr');
  const { isAdmin, loading } = useAuthContext();

  // Show loading screen while initializing
  if (loading) {
    return (
      <>
        <Toaster />
        <div className='flex items-center justify-center h-screen bg-white'>
          <img
            src='https://www.movingtree.com.ar/images/loader.gif'
            alt='loader'
            className='h-20 w-20'
          />
        </div>
      </>
    );
  }

  return (
    <div className='text-gray-700 bg-white min-h-screen'>
      <Toaster />
      {!isPrivatePath && <Header />}
      
      <div className={`${isPrivatePath ? '' : 'px-4 md:px-16 lg:px-24 xl:px-32'}`}>
        <Routes>
          <Route path='*' element={<ErrorPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/verify-otp' element={<VerifyOtp />} />
          <Route path='/success-password' element={<SuccessPassword />} />

          {/* Admin Routes (Protected) */}
          <Route
            path='/admin'
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path='settings' element={<Settings />} />
            <Route path='leaves' element={<Leaves />} />
            <Route path='payroll' element={<Payroll />} />
            <Route path='jobs' element={<Jobs />} />
            <Route path='employees' element={<Employees />} />
            <Route path='attendance' element={<Attendance />} />
            <Route path='holidays' element={<Holidays />} />
            <Route path='departments' element={<Departments />} />
            <Route path='candidates' element={<Candidates />} />
            <Route path='*' element={<Dashboard />} />
          </Route>

          {/* Admin Login */}
          <Route
            path='/admin-login'
            element={isAdmin ? <Navigate to='/admin' /> : <Login />}
          />

        </Routes>
      </div>

      {!isPrivatePath && <Footer />}
    </div>
  );
};

export default App;