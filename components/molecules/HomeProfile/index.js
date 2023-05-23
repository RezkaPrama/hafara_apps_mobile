import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ProfileDummy, UserDummy } from '../../../assets';

const HomeProfile = ({ navigation }) => {

    return (
        <View style={styles.profileContainer}>
            <View>
                {/* <View >
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                        <View style={styles.back}>
                            <IcBack />
                        </View>
                    </TouchableOpacity>
                </View > */}

                <Text style={styles.appName}>Glumory Third Party</Text>
                <Text style={styles.desc}>Cek Point Reward Anda</Text>
            </View>
            
            {/* <Header
                title="Glumory Third Party"
                subTitle="Cek Point Reward Anda"
                onBack={() => navigation.goBack()}
            /> */}

            <Image source={UserDummy} style={styles.profile} />
        </View>
    )
}

export default HomeProfile;

const styles = StyleSheet.create({
    profile: { width: 50, height: 50, borderRadius: 24, paddingTop: 18},
    profileContainer: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 24, paddingTop: 42, paddingBottom: 24, backgroundColor: '#f19097' },
    appName: { fontSize: 18, color: '#fff', paddingTop: 6 },
    desc: { fontSize: 16, color: '#020202', paddingTop: 6 },
})
