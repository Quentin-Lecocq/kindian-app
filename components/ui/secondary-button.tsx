import { Text, TouchableHighlight, View } from 'react-native';

type SecondaryButtonProps = {
  label: string;
  onPress: () => void;
  textCenter?: boolean;
  icon?: React.ReactNode;
};

const SecondaryButton = ({
  label,
  onPress,
  icon,
  textCenter = false,
}: SecondaryButtonProps) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      className="border border-black px-4 py-5"
    >
      <View className="flex-row gap-2 items-center">
        {icon}
        <Text
          className={`${
            textCenter ? 'text-center w-full' : ''
          } font-roboto-mono-medium text-sm`}
        >
          {label}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default SecondaryButton;
