import React from "react";
import { StatusBar, FlatList, View, Text, Image, StyleSheet } from 'react-native';
import SearchBar from './app/components/SearchBar';
import Screen from "./app/components/Screen";
import NewsCard from './app/components/NewsCard';
import HorizontalMenu from "./app/components/HorizontalMenu";

const DATA = [
  {
    id: '1',
    headline: 'Apple Unveils New iPhone 14 Pro',
    summary: 'Apple has officially announced the launch of the iPhone 14 Pro with a new A16 chip and improved camera features.',
    image: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo_Full-Bleed-Image.jpg.large.jpg',
    source: 'TechCrunch',
    date: 'April 4, 2024'
  },
  {
    id: '2',
    headline: 'Microsoft Acquires AI Startup',
    summary: 'Microsoft has acquired an AI startup specializing in natural language processing to enhance its cloud services.',
    image: 'https://www.siliconindia.com/news/newsimages/special/3dQWZI7Y.jpeg',
    source: 'The Verge',
    date: 'April 3, 2024'
  },
  {
    id: '3',
    headline: 'Google Announces New AI Research Center',
    summary: 'Google has announced the opening of a new AI research center to further develop artificial intelligence technologies.',
    image: 'https://contentstatic.techgig.com/photo/77945868/Google-announces-new-AI-research-institute-commits-5-mn-to-explore-human-AI-interactions.jpg',
    source: 'CNN',
    date: 'April 2, 2024'
  },
  {
    id: '4',
    headline: 'Amazon Launches New Healthcare Service',
    summary: 'Amazon has launched a new healthcare service aimed at providing affordable and accessible healthcare solutions.',
    image: 'https://techcrunch.com/wp-content/uploads/2019/09/amazon-care.jpg',
    source: 'Reuters',
    date: 'April 1, 2024'
  },
  {
    id: '5',
    headline: 'Facebook Introduces New Privacy Features',
    summary: 'Facebook has introduced new privacy features to give users more control over their data and personal information.',
    image: 'https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1616792461328.jpg-org',
    source: 'BBC',
    date: 'March 31, 2024'
  }
];

export default function App() {
  const renderHeader = () => (
    <View style={styles.newsCard}>
      <Image source={{ uri: DATA[0].image }} style={styles.newsImage} />
      <Text style={styles.newsHeadline}>{DATA[0].headline}</Text>
    </View>
  );

  return (
    <Screen>
      <SearchBar />
      {renderHeader()}
      <HorizontalMenu />
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <NewsCard item={item} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  newsCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },
  newsImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  newsHeadline: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 15,
  },
  categoryList: {
    marginTop: 10,
    marginBottom: 10,
  },
});
