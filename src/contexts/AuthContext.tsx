import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  signIn: () => Promise<void>;
  signUp: () => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
  loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (import.meta.env.VITE_SUPABASE_URL) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      });

      return () => subscription.unsubscribe();
    } else {
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const signIn = async () => {
    if (import.meta.env.VITE_SUPABASE_URL) {
      // Handle real supabase auth later
    } else {
      // Mock login
      await new Promise(r => setTimeout(r, 1000));
      setUser({ id: '1', email: 'farmer@srilaxmifarms.ai' } as User);
    }
  };

  const signUp = async () => {
    if (import.meta.env.VITE_SUPABASE_URL) {
      // Handle real supabase auth later
    } else {
      // Mock signup
      await new Promise(r => setTimeout(r, 1000));
      setUser({ id: '1', email: 'farmer@srilaxmifarms.ai' } as User);
    }
  };

  const signOut = async () => {
    if (import.meta.env.VITE_SUPABASE_URL) {
      await supabase.auth.signOut();
    } else {
      setSession(null);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ session, user, signIn, signUp, signOut, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
