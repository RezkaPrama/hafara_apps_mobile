import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Gap, Header, TextInput } from '../../components'
import { signin } from '../../redux/action'
import { useForm } from '../../utils'

const SendOtp = ({navigation}) => {
    const signinReducer = useSelector((state) => state.signinReducer);

    const [formSignin, setForm] = useForm({
        otp: '',
        password: '1a2a3a'
    });

    const dispatch = useDispatch();

    const onSubmit = () => {
        const data = {
            ...formSignin,
            ...signinReducer
        };
        // console.log('Data: ', data);

        dispatch(signin(data, navigation));

    }

    return (
        <View style={styles.page}>
        <Header title="Sign In" subTitle="Silahkan Sign in untuk Cekpoint Anda" />
        <View style={styles.container}>
            <TextInput
                label="OTP"
                placeholder="Inputkan OTP yang telah dikirim ke WA anda"
                value={formSignin.otp}
                keyboardType={'phone-pad'}
                onChangeText={(value) => setForm('otp', value.replace(/[^0-9]/g, ''))}
            />
            <Gap height={54} />
            <Button text="Sign In" textColor='white' onPress={onSubmit} />
        </View>
    </View>
    )
}

export default SendOtp

const styles = StyleSheet.create({
    page: { flex: 1 },
    container: { backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 26, marginTop: 24, flex: 1, borderRadius: 30 }
})
