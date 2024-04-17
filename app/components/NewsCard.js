import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';

const NewsCard = ({ item }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Text style={styles.headline}>{item.headline}</Text>
                <Text style={styles.summary}>{item.summary}</Text>
                <Text style={styles.source}>{item.source} | {item.date}</Text>
            </View>
         <Image source={{ uri: item.image }} style={styles.cardImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 10,
        padding: 10
    },
    cardImage: {
        width: 50,
        height: 50,
        borderRadius: 8
    },
    cardContent: {
        flex: 1,
        marginLeft: 10
    },
    headline: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5
    },
    summary: {
        fontSize: 10,
        marginBottom: 5
    },
    source: {
        fontSize: 8,
        color: 'grey'
    },
});

export default NewsCard;
