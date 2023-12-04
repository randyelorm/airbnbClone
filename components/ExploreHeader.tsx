import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { Link } from 'expo-router'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';



const categories = [
    {
        name: 'Tiny homes',
        icon: 'home',
    },
    {
        name: 'Cabins',
        icon: 'house-siding',
    },
    {
        name: 'Trending',
        icon: 'local-fire-department',
    },
    {
        name: 'Play',
        icon: 'videogame-asset',
    },
    {
        name: 'City',
        icon: 'apartment',
    },
    {
        name: 'Beachfront',
        icon: 'beach-access',
    },
    {
        name: 'Countryside',
        icon: 'nature-people',
    },
];

const ExploreHeader = () => {

    const itemsRef = useRef<Array<TouchableOpacity | null>>([])
    const [activeIndex, setActiveIndex] = useState(0)



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.actionRow}>
                    <Link href={'/(modals)/booking'} asChild>
                        <TouchableOpacity style={styles.SearchBtn}>
                            <Ionicons name='search' size={24} />
                            <View>
                                <Text style={{ fontFamily: 'mon-sb' }}>Where to?</Text>
                                <Text style={{ fontFamily: 'mon', color: Colors.grey }}>Anywhere Any · week</Text>
                            </View>
                        </TouchableOpacity>

                    </Link>
                    <TouchableOpacity style={styles.filterBtn}>
                        <Ionicons name='options-outline' size={24} />
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        alignItems: 'center',
                        gap: 20,
                        paddingHorizontal: 16
                    }}

                >
                    {categories.map((item, index) => (
                        <TouchableOpacity key={index} ref={(el) => itemsRef.current[index] = el}>
                            <MaterialIcons name={item.icon as any} size={24} />
                            <Text>{item.name}</Text>
                        </TouchableOpacity>


                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default ExploreHeader

const styles = StyleSheet.create({
    container: {

        backgroundColor: 'white',
        height: 130

    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 16,
        paddingVertical: 10
    },
    filterBtn: {
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 24,
    },

    SearchBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderColor: '#c2c2c2',
        borderWidth: StyleSheet.hairlineWidth,
        width: 280,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 8,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        padding: 10,
        borderRadius: 30,
        backgroundColor: 'white'


    },
    categoryText: {
        fontSize: 14,
        fontFamily: 'mon-sb',
        color: Colors.grey
    },
    categoryTextActive: {
        fontSize: 14,
        fontFamily: 'mon-sb',
        color: '#000'
    },
    categoriesBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
    },

    categoriesBtnActive: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        paddingBottom: 8
    }
})