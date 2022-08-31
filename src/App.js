
import './App.css';
import Navbar from './components/Navbar';
import Timetable from './components/Timetable';
import SubjectKey from './components/SubjectKey';

function App() {
  return (
    <div className='max-w-6xl m-auto'>
      <Navbar />
      <SubjectKey />
      <Timetable />
    </div>
  );
}

export default App;
