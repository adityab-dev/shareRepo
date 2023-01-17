import { createBrowserRouter, RouterProvider } from "react-router-dom";

import EditEventsPage from "./Pages/EditEventsPage/EditEventsPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import EventsDetailPage from "./Pages/EventsDetailPage/EventsDetailPage";
import EventsPage, { eventsLoader } from "./Pages/EventsPage/EventsPage";
import EventsRootLayout from "./Pages/EventsRootLayout/EventsRootLayout";
import HomePage from "./Pages/HomePage/HomePage";
import NewEventsPage from "./Pages/NewEventsPage/NewEventsPage";
import RootLayout from "./Pages/RootLayout/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "/events",
          element: <EventsRootLayout />,

          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventsLoader,
              errorElement: <ErrorPage />,
            },
            { path: "/events/:eventId", element: <EventsDetailPage /> },
            { path: "/events/:eventId/edit", element: <EditEventsPage /> },
            { path: "/events/new", element: <NewEventsPage /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
