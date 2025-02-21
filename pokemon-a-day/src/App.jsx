import { useState, useEffect } from 'react'
import './App.css'
import DisplayMon from './components/DisplayMon'
import { getTodaysMon } from './service/api'

function App() {
  const [todaysMon, setMon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTodaysMon();
        setMon(response.data);
      } catch (error) {
        console.error("Error fetching todays pokemon:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <DisplayMon mon = {todaysMon} />
    </>
  )
}

export default App
