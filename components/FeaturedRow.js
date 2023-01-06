import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {ArrowRightIcon} from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'


const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">    
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB" />
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>
        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal:15,
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
            >
                {/*RestaurantCards... */}

                <RestaurantCards 
                    id={123}
                    imgUrl={"https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"}
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address={"123 Main st"}
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />

                <RestaurantCards 
                    id={123}
                    imgUrl={"https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"}
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address={"123 Main st"}
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                
                <RestaurantCards 
                    id={123}
                    imgUrl={"https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"}
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address={"123 Main st"}
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                
                <RestaurantCards 
                    id={123}
                    imgUrl={"https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"}
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address={"123 Main st"}
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                
            </ScrollView>
    </View>
  )
}

export default FeaturedRow