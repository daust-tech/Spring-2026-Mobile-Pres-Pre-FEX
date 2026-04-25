import { useColorScheme } from "nativewind";
import { View, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  const { colorScheme, setColorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View className="flex-row items-center justify-between px-6 pt-14 pb-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <Text className="text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </Text>
      <TouchableOpacity
        onPress={() => setColorScheme(isDark ? "light" : "dark")}
        className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full"
      >
        <Text className="text-gray-900 dark:text-white font-medium">
          {isDark ? " Light" : "Dark"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}