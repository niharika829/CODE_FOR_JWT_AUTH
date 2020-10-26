import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./loginbutton";
import Profile from "./profile";
import Logout from "./logoutbutton";
function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <Login />
      <Logout />
      <Profile />
    </React.Fragment>
  );
}

export default App;
