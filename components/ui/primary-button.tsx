import { Text, TouchableHighlight, View } from 'react-native';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
};

const PrimaryButton = ({ label, onPress }: PrimaryButtonProps) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      className="border-primary px-4 py-6 bg-primary"
    >
      <View className="flex-row items-center justify-center">
        <Text className="text-center font-roboto-mono-medium">{label}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default PrimaryButton;
