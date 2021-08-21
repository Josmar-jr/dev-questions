import { User, Session } from '@supabase/supabase-js';
import Router from 'next/router';
import { createContext, useEffect, useState } from 'react';
import { supabase } from '../services/supabase';

type AuthContextType = {
  user?: User;
  session?: Session;
  signInWithGithub: () => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider(props) {
  const [user, setUser] = useState<User>();
  const [session, setSession] = useState<Session>();

  useEffect(() => {
    const currentSession = supabase.auth.session();

    if (currentSession) {
      setSession(currentSession);
      setUser(currentSession.user);
    }

    const { data } = supabase.auth.onAuthStateChange((event, newSession) => {
      setSession(newSession);
      setUser(newSession?.user);

      fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        credentials: 'same-origin',
        body: JSON.stringify({ event, session: newSession }),
      });

      if (event === 'SIGNED_IN' && newSession) {
        Router.push(`/rooms/new`);
      }
    });

    return () => {
      data.unsubscribe();
    };
  }, []);

  async function signInWithGithub() {
    const { error } = await supabase.auth.signIn({
      provider: 'github',
    });

    if (error) {
      console.log(error);
      return;
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    Router.push('/');
  }

  return (
    <AuthContext.Provider value={{ user, session, signInWithGithub, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}
