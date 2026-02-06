import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { fetchEvents } from './services/api'
import EventCard from './components/EventCard';
// import './App.css'

function App() {
  //To store events data
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true)

  //When components load, fetchevents
  useEffect(() => {
    const getEvents = async () => {
      try{
        const data = await fetchEvents();
        // console.log('Fetched events:', data);
        const sortedData = data.sort((a,b) => a.start_time - b.start_time)
        console.log(sortedData)
        setEvents(sortedData);
        setLoading(false);
      }catch (error){
        console.error('Error:', error);
        setLoading(false);
      }
    }

    getEvents();
  }, [])

  

  if (loading) {
    return <div>Loading events...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Hack the North Events</h1>
        <p className="text-gray-600 mb-8">Found {events.length} events</p>
        
        <div className="space-y-4">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default App
