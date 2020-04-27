import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { reactLocalStorage } from 'reactjs-localstorage';

const Profile = (props) => {
  const auth = useAuth0() || props.dummyAuth
  const { loading, user } = auth;
  
    
  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
      {/* <code>{JSON.stringify(reactLocalStorage.getObject('dbUser'), null, 2)}</code> */}
    </Fragment>
  );
};

export default Profile;
