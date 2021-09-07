import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";
import { SearchableInput } from './src/components/filters/SeachableInput';
import { TypeSelector } from './src/components/filters/TypeSelector';
import { HostelItem, HotelType } from './src/components/hostel-item/hotel-item';
import { Stars } from './src/components/Stars/Stars';
import Slider from '@react-native-community/slider';
import hotels from './src/hotels.json';
import { filterMultiFunc } from './src/utils/filterMuliFunc';

type SearchType = {

}
export default function App() {
  const [hotelsArr, setHotes] = useState<HotelType[]>(hotels.hotels)
  const [country, setCountry] = useState('');
  const [type, setType] = useState('');
  const [stars, setStars] = useState(0)
  const [feedCount, setFeedCount] = useState('')
  const [sliderValue, setSliderValue] = useState<number>(0)
  const [editMode, setEditMode] = useState(false)


  const filterFunc = () => {
    let countryFilter = filterMultiFunc(hotelsArr, 'country', country);
    let typeFilter = filterMultiFunc(countryFilter, 'type', type);
    let starsFilter = filterMultiFunc(typeFilter, 'stars', '', stars);
    let feedCountFilter = filterMultiFunc(starsFilter, 'reviews_amount', '', Number(feedCount));
    let sliderValueFilter = filterMultiFunc(feedCountFilter, 'min_price', '', sliderValue);
    setHotes(sliderValueFilter)
  }
  const setFilter = () => {
    filterFunc()
  }
  const resetFilter = () => {
    setCountry('')
    setType('')
    setStars(0)
    setFeedCount('')
    setSliderValue(0)
    setHotes(hotels.hotels)
  }
  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={styles.container}>
          <SearchableInput country={country} setCountry={setCountry} />
          <TypeSelector type={type} setType={setType} />
          <Stars stars={stars} setStars={setStars} />
          <View>
            <Text>Количество отзывов</Text>
            <TextInput
              placeholder="yo"
              onChangeText={setFeedCount}
              value={feedCount}
              keyboardType="numeric"
            />
          </View>
          <Slider
            tapToSeek
            style={styles.slider}
            minimumValue={0}
            maximumValue={5000}
            thumbTintColor="black"
            step={1}
            value={sliderValue}
            minimumTrackTintColor="blue"
            maximumTrackTintColor="gray"
            onValueChange={setSliderValue}
            onSlidingStart={() => setEditMode(true)}
            onSlidingComplete={() => setEditMode(false)}
          />
          {
            editMode && <Text>{sliderValue}</Text>
          }
          <TouchableOpacity onPress={setFilter} >
            <View>Применить фильтры</View>
          </TouchableOpacity>
          <TouchableOpacity onPress={resetFilter} >
            <View>Сбросить фильтры</View>
          </TouchableOpacity>
          {
            hotelsArr.map((h, index) => {
              return (
                <HostelItem
                  key={index}
                  name={h.name}
                  country={h.country}
                  address={h.address}
                  stars={h.stars}
                  type={h.type}
                  description={h.description}
                  services={h.services}
                  min_price={h.min_price}
                  currency={h.currency}
                  rating={h.rating}
                  reviews_amount={h.reviews_amount}
                  last_review={h.last_review}
                />
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    height: 45,
    width: '80%',
  },
});
