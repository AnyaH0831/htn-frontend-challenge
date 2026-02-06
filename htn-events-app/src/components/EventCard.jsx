function EventCard({ event }) {
    const formattedDate = new Date(event.start_time).toLocaleString()
  
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2 text-gray-900">{event.name}</h3>
            
            <div className="flex gap-3 mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                    {event.event_type}
                </span>
                <span className="text-sm text-gray-500">{formattedDate}</span>
            </div>
            
            <p className="text-gray-700 mb-4 text-sm">{event.description}</p>

            <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-700">Speakers:</span>
                {event.speakers.map((speaker, index) => (
                    <span key={index} className="text-sm text-blue-600">
                        {speaker.name}{index < event.speakers.length - 1 ? ',' : ''}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default EventCard;