import { Text, View } from 'react-native';

type BookDescriptionProps = {
  description: string;
};

const BookDescription = ({ description }: BookDescriptionProps) => (
  <View className="border-t border-foreground pt-6 mt-4">
    <Text className="font-gm-light text-foreground text-xs">{description}</Text>
  </View>
);

export default BookDescription;
