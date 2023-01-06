import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
      <ScrollView 
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {/*CategoryCard*/}
        
        <CategoryCard 
          imageUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
          title=" Testing 1"
        />
        <CategoryCard 
          imageUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
          title=" Testing 2" 
        />
        <CategoryCard 
          imageUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
          title=" Testing 3" 
        />
        <CategoryCard 
          imageUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
          title=" Testing 4" 
        />
        <CategoryCard 
          imageUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
          title=" Testing 5" 
        />
        <CategoryCard 
          imageUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
          title=" Testing 6" 
        />
        <CategoryCard 
          imageUrl='https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'
          title=" Testing 7" 
        />
      </ScrollView>
  );
};

export default Categories;