import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Example from './components/Example';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Example/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
