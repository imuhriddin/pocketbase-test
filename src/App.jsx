import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './layout/RootLayout'
import Error from './pages/Error'
import Users from './pages/Users'
import Buttons from './pages/Buttons'
import CarModels from './pages/CarModels'
import Cities from './pages/Cities'
import Cars from './pages/Cars'
import Loads from './pages/Loads'
import PaymentMethods from './pages/PaymentMethods'
import Rules from './pages/Rules'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <RootLayout />
        </ProtectedRoute>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Users />
        },
        {
          path: '/buttons',
          element: <Buttons />
        },
        {
          path: '/car-models',
          element: <CarModels />
        },
        {
          path: '/cars',
          element: <Cars />
        },
        {
          path: '/cities',
          element: <Cities />
        },
        {
          path: '/loads',
          element: <Loads />
        },
        {
          path: 'payment-methods',
          element: <PaymentMethods />
        },
        {
          path: 'rules',
          element: <Rules />
        }
      ]
    }
  ])


  return (
    <RouterProvider router={routes} />
  )
}

export default App
