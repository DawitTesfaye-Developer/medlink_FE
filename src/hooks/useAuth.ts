import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // TODO: Implement auth state listener
  }, []);

  return { user, setUser };
}
