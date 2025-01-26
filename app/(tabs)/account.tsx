import useSupabaseUser from '@/hooks/useSupabaseUser';
import { supabase } from '@/utils/supabase';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AccountScreen = () => {
  const supabaseUser = useSupabaseUser();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="border-t border-b border-muted-foreground flex-row justify-between items-center h-20 px-6">
        <Text className="text-2xl font-gm-regular text-foreground">
          Account
        </Text>
      </View>

      <View className="flex-1 p-6">
        <Text className="text-foreground font-gm-regular text-sm">
          Hello {supabaseUser?.email}
        </Text>
        <TouchableOpacity
          className="mt-4"
          onPress={() => supabase.auth.signOut()}
        >
          <View className="flex-row gap-2 justify-center items-center border-border border px-1 py-2">
            <Text className="text-foreground font-gm-regular text-sm">
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
