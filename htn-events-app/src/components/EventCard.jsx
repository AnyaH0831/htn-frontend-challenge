function EventCard({ event }) {
    const formattedDate = new Date(event.start_time).toLocaleString()

    const scrollToEvent = (eventId) => {
        const element = document.getElementById('event-' + eventId);

        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }
  
    return (
        <div
            id={'event-' + event.id}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
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

            {event.related_events.length > 0 && (
                <div className = "border-t pt-4">
                    <span className="text-sm font-semibold text-gray-700">Related Events: </span>
                    {event.related_events.map((relatedId, index) => {
                        let comma = '';
                        if (index < event.related_events.length - 1){
                            comma = ', ';
                        }
                        return (
                            <button
                                key = {relatedId}
                                onClick={() => scrollToEvent(relatedId)}
                                className="text-sm text-blue-600 hover:underline mx-1"
                            >Event {relatedId}{comma}</button>
                        )
                        
                    })}
                </div>
            )}

        </div>
    );
}

export default EventCard;