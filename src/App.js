import logo from './logo.svg';
import './App.css';
import Rating from './components/Rating'
import Sidebar from './components/Sidebar'
import Reviews from './components/Reviews'
import Sentiments from './components/Sentiments'
import Visitors from './components/Visitors'

function App() {
  return (
    <div className='App'>
      <Sidebar/>
      <div className='Container1'>
        <div className='Container2'>
          <Reviews/>
          <Rating/>
          <Sentiments/>
        </div>
        <Visitors/>
      </div>
    </div>
  );
}

export default App;
