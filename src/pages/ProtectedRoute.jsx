import { Navigate } from 'react-router-dom';
import { auth } from '../Config/firebase';

import React from 'react'

const ProtectedRoute = ({children}) => {
    const user = auth.currentUser;

  return  user ? children : <Navigate to="/" />;
}

export default ProtectedRoute