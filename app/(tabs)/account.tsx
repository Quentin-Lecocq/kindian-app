import PrimaryButton from '@/components/ui/primary-button';
import useSupabaseUser from '@/hooks/useSupabaseUser';
import { supabase } from '@/utils/supabase';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AccountScreen = () => {
  const supabaseUser = useSupabaseUser();

  return (
    <SafeAreaView className="flex-1 bg-secondary p-4">
      <Text className="text-4xl font-bold">Account</Text>
      <Text>{supabaseUser?.email}</Text>
      <PrimaryButton label="Sign Out" onPress={() => supabase.auth.signOut()} />
    </SafeAreaView>
  );
};

export default AccountScreen;
