import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const errorObj = useRouteError();
  const message = JSON.parse(errorObj.data).errorMessage;

  return (
    <>
      <h1>ERROR {errorObj.status}</h1>
      <p>{message}</p>
    </>
  );
}

export default ErrorPage;
