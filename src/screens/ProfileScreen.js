import { View, StyleSheet } from "react-native";
import { Text, Card, Avatar } from "react-native-paper";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.profileHeader}>
          <Avatar.Text size={72} label="FG" />
          <Text variant="headlineSmall" style={styles.name}>
            Fakhridho Gunawan
          </Text>
          <Text style={styles.major}>Teknik Informatika</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Informasi Mahasiswa
          </Text>

          <Text style={styles.text}>Nama: Fakhridho Gunawan</Text>
          <Text style={styles.text}>NIM: isi NIM kamu di sini</Text>
          <Text style={styles.text}>Program Studi: Teknik Informatika</Text>
          <Text style={styles.text}>Email: fakhridhogunawan01@gmail.com</Text>
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
  card: {
    marginBottom: 16,
    borderRadius: 14,
  },
  profileHeader: {
    alignItems: "center",
  },
  name: {
    marginTop: 12,
    fontWeight: "bold",
  },
  major: {
    color: "#555",
    marginTop: 4,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 12,
  },
  text: {
    marginBottom: 8,
    color: "#444",
  },
});