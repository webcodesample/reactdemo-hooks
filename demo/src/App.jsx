import { useState } from 'react'
import './App.css'
import { useDebounce } from './myhooks/useDebounce';
import { useThrottle } from './myhooks/useThrottle';
import Welcome from './components/Welcome';
import Users from './components/Users';
import ValidateUser from './components/ValidateUser';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [count, setCount] = useState(0);
  const [debounceCount, setDebounceCount] = useState(0);
  const [throttleCount, setThrottleCount] = useState(0);
  const debounceValue = useDebounce(debounceCount,500);
  const throttleValue = useThrottle(throttleCount,500);

  const increaseCount = ()=>{
    setCount(count + 1);
  }

  return (
    <>
      <Welcome user="Amit"/>
      <div className="card">
        <button onClick={increaseCount}>
          count is {count}
        </button>        
      </div>
      <div className="card">
        <button onClick={() => setDebounceCount(debounceCount + 1)}>
          Debounce Count is {debounceValue}
        </button>        
      </div>
      <div className="card">
        <button onClick={() => setThrottleCount(throttleCount + 1)}>
          Throttle Count is {throttleValue}
        </button>        
      </div>
      <Users/>
      <ValidateUser/>
      <AdminDashboard/>
    </>
  )
}

export default App
