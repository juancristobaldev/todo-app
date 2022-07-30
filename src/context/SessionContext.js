import React, { createContext, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ME } from '../data/queries';

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const { data, loading: loadingMe, refetch: refetchSession } = useQuery(ME);

  const [session,setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data?.me) {
      setSession(data.me);
      setLoading(loadingMe);
    } else {
      setLoading(loadingMe);
    }
  }, [data, loadingMe]);

  if  (loading) return <p>Loading...</p>;

  return (
    <SessionContext.Provider
      value={{
        session,
        setSession,
        loading,
        refetchSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  )

}