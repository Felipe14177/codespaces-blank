import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/logo3.jpg")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="title">Seja Bem-vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre o app:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <ThemedText style={styles.justifiedText}>
          <ThemedText type="defaultSemiBold">
            Esta plataforma oferece um fácil gerenciamento de redes sociais para facilitar a sua vida e economizar
            seu tempo e esforço. Com este app, você poderá otimizar sua presença online e alcançar seu público de maneira eficiente.
          </ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre mim:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <ThemedText style={styles.justifiedText}>
          Olá!! Meu nome é Felipe. Sou desenvolvedor deste aplicativo de gerenciamento de redes sociais
          e apreciador da programação e desenvolvimento para web e mobile.
        </ThemedText>
        <Image
          source={require("@/assets/images/foto.png")}
          style={styles.aboutImage}
        />
      </ThemedView> 
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  tituloContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  textoContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 300,
    width: 550,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  justifiedText: {
    textAlign: "justify",
  },
  image: {
    width: "40%",
    height: "40%",
  },
  aboutImage: {
    width: 200,
    height: 200,
    marginLeft: 63,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
  },
});
