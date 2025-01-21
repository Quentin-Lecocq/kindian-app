import { Text, TouchableHighlight, View } from 'react-native';

type SecondaryButtonProps = {
  label: string;
  onPress: () => void;
  icon?: React.ReactNode;
};

const SecondaryButton = ({ label, onPress, icon }: SecondaryButtonProps) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      className="border border-black px-4 py-6"
    >
      <View className="flex-row gap-2 items-center">
        {icon}
        <Text className="text-center font-roboto-mono text-sm">{label}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default SecondaryButton;
