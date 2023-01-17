import { useLoaderData } from "react-router-dom";

import EventsList from "../../components/EventsList";

function EventsPage() {
  const events = useLoaderData();

  let content;

  let hasError = events.error === true;

  if (hasError) {
    content = <p>{events.errorMessage}</p>;
  }

  return <>{hasError ? content : <EventsList />}</>;
}

export default EventsPage;

export async function eventsLoader() {
  const response = await fetch("http://localhost:8080/events/5");
  if (!response.ok) {
    // return { error: true, errorMessage: "Could not reach server" };
    throw new Response(
      JSON.stringify({ errorMessage: "could not reach server" }),
      { status: 500 }
    );
  }
  return response;
}
