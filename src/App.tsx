
import { useLocation } from "react-router-dom";
import './App.css';
import SideBar from './Components/SideBar';
import AllRoutes from './Pages/AllRoutes';

function App() {

  const location = useLocation();
  const currentRoute = location.pathname;
 
  return (
    <div className="App">
  <h1 className='z-50 w-full fixed shadow-lg shadow-purple-700 top-0 text-xl text-red-500 bg-pink-200 font-bold p-6'>
    {
      currentRoute === "/" ? ' Contact Management Application' : "Contact Management Application"
    }
  </h1>
  <div className='flex w-full'>
    <div className='sticky top-0 h-screen'>
      <SideBar />
    </div>
    <div className='w-full'>
      <AllRoutes />
    </div>
  </div>
</div>

  );
}

export default App;
