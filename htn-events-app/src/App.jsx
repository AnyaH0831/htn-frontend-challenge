import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { fetchEvents } from './services/api'
import EventCard from './components/EventCard'
import {useAuth} from './hooks/useAuth'
import LoginForm from './components/LoginForm'
// import EventCard from './components/EventCard'

function App() {
  //To store events data
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true)

  const {isLoggedIn, login, logout} = useAuth();

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

  let filteredEvents;
  if (isLoggedIn){
    filteredEvents = events;
  }else{
    filteredEvents = events.filter(event => event.permission === 'public')
  }
   

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Hack the North Events</h1>
        
        {!isLoggedIn && <LoginForm onLogin = {login} />}
        {isLoggedIn && (
          <button
            onClick = {logout}
            className='mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
          >Logout</button>
        )}

        <p className="text-gray-600 mb-8">Showing {filteredEvents.length} events</p>

        <div className="space-y-4">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
      </div>
    </div>
  )
}

export default App
