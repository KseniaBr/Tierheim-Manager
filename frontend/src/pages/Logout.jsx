import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Logout = () => {
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    setCurrentUser(null);
  }, [setCurrentUser]);
  return (
    <>
      <Navigate to="/" replace={true} />
    </>
  );
};

export default Logout;
