
import './App.css';
import { AppProvider } from './Context/GlobalContext';
import Router from './Routes/Router';


function App() {
  return (<>
  <AppProvider>
    < Router />
  </AppProvider>
  </>
)}

export default App;
