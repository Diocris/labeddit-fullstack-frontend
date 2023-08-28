
import './App.css';
import { AppProvider } from './Context/GlobalContext';

import Feed from './Pages/Feed/Feed';


function App() {
  return (<>
  <AppProvider>
    < Feed/>
  </AppProvider>
  </>
)}

export default App;
