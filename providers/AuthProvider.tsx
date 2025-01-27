import useSupabaseUser from '@/hooks/useSupabaseUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '@supabase/supabase-js';
import { router } from 'expo-router';
import {
  createContext,
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

const AuthContext = createContext<{
  signIn: (token: string) => void;
  user: User | null;
  signOut: () => void;
  token: MutableRefObject<string | null> | null;
  isLoading: boolean;
}>({
  signIn: () => {},
  user: null,
  signOut: () => {},
  token: null,
  isLoading: false,
});

export function useAuthSession() {
  return useContext(AuthContext);
}

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabaseUser = useSupabaseUser();
  const tokenRef = useRef<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async (): Promise<void> => {
      const token = await AsyncStorage.getItem('token');
      tokenRef.current = token ?? null;
      setIsLoading(false);
    })();
  }, []);

  const signIn = async (token: string) => {
    await AsyncStorage.setItem('token', token);
    tokenRef.current = token;
    router.replace('/');
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('token');
    tokenRef.current = null;
    router.replace('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: supabaseUser,
        signOut,
        token: tokenRef,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
