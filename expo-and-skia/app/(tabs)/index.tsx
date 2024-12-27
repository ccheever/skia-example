import { View, Text } from "react-native";

import React from "react";
import { Canvas, Circle, Group } from "@shopify/react-native-skia";

export default function HomeScreen() {
  let width = 256;
  let height = 256;
  let r = width * 0.33;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Canvas style={{ width, height }}>
        <Group blendMode="multiply">
          <Circle cx={r} cy={r} r={r} color="cyan" />
          <Circle cx={width - r} cy={r} r={r} color="magenta" />
          <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
        </Group>
      </Canvas>
    </View>
  );
}
