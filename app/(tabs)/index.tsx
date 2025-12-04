import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

// Sample video URL for demonstration - expo-video requires direct video URLs
// The target YouTube video (https://www.youtube.com/watch?v=e0TfFa72W-8) would need
// server-side extraction or YouTube API integration to get a playable URL
const FEATURED_VIDEO_URL =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function HomeScreen() {
  const [isPlaying, setIsPlaying] = useState(false);
  const player = useVideoPlayer(FEATURED_VIDEO_URL, (player) => {
    player.loop = false;
  });
  const videoRef = useRef(null);

  const togglePlayback = () => {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>🎵 Les Petites Comptines de Nathan</Text>
          <Text style={styles.subtitle}>
            Bienvenue sur notre application de comptines pour enfants !
          </Text>
        </View>

        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>📺 Vidéo à la une</Text>
          <View style={styles.videoContainer}>
            <VideoView
              ref={videoRef}
              style={styles.video}
              player={player}
              allowsFullscreen
              allowsPictureInPicture
              nativeControls
            />
          </View>
          <View style={styles.videoInfo}>
            <Text style={styles.videoTitle}>Comptine pour enfants</Text>
            <Text style={styles.videoDescription}>
              Découvrez nos merveilleuses comptines pour accompagner vos enfants au quotidien.
            </Text>
          </View>
          <Pressable style={styles.playButton} onPress={togglePlayback}>
            <Ionicons name={isPlaying ? "pause" : "play"} size={24} color="#FFFFFF" />
            <Text style={styles.playButtonText}>{isPlaying ? "Pause" : "Lire la vidéo"}</Text>
          </Pressable>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>📱 À propos</Text>
          <Text style={styles.infoText}>
            Cette application vous permet de découvrir toutes les vidéos de la chaîne YouTube "Les
            Petites Comptines de Nathan". Explorez notre collection de comptines pour enfants et
            profitez-en en famille !
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
    paddingTop: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6B6B",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  featuredSection: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  videoContainer: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 12,
    backgroundColor: "#000",
  },
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  videoInfo: {
    marginBottom: 12,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  videoDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  playButton: {
    backgroundColor: "#FF6B6B",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
    borderRadius: 12,
    gap: 8,
  },
  playButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  infoSection: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 22,
  },
});
