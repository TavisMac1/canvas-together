import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './views/homepage';
import Nav from './externals/nav';
import MakeManual from './views/form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <MakeManual/>
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={< Homepage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
