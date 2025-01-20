import { SupabaseUserContext } from '@/contexts/SupabaseUserContext';
import { useContext } from 'react';

export const useSupabaseUser = () => {
  const context = useContext(SupabaseUserContext);
  if (context === undefined) {
    throw new Error(
      'useSupabaseUser must be used within a SupabaseUserProvider'
    );
  }
  return context;
};
