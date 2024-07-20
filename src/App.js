
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Authentication from './Components/Authentication/Authentication';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={true?<Homepage/>:<Authentication/>}>


        </Route>
      </Routes>
    </div>
  );
}

export default App;
