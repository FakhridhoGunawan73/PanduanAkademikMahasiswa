import { View, Text, Linking, Share } from "react-native";
import { Button } from "react-native-paper";

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
      "https://www.google.com/maps/search/?api=1&query=Universitas+Muhammadiyah+Riau",
    );
  };

  const handleShare = async () => {
    await Share.share({
      message: `Saya memilih mata kuliah ${course.name}`,
    });
  };

  const handleEmail = () => {
    Linking.openURL("mailto:dosen@univ.ac.id?subject=Informasi Mata Kuliah");
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        {course.name}
      </Text>

      <Text style={{ marginTop: 10 }}>Dosen: {course.lecturer}</Text>

      <Text>SKS: {course.credits}</Text>

      <Button
        mode="contained"
        style={{ marginTop: 20 }}
        onPress={handleRegister}
      >
        Daftar
      </Button>
      <Button mode="outlined" style={{ marginTop: 10 }} onPress={handleCall}>
        Hubungi Dosen
      </Button>

      <Button mode="outlined" style={{ marginTop: 10 }} onPress={handleMaps}>
        Lihat di Google Maps
      </Button>

      <Button mode="outlined" style={{ marginTop: 10 }} onPress={handleShare}>
        Bagikan Mata Kuliah
      </Button>

      <Button mode="outlined" style={{ marginTop: 10 }} onPress={handleEmail}>
        Kirim Email
      </Button>
    </View>
  );
}
