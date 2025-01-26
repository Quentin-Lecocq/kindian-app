import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SavedScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-6">
      <Text className="font-gm-medium text-md text-foreground">Saved</Text>
    </SafeAreaView>
  );
};

export default SavedScreen;
