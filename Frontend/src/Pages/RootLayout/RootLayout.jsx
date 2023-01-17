import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../../components/MainNavigation";

function RootLayout() {
  const { state } = useNavigation();

  let isLoading;

  isLoading = state === "loading";

  return (
    <>
      {isLoading && <p>Loading</p>}
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
