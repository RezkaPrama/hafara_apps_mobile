import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'
import { getData, useForm } from '../../utils';

const EditBank = ({navigation}) => {

    const [nama_bank, setNamaBank] = useState();
    const [no_rek, setNoRek] = useState();

    const [form, setForm] = useForm({
        'nama_bank': '',
        'no_rek': ''
    });

    useEffect(() => {}, [
        getData('dataUserSignin').then((res) => {
            setNamaBank(res.nama_bank);
            setNoRek(res.no_rek);
        }),
    ]);

    return (
        <View style={styles.page}>
        <Header title="Akun Bank" subTitle="Akun Bank anda" onBack={() => navigation.goBack()} />
        <ScrollView style={styles.container}>
            
            <TextInput 
            label="Nama Bank" 
            // value={nama_bank}
            editable={false}
            onChangeText={(value) => setForm('nama_bank', value)}
            >{nama_bank}</TextInput>
            <Gap height={16} />
            <TextInput 
            label="No Rekening" 
            // value={no_rek}
            editable={false}
            onChangeText={(value) => setForm('no_rek', value)}
            >{no_rek}</TextInput>
            <Gap height={64} />
        </ScrollView>
    </View>
    )
}

export default EditBank

const styles = StyleSheet.create({
    page: { flex: 1 },
    container: { flexGrow: 1, backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 26, marginTop: 24, flex: 1 },
    addFoto: { fontSize: 14, color: '#8D92A3', textAlign: 'center' },
    photoContainer: { width: 95, height: 95, borderRadius: 95, backgroundColor: '#F0F0F0', justifyContent: 'center', alignItems: 'center' },
    borderPhoto: { borderWidth: 1, borderColor: '#8D92A3', width: 115, height: 115, borderRadius: 115, borderStyle: 'dashed', justifyContent: 'center', alignItems: 'center' },
    photo: { alignItems: 'center', marginTop: 6, marginBottom: 16 },
    profile: { width: 90, height: 90, borderRadius: 24 },
})
