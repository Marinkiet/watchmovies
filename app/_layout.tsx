import { Stack } from "expo-router";
import './globals.css';
export default function RootLayout() {
  return <Stack >
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="(tabs)/movies/[id]" options={{ headerShown: false }} />
    <Stack.Screen name="(tabs)/search" options={{ headerShown: false }} />
    <Stack.Screen name="(tabs)/saved" options={{ headerShown: false }} />
    <Stack.Screen name="(tabs)/profile" options={{ headerShown: false }} />
  </Stack>;
}
