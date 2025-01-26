import { createContext, useState } from 'react';

type SupabaseUser = {
  id: string;
  clerk_id: string;
};

type SupabaseUserContextType = {
  supabaseUser: SupabaseUser | null;
  isLoading: boolean;
  error: Error | null;
};

export const SupabaseUserContext = createContext<SupabaseUserContextType>({
  supabaseUser: null,
  isLoading: true,
  error: null,
});

export const SupabaseUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [supabaseUser, setSupabaseUser] = useState<SupabaseUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  return (
    <SupabaseUserContext.Provider value={{ supabaseUser, isLoading, error }}>
      {children}
    </SupabaseUserContext.Provider>
  );
};
