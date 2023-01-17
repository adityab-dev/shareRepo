import { useParams } from "react-router-dom";

function EventsDetailPage() {
  const { eventId } = useParams();

  return <div>EventsDetailPage :- {eventId}</div>;
}

export default EventsDetailPage;
