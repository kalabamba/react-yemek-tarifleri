import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import MasterLayout from './layouts/MasterLayout';

const routes = createBrowserRouter([
  { 
    path: '/', element: <MasterLayout/>, 
    children: [
      { path: '/', element: <Home/> },
      { path: '/create', element: <Create/> },
      { path: '/tarifler/:id', element: <Details/> },
      { path: '/search', element: <Search/> }
    ]
  },
  
]);
function App() {
  return (
   <RouterProvider router={routes} />
  );
}

export default App;
