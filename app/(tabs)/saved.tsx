import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SavedScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="border-t border-b border-muted-foreground flex-row justify-between items-center h-20 px-6">
        <Text className="text-2xl font-gm-regular text-foreground">Saved</Text>
      </View>
    </SafeAreaView>
  );
};

export default SavedScreen;
