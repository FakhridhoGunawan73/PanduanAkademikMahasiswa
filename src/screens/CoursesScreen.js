import { View, StyleSheet, FlatList } from "react-native";
import { Text, Card, Button } from "react-native-paper";
import { courses } from "../data/courses";

export default function CoursesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.title}>
        Daftar Mata Kuliah
      </Text>

      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium" style={styles.courseName}>
                {item.name}
              </Text>
              <Text style={styles.text}>Dosen: {item.lecturer}</Text>
              <Text style={styles.text}>SKS: {item.credits}</Text>

              <Button
                mode="contained"
                style={styles.button}
                onPress={() =>
                  navigation.navigate("CourseDetail", { course: item })
                }
              >
                Lihat Detail
              </Button>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F7FA",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    marginBottom: 14,
    borderRadius: 14,
  },
  courseName: {
    fontWeight: "bold",
  },
  text: {
    marginTop: 6,
    color: "#555",
  },
  button: {
    marginTop: 12,
  },
});