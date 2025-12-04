import { StyleSheet, Text, View, Pressable, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@LespetitescomptinesdeNathan";

interface MenuItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle?: string;
  onPress?: () => void;
}

function MenuItem({ icon, title, subtitle, onPress }: MenuItemProps) {
  return (
    <Pressable style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuIconContainer}>
        <Ionicons name={icon} size={22} color="#FF6B6B" />
      </View>
      <View style={styles.menuTextContainer}>
        <Text style={styles.menuTitle}>{title}</Text>
        {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
      </View>
      <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
    </Pressable>
  );
}

export default function ProfilScreen() {
  const openYouTubeChannel = () => {
    Linking.openURL(YOUTUBE_CHANNEL_URL);
  };

  const openPrivacyPolicy = () => {
    // Opens YouTube's terms of service - to be replaced with app's actual privacy policy when available
    Linking.openURL("https://www.youtube.com/t/terms");
  };

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarEmoji}>🎵</Text>
          </View>
        </View>
        <Text style={styles.profileName}>Les Petites Comptines de Nathan</Text>
        <Text style={styles.profileBio}>
          Chaîne YouTube dédiée aux comptines et chansons pour enfants
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>6+</Text>
          <Text style={styles.statLabel}>Vidéos</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>🎶</Text>
          <Text style={styles.statLabel}>Comptines</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>👶</Text>
          <Text style={styles.statLabel}>Pour enfants</Text>
        </View>
      </View>

      <View style={styles.menuSection}>
        <MenuItem
          icon="logo-youtube"
          title="Chaîne YouTube"
          subtitle="Voir toutes nos vidéos"
          onPress={openYouTubeChannel}
        />
        <MenuItem
          icon="notifications-outline"
          title="Notifications"
          subtitle="Gérer les alertes"
          onPress={() => {}}
        />
        <MenuItem
          icon="heart-outline"
          title="Favoris"
          subtitle="Vos vidéos préférées"
          onPress={() => {}}
        />
        <MenuItem
          icon="settings-outline"
          title="Paramètres"
          subtitle="Personnaliser l'application"
          onPress={() => {}}
        />
        <MenuItem
          icon="shield-checkmark-outline"
          title="Confidentialité"
          subtitle="Politique de confidentialité"
          onPress={openPrivacyPolicy}
        />
        <MenuItem
          icon="information-circle-outline"
          title="À propos"
          subtitle="Version 1.0.0"
          onPress={() => {}}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Fait avec ❤️ pour les enfants et leurs parents
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: 24,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#FFE0E0",
  },
  avatarContainer: {
    marginBottom: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FFE0E0",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#FF6B6B",
  },
  avatarEmoji: {
    fontSize: 36,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
    textAlign: "center",
    paddingHorizontal: 16,
  },
  profileBio: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 32,
  },
  statsContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF6B6B",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    backgroundColor: "#E5E5E5",
  },
  menuSection: {
    backgroundColor: "#FFFFFF",
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  menuIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#FFF0F0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
  },
  menuSubtitle: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
  },
  footer: {
    padding: 24,
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
  },
});
