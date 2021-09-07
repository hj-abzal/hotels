import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export type StarsType = {
  stars: number
  setStars: (newStarsValue: number) => void
}
export const Stars = ({ stars, setStars }: StarsType) => {

  return (
    <View style={styles.container}>
      <Text>Сколько звезд: </Text>
      <TouchableOpacity onPress={() => { setStars(1) }} >
        <Star selected={stars > 0} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { setStars(2) }} >
       <Star selected={stars > 1} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { setStars(3) }} >
        <Star selected={stars > 2} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { setStars(4) }} >
        <Star selected={stars > 3} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { setStars(5) }} >
        <Star selected={stars > 4} />
      </TouchableOpacity>
    </View>
  );
};

export type StarType = {
  selected: boolean;
};
export function Star(props: StarType) {
  return props.selected ? <Text>★</Text> : <Text>☆</Text>;
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  slider: {
    height: 45,
    width: '80%',
  },
});
