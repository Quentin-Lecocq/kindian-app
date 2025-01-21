import { Text, TouchableHighlight } from 'react-native';

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
      <Text className="text-center font-roboto-mono-medium">{label}</Text>
    </TouchableHighlight>
  );
};

export default PrimaryButton;
