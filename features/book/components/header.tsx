import { useRouter } from 'expo-router';
import { ArrowLeft } from 'iconoir-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const router = useRouter();

  return (
    <View className="flex-row justify-between items-center h-20">
      <TouchableOpacity
        onPress={() => router.back()}
        className="h-full items-center justify-center flex-row w-20"
      >
        <ArrowLeft color="#FAFAFA" />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        className="text-md flex-1 p-4 text-center font-bold font-gm-bold text-foreground"
      >
        {title}
      </Text>
      <View className="h-full items-center justify-center flex-row w-20"></View>
    </View>
  );
};

export default Header;
