import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './views/homepage';
import Nav from './externals/nav';
import MakeManual from './views/form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <div className='pages'>
          <Routes>
          <Route
              exact path="/"
              element={< Homepage />}
            />
            <Route
              exact path="/create"
              element={< MakeManual />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
