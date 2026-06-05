import { View, StyleSheet, Linking, Share } from "react-native";
import { Text, Card, Button, Chip, Divider } from "react-native-paper";

export default function CourseDetailScreen({ route, navigation }) {
  const { course } = route.params;

  const handleRegister = () => {
    navigation.navigate("Main", {
      screen: "Home",
      params: {
        selectedCourse: course.name,
      },
    });
  };

  const handleCall = () => {
    Linking.openURL("tel:+6281234567890");
  };

  const handleMaps = () => {
    Linking.openURL(
      "https://www.google.com/maps/search/?api=1&query=Universitas+Muhammadiyah+Riau"
    );
  };

  const handleShare = async () => {
    await Share.share({
      message: `Saya memilih mata kuliah ${course.name}. Dosen pengampu: ${course.lecturer}.`,
    });
  };

  const handleEmail = () => {
    Linking.openURL(
      `mailto:dosen@univ.ac.id?subject=Informasi Mata Kuliah ${course.name}`
    );
  };

  return (
    <View style={styles.container}>
      <Card style={styles.mainCard}>
        <Card.Content>
          <View style={styles.iconBox}>
            <Text style={styles.iconText}>{course.name.charAt(0)}</Text>
          </View>

          <Text variant="headlineSmall" style={styles.title}>
            {course.name}
          </Text>

          <Text style={styles.subtitle}>
            Informasi detail mata kuliah dan layanan akademik mahasiswa.
          </Text>

          <View style={styles.chipRow}>
            <Chip style={styles.chip}>{course.credits} SKS</Chip>
            <Chip style={styles.chip}>Aktif</Chip>
          </View>

          <Divider style={styles.divider} />

          <Text variant="titleMedium" style={styles.sectionTitle}>
            Detail Mata Kuliah
          </Text>

          <Text style={styles.infoText}>Dosen: {course.lecturer}</Text>
          <Text style={styles.infoText}>Kode Mata Kuliah: MK-{course.id}</Text>
          <Text style={styles.infoText}>Semester: 6</Text>
        </Card.Content>
      </Card>

      <Card style={styles.actionCard}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Aksi Akademik
          </Text>

          <Button mode="contained" style={styles.button} onPress={handleRegister}>
            Daftar Mata Kuliah
          </Button>

          <Button mode="outlined" style={styles.button} onPress={handleCall}>
            Hubungi Dosen
          </Button>

          <Button mode="outlined" style={styles.button} onPress={handleMaps}>
            Lihat di Google Maps
          </Button>

          <Button mode="outlined" style={styles.button} onPress={handleShare}>
            Bagikan Mata Kuliah
          </Button>

          <Button mode="outlined" style={styles.button} onPress={handleEmail}>
            Kirim Email
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F7FA",
  },
  mainCard: {
    borderRadius: 16,
    marginBottom: 16,
  },
  actionCard: {
    borderRadius: 16,
  },
  iconBox: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },
  iconText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1976D2",
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    color: "#666",
    marginTop: 8,
    lineHeight: 21,
  },
  chipRow: {
    flexDirection: "row",
    marginTop: 14,
  },
  chip: {
    marginRight: 8,
    backgroundColor: "#EEF3F8",
  },
  divider: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoText: {
    color: "#444",
    marginBottom: 8,
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
  },
});