
import './App.css';
import { AppProvider } from './Context/GlobalContext';

import Feed from './Pages/Feed/Feed';
import Login from './Pages/Login/Login';
import Router from './Routes/Router';


function App() {
  return (<>
  <AppProvider>
    < Router />
  </AppProvider>
  </>
)}

export default App;
