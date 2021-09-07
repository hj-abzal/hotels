import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

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
        <View style={styles.header}>
            <View>
                <Text style={styles.title}>{props.name} </Text>
            </View>
            <View>
                <Text>{props.address}</Text>
                <View style={styles.price}>
                    <Text>{props.min_price} </Text>
                    <Text> {props.currency}</Text>
                </View>
            </View>
        </View>
        <View style={styles.price}>
            <Text>тип: </Text>
            <Text>{props.type}</Text>
        </View>
        <View>
            <Text>{props.description}</Text>
        </View>
        <View style={styles.note}>
            {props.services.map( e => <Text>{e}</Text>)}
        </View>
        <View style={styles.note}>
            <Text>Последняя запись: </Text>
            <Text>{props.last_review}</Text>
        </View>
        <View style={styles.price}>
            <Text>Количество записей: </Text>
            <Text>{props.reviews_amount}</Text>
        </View>
        <View style={styles.price}>
            <Text>Оценка: </Text>
            <Text>{props.rating}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C2C9CD',
        width: 300,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20
    },
    header: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    price: {
        paddingTop: 5,
        display: 'flex',
        flexDirection: 'row'
    },
    note: {
        paddingTop: 10,
    }
})