import {StyleSheet, Text, TextInput, View} from "react-native";
import React, {useState} from "react";

export type HotelType = {
    name: string
    country: string
    address: string
    stars: number
    type: string
    description: string
    services: string[]
    min_price: number
    currency: string
    rating: number
    reviews_amount: number
    last_review: string
}
export const HostelItem = (props: HotelType) => {
    return <View style={styles.container}>
        <Text>{props.name}</Text>
        <Text>{props.country}</Text>
        <Text>{props.address}</Text>
        <Text>{props.stars}</Text>
        <Text>{props.type}</Text>
        <Text>{props.description}</Text>
        <Text>{props.services}</Text>
        <Text>{props.min_price}</Text>
        <Text>{props.currency}</Text>
        <Text>{props.rating}</Text>
        <Text>{props.reviews_amount}</Text>
        <Text>{props.last_review}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20
    },
})