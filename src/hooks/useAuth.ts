import { AuthContext } from 'contexts/AuthContext';
import { useContext } from 'react';

export function useAuth() {
  const values = useContext(AuthContext);

  return values;
}
