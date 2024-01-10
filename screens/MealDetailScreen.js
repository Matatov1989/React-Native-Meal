import { View, Text } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return <Text>ff {mealId}</Text>;
}

export default MealDetailScreen;
