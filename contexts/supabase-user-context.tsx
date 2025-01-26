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

  // useEffect(() => {
  //   const getSupabaseUser = async () => {
  //     if (!clerkId) {
  //       setSupabaseUser(null);
  //       setIsLoading(false);
  //       return;
  //     }

  //     try {
  //       const { data, error } = await supabase
  //         .from('users')
  //         .select('*')
  //         .eq('clerk_id', clerkId)
  //         .single();

  //       if (error) throw error;
  //       setSupabaseUser(data);
  //     } catch (err) {
  //       setError(
  //         err instanceof Error ? err : new Error('Failed to fetch user')
  //       );
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   getSupabaseUser();
  // }, [clerkId]);

  return (
    <SupabaseUserContext.Provider value={{ supabaseUser, isLoading, error }}>
      {children}
    </SupabaseUserContext.Provider>
  );
};
