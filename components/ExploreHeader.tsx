import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { Link } from 'expo-router'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import * as Haptics from 'expo-haptics'



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



interface Props {
    onCategoryChanged: (category: string) => void
}

const ExploreHeader = ({ onCategoryChanged }: Props) => {

    const scrollRef = useRef<ScrollView>(null)

    const itemsRef = useRef<Array<TouchableOpacity | null>>([])
    const [activeIndex, setActiveIndex] = useState(0)

    const selectCategory = (index: number) => {
        const selected = itemsRef.current[index]
        setActiveIndex(index)


        selected?.measure((x) => {
            scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true })

        })



        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        onCategoryChanged(categories[index].name)
    }


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

                    ref={scrollRef}

                >
                    {categories.map((item, index) => (
                        <TouchableOpacity
                            key={index} ref={(el) => itemsRef.current[index] = el}
                            style={activeIndex === index ? styles.categoriesBtnActive : styles.categoriesBtn}
                            onPress={() => (selectCategory(index))}

                        >
                            <MaterialIcons
                                name={item.icon as any}
                                size={24}
                                color={activeIndex === index ? 'black' : Colors.grey}

                            />
                            <Text style={activeIndex === index ? styles.categoryTextActive : styles.categoryText}>{
                                item.name}
                            </Text>
                        </TouchableOpacity>


                    ))}
                </ScrollView>
            </View>
        </SafeAreaView >
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