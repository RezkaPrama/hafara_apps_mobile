import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { HomeTabSection, SliderCard } from '../../components';
import HomeProfile from '../../components/molecules/HomeProfile';

const ResultSearch = () => {

    return (
        <View style={styles.page}>
            <View>
                <HomeProfile />
            </View>

            <View>
                <ScrollView style={styles.bodyHome} showsVerticalScrollIndicator={true}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleHome}> Kumpulkan Point Mu dan Tukarkan Dengan Hadiah Impian Mu </Text>
                    </View>
                    <View>
                        <SliderCard />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.tabContainer}>
                <HomeTabSection />
            </View>
        </View>

    )
}

export default ResultSearch;

const styles = StyleSheet.create({
    tabContainer: { flex: 1, paddingTop: 20},
    page: { flex: 1 },
    titleHome: { fontSize: 12, fontWeight: 700, paddingTop: 20, paddingBottom: 30 },
    titleContainer: { alignItems: 'center' },
    bodyHome: { flexGrow: 1 },
})
