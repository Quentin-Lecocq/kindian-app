import { useAuthSession } from '@/providers/AuthProvider';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AccountScreen = () => {
  const { signOut, user } = useAuthSession();

  return (
    <SafeAreaView className="flex-1 bg-background p-6">
      <Text className="font-gm-medium text-md text-foreground">Account</Text>
      <View className="flex-1 mt-4">
        <Text className="text-foreground font-gm-regular text-sm">
          Hello {user?.email}
        </Text>
        <TouchableOpacity className="mt-4" onPress={signOut}>
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
