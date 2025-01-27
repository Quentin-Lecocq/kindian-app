import { BLURHASH } from '@/constants/images';
import { Image } from 'expo-image';
import { View } from 'react-native';

type BookImageProps = {
  imageUrl: string;
};

const BookImage = ({ imageUrl }: BookImageProps) => {
  return (
    <View className="border border-foreground p-0.5 bg-background">
      <Image
        source={imageUrl}
        style={{ width: 100, height: 140 }}
        contentFit="fill"
        contentPosition="center"
        transition={1000}
        placeholder={BLURHASH}
      />
    </View>
  );
};

export default BookImage;
