import { Bookmark, CloudDownload, Trash } from 'iconoir-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

type ActionButtonsProps = {
  onRead: () => void;
  onDownload: () => void;
  onSave: () => void;
  onDelete: () => void;
};

const ActionButtons = ({
  onRead,
  onDownload,
  onSave,
  onDelete,
}: ActionButtonsProps) => (
  <View className="gap-4">
    <TouchableOpacity onPress={onRead}>
      <View className="flex-row gap-2 justify-center items-center border-border border bg-foreground px-1 py-2">
        <Text className="font-gm-regular text-background text-sm">
          Read on Google
        </Text>
      </View>
    </TouchableOpacity>
    <View className="flex-row justify-between h-24">
      <TouchableOpacity
        onPress={onDownload}
        className="flex-1 border-foreground border items-center justify-center gap-1"
      >
        <CloudDownload color="#FAFAFA" />
        <Text className="font-gm-medium text-sm text-foreground">Download</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onSave}
        className="flex-1 border-foreground border items-center justify-center gap-1"
      >
        <Bookmark color="#FAFAFA" />
        <Text className="font-gm-medium text-sm text-foreground">Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onDelete}
        className="flex-1 items-center border-foreground border justify-center gap-1"
      >
        <Trash color="#FAFAFA" />
        <Text className="font-gm-medium text-sm text-foreground">Delete</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default ActionButtons;
