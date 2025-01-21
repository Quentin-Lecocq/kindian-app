import { SignedIn, useAuth, useUser } from '@clerk/clerk-expo';
import { Bell, Menu } from 'iconoir-react-native';
import { SafeAreaView, Text, View } from 'react-native';

export default function Home() {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-secondary">
      <SignedIn>
        <View className="border flex-row justify-between items-center h-20">
          <View className="border-r h-full items-center justify-center flex-row w-20">
            <Menu width={22} height={22} strokeWidth={2} />
          </View>
          <View className="mt-3">
            <Text className="text-3xl font-bold font-bodoni-moda-bold text-black">
              KINDIAN
            </Text>
          </View>
          <View className="border-l h-full items-center justify-center flex-row w-20">
            <Bell width={22} height={22} strokeWidth={2} />
          </View>
        </View>
        <View className="p-4">
          <Text className="text-sm font-roboto-mono">
            Hello {user?.emailAddresses[0].emailAddress}
          </Text>
          <Text className="text-sm font-roboto-mono">
            You can now start using the app
          </Text>
        </View>
      </SignedIn>
    </SafeAreaView>
  );
}
