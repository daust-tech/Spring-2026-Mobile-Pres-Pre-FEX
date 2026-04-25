import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { countries } from "../../data/countries";
import Header from "../../components/Header";

export default function CountryDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const country = countries.find((c) => c.id === id);

  if (!country) {
    return (
      <View className="flex-1 bg-white dark:bg-gray-900 items-center justify-center">
        <Text className="text-gray-900 dark:text-white text-lg">
          Country not found.
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
        <Header title={` ${country.name}`} />
      <ScrollView className="flex-1 px-4 py-4">

        {/* Description */}
        <View className="bg-blue-50 dark:bg-blue-900 rounded-2xl p-4 mb-4">
          <Text className="text-blue-900 dark:text-blue-100 text-base leading-6">
            {country.description}
          </Text>
        </View>

        {/* Info Cards */}
        {[
          { label: "Capital", value: country.capital },
          { label: "Population", value: country.population },
          { label: "Region", value: country.region },
          { label: "Language", value: country.language },
          {  label: "Currency", value: country.currency },
          { label: "Area", value: country.area },
        ].map((info) => (
          <View
            key={info.label}
            className="flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 mb-3"
          >
          
            <View>
              <Text className="text-gray-500 dark:text-gray-400 text-xs uppercase font-semibold">
                {info.label}
              </Text>
              <Text className="text-gray-900 dark:text-white text-base font-bold mt-1">
                {info.value}
              </Text>
            </View>
          </View>
        ))}

        {/* Back Button */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="bg-blue-500 dark:bg-blue-400 rounded-2xl p-4 mt-2 mb-8 items-center"
        >
          <Text className="text-white font-bold text-base">
            ← Back to Countries
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}