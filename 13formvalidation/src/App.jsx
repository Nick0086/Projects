import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Forms from './components/Form';

function App() {
  return (
    <div className='d-flex form-body flex-wrap'  >
      <div className='w-20 bg-image'></div>
      <div className='w-80'><Forms /></div>
    </div>
  );
}

export default App;
