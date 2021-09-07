import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";
import { SearchableInput } from './src/components/filters/SeachableInput';
import { TypeSelector } from './src/components/filters/TypeSelector';
import { HostelItem, HotelType } from './src/components/hostel-item/hotel-item';
import { Stars } from './src/components/Stars/Stars';
import Slider from '@react-native-community/slider';
import hotels from './src/hotels.json';
import { filterMultiFunc } from './src/utils/filterMuliFunc';

export default function App() {
  const [hotelsArr, setHotes] = useState<HotelType[]>(hotels.hotels)
  const [country, setCountry] = useState('');
  const [type, setType] = useState('');
  const [stars, setStars] = useState(0)
  const [feedCount, setFeedCount] = useState('')
  const [sliderValue, setSliderValue] = useState<number>(0)
  const [editMode, setEditMode] = useState(false)
  const [open, setOpen] = useState(false);

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
      <View style={styles.container}>
        <View style={styles.filter}>
        <SearchableInput country={country} open={open} setCountry={setCountry} setOpen={setOpen} />
        {!open && <TypeSelector
          type={type}
          setType={setType}
        />
        }

        <Stars stars={stars} setStars={setStars} />
        <View style={styles.feedback}>
          <Text>Количество отзывов: </Text>
          <TextInput
            placeholder='Введите число'
            onChangeText={setFeedCount}
            value={feedCount}
            keyboardType='numeric'
          />
        </View>
        <Slider
          tapToSeek
          style={styles.slider}
          minimumValue={0}
          maximumValue={5000}
          thumbTintColor='black'
          step={1}
          value={sliderValue}
          minimumTrackTintColor='blue'
          maximumTrackTintColor='gray'
          onValueChange={setSliderValue}
          onSlidingStart={() => setEditMode(true)}
          onSlidingComplete={() => setEditMode(false)}
        />
        {
          editMode && <Text>{sliderValue}</Text>
        }
        <Button
          onPress={setFilter}
          title='Применить фильтры'
          color='#547794'
        />
        <Button
          onPress={resetFilter}
          title='Сбросить фильтры'
          color='#547794'
        />
        </View>
        <ScrollView>
        {
          hotelsArr.length === 0
            ? <Text>Записей не найдено</Text>
            : hotelsArr.slice(0, 3).map((h, index) => {
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
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: "50px",
  },
  filter: {
  },
  slider: {
    height: 45,
    width: '80%',
  },
  feedback: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
});
