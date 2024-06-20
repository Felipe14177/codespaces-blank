import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, View, Pressable, Linking, } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image source={require('@/assets/images/logo2.jpg')} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>Redes sociais</ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/1.png')} style={styles.icon} />
          <Pressable style={styles.button} onPress={() => Linking.openURL('https://wa.me/5518998244362')}>
            <ThemedText style={styles.text}>Whatsapp</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/2.png')} style={styles.icon} />
          <Pressable style={styles.button} onPress={() => Linking.openURL('https://www.instagram.com/flpnzx_/')}>
            <ThemedText style={styles.text}>Instagram</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/3.png')} style={styles.icon} />
          <Pressable style={styles.button} onPress={() => Linking.openURL('https://github.com/Felipe14177')}>
            <ThemedText style={styles.text}>Github</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/0.png')} style={styles.icon} />
          <Pressable style={styles.button} onPress={() => Linking.openURL('tel:5518998244362')}>
            <ThemedText style={styles.text}>Telefone</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/5.png')} style={styles.icon} />
          <Pressable style={styles.button} onPress={() => Linking.openURL('https://discord.com/channels/@me/1057518184003014697')}>
            <ThemedText style={styles.text}>Discord</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/6.png')} style={styles.icon} />
          <Pressable style={styles.button} onPress={() => Linking.openURL('https://www.linkedin.com/in/felipe-stebam-7b8980314/')}>
            <ThemedText style={styles.text}>Linkedin</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/4.png')} style={styles.icon} />
          <Pressable style={styles.button} onPress={() => Linking.openURL('https://x.com/StebamFelipe')}>
            <ThemedText style={styles.text}>Twitter (X)</ThemedText>
          </Pressable>
        </ThemedView>

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 35,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  redes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#cccccc',
  },

  icon: {
    width: 32,
    height: 32,
    marginRight: 23,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  text: {
    fontSize: 18,
    color: '#333', 
    fontWeight: 'bold',
  },
});
