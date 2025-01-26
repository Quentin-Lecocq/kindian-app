import PrimaryButton from '@/components/ui/primary-button';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AccountScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-secondary p-4">
      <Text className="text-4xl font-bold">Account</Text>
      <PrimaryButton label="Sign out" onPress={() => {}} />
    </SafeAreaView>
  );
};

export default AccountScreen;
