import './App.css';
// why do I need the specific component function from the file? can't I just call the file name?
import Calendar from './components/Calendar.jsx';

const App = () => {

  return (
    <div className="App">
    <h1>Time table Project</h1>
    <h2>Recipient Scheduled message, pick a time slot</h2>
    <Calendar/>
    </div>
  )
}

export default App