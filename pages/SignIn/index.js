import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'
import { useForm } from '../../utils'
import { useDispatch, useSelector } from 'react-redux';
import { login, testingApi } from '../../redux/action';

const SignIn = ({ navigation }) => {

    // const globalState = useSelector((state) => state.signinReducer);
    // console.log('global: ', globalState);
    
    const [form, setForm] = useForm({
        noHp: '',
    });

    const dispatch = useDispatch();

    const onSubmit = () => {
        // dispatch(testingApi());
        // dispatch(login(form, navigation));
        // dispatch({type: 'SET_NOHP', value: form});
        navigation.navigate('MainApp');
    };

    return (
        <View style={styles.page}>
            <Header title="Sign In" subTitle="Silahkan Sign in untuk Cekpoint Anda" />
            <View style={styles.container}>
                <TextInput
                    label="No Handphone"
                    placeholder="Cth: 628123..."
                    value={form.noHp}
                    keyboardType={'phone-pad'}
                    onChangeText={(value) => setForm('noHp', value.replace(/[^0-9]/g, ''))}
                />
                <Gap height={54} />
                <Button text="Kirim OTP" textColor='white' onPress={onSubmit} />
                <Gap height={12} />
                <Button text="Buat Akun" color='#8D92A3' textColor='white' onPress={() => navigation.navigate('SignUp')} />
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    page: { flex: 1 },
    container: { backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 26, marginTop: 24, flex: 1, borderRadius: 30 }
})