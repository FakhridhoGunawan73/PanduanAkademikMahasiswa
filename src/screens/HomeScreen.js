import { View, StyleSheet } from "react-native";
import { Text, Card, Button } from "react-native-paper";

export default function HomeScreen({ route, navigation }) {
  const selectedCourse = route?.params?.selectedCourse;

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Selamat Datang
      </Text>

      <Text style={styles.subtitle}>
        Aplikasi Panduan Akademik Mahasiswa membantu mahasiswa mengakses
        informasi mata kuliah, profil, dan layanan akademik.
      </Text>

      {selectedCourse && (
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Mata Kuliah Dipilih</Text>
            <Text style={styles.selectedCourse}>{selectedCourse}</Text>
          </Card.Content>
        </Card>
      )}

      <Text variant="titleMedium" style={styles.menuTitle}>
        Menu Cepat
      </Text>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Daftar Mata Kuliah</Text>
          <Text style={styles.text}>
            Lihat daftar mata kuliah yang tersedia.
          </Text>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate("Mata Kuliah")}
          >
            Buka Mata Kuliah
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium">Profil Mahasiswa</Text>
          <Text style={styles.text}>
            Lihat informasi data diri mahasiswa.
          </Text>
          <Button
            mode="outlined"
            style={styles.button}
            onPress={() => navigation.navigate("Profil")}
          >
            Buka Profil
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F7FA",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    marginBottom: 20,
    lineHeight: 22,
    color: "#555",
  },
  menuTitle: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
  card: {
    marginBottom: 14,
    borderRadius: 14,
  },
  text: {
    marginTop: 6,
    color: "#555",
  },
  selectedCourse: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "bold",
    color: "#1976D2",
  },
  button: {
    marginTop: 12,
  },
});