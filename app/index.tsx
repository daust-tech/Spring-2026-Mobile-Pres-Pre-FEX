import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useColorScheme } from "nativewind";
import { countries } from "../data/countries";
import Header from "../components/Header";

export default function CountryList() {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
      <Header title=" Countries" />
      <FlatList
        data={countries}
        keyExtractor={(item) => item.id}
        contentContainerClassName="px-4 py-4"
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/country/${item.id}`)}
            className="flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 mb-3"
          >
            
            <View className="flex-1">
              <Text className="text-gray-900 dark:text-white text-lg font-bold">
                {item.name}
              </Text>
              <Text className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                 {item.capital}
              </Text>
              <Text className="text-gray-500 dark:text-gray-400 text-sm">
                 {item.region}
              </Text>
            </View>
            <Text className="text-gray-400 dark:text-gray-500 text-xl">›</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}