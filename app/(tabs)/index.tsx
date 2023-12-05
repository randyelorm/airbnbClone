import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState, useMemo } from 'react'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'
import listingData from '@/assets/data/airbnb-listings.json'

const Page = () => {

    const [category, setCategory] = useState('Tiny Homes')

    const items = useMemo(() => listingData as any, [])

    const onCategoryChanged = (category: string) => {

        setCategory(category)
    }




    return (

        <View style={{ flex: 1, marginTop: 130 }}>
            <Stack.Screen
                options={{
                    header: () => <ExploreHeader onCategoryChanged={onCategoryChanged} />

                }}

            />
            <Listings listings={items} category={category} />
        </View>
    )
}

export default Page

const styles = StyleSheet.create({})