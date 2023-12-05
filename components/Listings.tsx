import { StyleSheet, Text, View, FlatList, ListRenderItem, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { defaultStyles } from '@/constants/Styles'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated'



interface Props {
    listings: any[]
    category: string
}


const Listings = ({ listings, category }: Props) => {
    const [loading, setLoading] = useState(false)
    const listRef = useRef<FlatList>(null)

    useEffect(() => {

        setLoading(true)


        setTimeout(() => {
            setLoading(false)
        }, 200);
    }, [category])

    const renderRow: ListRenderItem<any> = ({ item }) => (
        <Link href={`/listing/${item.id}`} asChild>
            <TouchableOpacity style={{}}>
                <Animated.View style={styles.listing} entering={FadeInRight} exiting={FadeOutLeft}>
                    <Image source={{ uri: item.medium_url }} style={styles.image} />
                    <TouchableOpacity style={{ position: 'absolute', right: 30, top: 30 }}>
                        <Ionicons name='heart-outline' size={24} color={'black'} />
                    </TouchableOpacity>
                </Animated.View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontFamily: 'mon-sb' }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                        <Ionicons name={'star'} size={16} />
                        <Text>{item.review_scores_rating / 20}</Text>

                    </View>

                    <Text style={{ fontFamily: 'mon-sb' }}>{item.room_type}</Text>

                    <View>
                        <Text style={{ fontFamily: 'mon-sb' }}>{item.price}</Text>
                        <Text style={{ fontFamily: 'mon-sb' }}>night</Text>
                    </View>

                </View>
            </TouchableOpacity>
        </Link>

    )


    return (
        <View style={defaultStyles.container}>
            <FlatList

                renderItem={renderRow}
                ref={listRef}
                data={loading ? [] : listings}
            />
        </View>
    )
}

export default Listings

const styles = StyleSheet.create({
    listing: {
        padding: 16,
        gap: 10,
        marginVertical: 16
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,

    }
})