import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const NewsCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.headline}>{item.title}</Text>
        <Text style={styles.summary}>{item.description}</Text>
        <View style={styles.meta}>
          <Text style={styles.source}>{item.author}</Text>
          <Text style={styles.date}>{item.published ? new Date(item.published).toLocaleDateString() : ''}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
    marginBottom: 10,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  source: {
    fontSize: 14,
    color: 'grey',
  },
  date: {
    fontSize: 14,
    color: 'grey',
  },
});

export default NewsCard;
