import { AuthContext } from 'contexts/auth';
import { useContext } from 'react';

export function useAuth() {
  const values = useContext(AuthContext);

  return values;
}
