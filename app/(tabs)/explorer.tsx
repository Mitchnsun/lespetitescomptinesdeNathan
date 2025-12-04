import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  Linking,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

// Static list of videos from the YouTube channel "Les Petites Comptines de Nathan"
// In a production app, this would be fetched from the YouTube Data API v3
// The first video uses a real YouTube thumbnail, others use placeholders for demonstration
const CHANNEL_VIDEOS = [
  {
    id: "e0TfFa72W-8",
    title: "Comptine pour enfants - Les Petites Comptines de Nathan",
    thumbnail: "https://img.youtube.com/vi/e0TfFa72W-8/maxresdefault.jpg",
    duration: "3:45",
    views: "1.2K",
  },
  {
    // Placeholder videos - replace with actual YouTube API data in production
    id: "video2",
    title: "Chanson pour dormir - Berceuse douce",
    thumbnail: "https://via.placeholder.com/320x180/FFE66D/333333?text=Berceuse",
    duration: "5:20",
    views: "856",
  },
  {
    id: "video3",
    title: "Apprendre les couleurs - Comptine éducative",
    thumbnail: "https://via.placeholder.com/320x180/4ECDC4/FFFFFF?text=Couleurs",
    duration: "4:10",
    views: "2.3K",
  },
  {
    id: "video4",
    title: "Les animaux de la ferme - Chanson pour enfants",
    thumbnail: "https://via.placeholder.com/320x180/FF6B6B/FFFFFF?text=Animaux",
    duration: "3:30",
    views: "1.5K",
  },
  {
    id: "video5",
    title: "Comptine de Noël - Jingle Bells en français",
    thumbnail: "https://via.placeholder.com/320x180/98D8C8/333333?text=Noel",
    duration: "2:55",
    views: "3.1K",
  },
  {
    id: "video6",
    title: "Apprendre à compter - Les chiffres de 1 à 10",
    thumbnail: "https://via.placeholder.com/320x180/F7DC6F/333333?text=Chiffres",
    duration: "4:45",
    views: "4.2K",
  },
];

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@LespetitescomptinesdeNathan";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
}

function VideoCard({ video }: { video: Video }) {
  const handlePress = () => {
    if (video.id === "e0TfFa72W-8") {
      Linking.openURL(`https://www.youtube.com/watch?v=${video.id}`);
    } else {
      Linking.openURL(YOUTUBE_CHANNEL_URL);
    }
  };

  return (
    <Pressable style={styles.videoCard} onPress={handlePress}>
      <View style={styles.thumbnailContainer}>
        <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} resizeMode="cover" />
        <View style={styles.durationBadge}>
          <Text style={styles.durationText}>{video.duration}</Text>
        </View>
        <View style={styles.playOverlay}>
          <Ionicons name="play-circle" size={48} color="rgba(255,255,255,0.9)" />
        </View>
      </View>
      <View style={styles.videoInfo}>
        <Text style={styles.videoTitle} numberOfLines={2}>
          {video.title}
        </Text>
        <View style={styles.videoMeta}>
          <Ionicons name="eye-outline" size={14} color="#666" />
          <Text style={styles.viewsText}>{video.views} vues</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default function ExplorerScreen() {
  const openYouTubeChannel = () => {
    Linking.openURL(YOUTUBE_CHANNEL_URL);
  };

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🎬 Explorer les vidéos</Text>
        <Text style={styles.headerSubtitle}>
          Découvrez toutes les comptines de la chaîne YouTube
        </Text>
        <Pressable style={styles.channelButton} onPress={openYouTubeChannel}>
          <Ionicons name="logo-youtube" size={20} color="#FFFFFF" />
          <Text style={styles.channelButtonText}>Voir la chaîne YouTube</Text>
        </Pressable>
      </View>

      <FlatList
        data={CHANNEL_VIDEOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoCard video={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <ActivityIndicator size="large" color="#FF6B6B" />
            <Text style={styles.emptyText}>Chargement des vidéos...</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
  },
  header: {
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#FFE0E0",
    backgroundColor: "#FFFFFF",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 12,
  },
  channelButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF0000",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 8,
  },
  channelButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  videoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  thumbnailContainer: {
    position: "relative",
  },
  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: "#E5E5E5",
  },
  durationBadge: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.8)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  durationText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "500",
  },
  playOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  videoInfo: {
    padding: 12,
  },
  videoTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
    lineHeight: 20,
  },
  videoMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  viewsText: {
    fontSize: 12,
    color: "#666",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 48,
  },
  emptyText: {
    marginTop: 16,
    fontSize: 16,
    color: "#666",
  },
});
