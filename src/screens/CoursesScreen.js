import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { courses } from "../data/courses";

export default function CoursesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#F5F5F5" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>
        Daftar Mata Kuliah
      </Text>

      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CourseDetail", {
                course: item,
              })
            }
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 16,
                marginBottom: 12,
                borderRadius: 12,
                elevation: 3,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text>Dosen: {item.lecturer}</Text>
              <Text>SKS: {item.credits}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}