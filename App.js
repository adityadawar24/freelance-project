import React, { useEffect, useState } from "react";
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
// import SearchBar from './app/components/SearchBar';
import Screen from "./app/components/Screen";
import NewsCard from './app/components/NewsCard';
import HorizontalMenu from "./app/components/HorizontalMenu";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./app/components/BottomTab";
import axios from "axios";



export default function App() {
  
  const [news, setNews ]= useState([]);

  useEffect(()=> {
    const fetchNews =async ()=>{
      try {
        const response =await axios.get('http://10.81.73.192:3001/api/news');
        setNews(response.data.news);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  },[]);


  const renderHeader = () => (
    <View style={styles.newsCard}>
      <Image source={{ uri: news[0]?.image }} style={styles.newsImage} />
      <Text style={styles.newsHeadline}>{news[0]?.title}</Text>
    </View>
  );

  return (
    <>
    <NavigationContainer>
      <BottomTab renderHeader={renderHeader} data={news} />
    </NavigationContainer>
    </>
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
