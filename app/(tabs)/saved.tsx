import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SavedScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-secondary p-4">
      <Text className="text-4xl font-bold">Saved</Text>
    </SafeAreaView>
  );
};

export default SavedScreen;
