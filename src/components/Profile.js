import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

const Profile = (props) => {
  const auth = useAuth0() || props.dummyAuth // Authentication Token From Auth0 or dummy Authentication Token for Storybook
  const { loading, user } = auth;
  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </Fragment>
  );
};

export default Profile;
