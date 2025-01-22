import { Text, TouchableHighlight, View } from 'react-native';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  borderColor?: string;
};

const PrimaryButton = ({
  label,
  onPress,
  borderColor = 'primary',
}: PrimaryButtonProps) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      className={`border px-4 py-5 bg-primary ${`
        border-${borderColor}`}`}
    >
      <View className="flex-row items-center justify-center">
        <Text className="text-center font-roboto-mono-medium">{label}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default PrimaryButton;
