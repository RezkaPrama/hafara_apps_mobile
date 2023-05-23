import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { Button, Gap, Header, TextInput } from '../../components'
import { register, testingApi } from '../../redux/action'
import { useForm } from '../../utils'

const SignUp = ({navigation}) => {
    const [form, setForm] = useForm({
        noHp: '',
        name: '',
        kode_referal: '',
        password: '1a2a3a',
        password_confirmation: '1a2a3a',
    })
    const dispatch = useDispatch();

    const onSubmit = () => {
        // console.log('Form : ', form);
        dispatch(testingApi());
        dispatch(register(form, navigation));
    }

    return (
        <View style={styles.page}>
            <Header title="Sign Up" subTitle="Daftar jika Belum mempunyai akun" onBack={() => navigation.goBack()} />
            <ScrollView style={styles.container}>
                <TextInput 
                label="No Handphone" 
                placeholder="Cth: 628123..."
                value={form.noHp}
                keyboardType={'phone-pad'}
                onChangeText={(value) => setForm('noHp', value.replace(/[^0-9]/g, ''))}
                />
                <Gap height={16} />
                {/* <TextInput label="Nama Lengkap" placeholder="Input Nama Lengkap Anda" />
                <Gap height={16} /> */}
                <TextInput 
                label="Nama" 
                placeholder="Input Nama Lengkap Anda" 
                value={form.name}
                onChangeText={(value) => setForm('name', value)}
                />
                <Gap height={16} />
                <TextInput 
                label="Kode Referal" 
                placeholder="Input Kode Referal" 
                value={form.kode_referal}
                onChangeText={(value) => setForm('kode_referal', value)}
                />
                <Gap height={34} />
                {/* <Button text="Daftar" textColor='white' onPress={() => navigation.replace('SuccessSignUp')} /> */}
                <Button text="Daftar" textColor='white' onPress={onSubmit} />
            </ScrollView>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    page: { flex: 1},
    container: { backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 26, marginTop: 24, flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30 }
})
