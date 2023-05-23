import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IlSuccessSignUp } from '../../assets';
import { Button, Gap } from '../../components';

const SuccessSignUp = ({navigation}) => {

    return (
        <View style={styles.page}>
            <IlSuccessSignUp />
            <Gap height={30} />
            <Text style={styles.title}> Yeay ! Berhasil </Text>
            <Gap height={6} />
            <Text style={styles.subTitle}> Anda telah terdaftar </Text>
            <Gap height={30} />
            <View style={styles.buttonContainer}>
                <Button text="Silahkan Login" textColor='white' onPress={() => navigation.replace('SignIn')} />
            </View>
        </View>
    )
}

export default SuccessSignUp;

const styles = StyleSheet.create({
    page: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 20, color: '#020202' },
    subTitle: { fontSize: 14, color: '#8D92A3' },
    buttonContainer: { width: '100%', paddingHorizontal: 80 }
})
