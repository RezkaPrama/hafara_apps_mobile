import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Image, ScrollView, Text, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Bank, Email, Forward, Handphone, Maps, Name, Reward, Store, UserDummy } from '../../assets';
import { Button, Gap, Header, TextInput } from '../../components';
import { editUser } from '../../redux/action/editUser';
import { getData, useForm } from '../../utils';
import userList from './userList.js';

const Profile = ({ navigation }) => {

    const [name, setName] = useState();
    const [alamat, setAlamat] = useState();
    const [noHp, setNohp] = useState();
    const [nama_toko, setNamaToko] = useState();
    const [nama_bank, setNamaBank] = useState();
    const [no_rek, setNoRek] = useState();
    const [email, setEmail] = useState();
    const [kode_referal, setKodeRef] = useState();
    const [id, setId] = useState();

    useEffect(() => { }, [
        getData('dataUserSignin').then((res) => {
            // console.log(res);
            setId(res.id);
            setName(res.name);
            setAlamat(res.alamat);
            setNohp(res.noHp);
            setNamaToko(res.nama_toko);
            setNamaBank(res.nama_bank);
            setNoRek(res.no_rek);
            if (res.email != null) {
                setEmail(res.email);
              }else {
                setEmail('-');
              };
            if (res.kode_referal != null) {
                setKodeRef(res.kode_referal);
              }else {
                setKodeRef('-');
              }
        }),
    ]);

    return (
        <View style={styles.page}>
            <Header title="Akun Saya" subTitle={name} onBack={() => navigation.goBack()} />
            <ScrollView>
                <View style={styles.photo}>
                    <View style={styles.borderPhoto}>
                        {/* <View style={styles.photoContainer}>
                            <Text style={styles.addFoto}>Tambah Foto</Text>
                        </View> */}
                        <Image source={UserDummy} style={styles.profile} />
                    </View>
                </View>

                <View style={{ paddingTop: 8 }}>

                    <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 8, borderBottomWidth: 0.5, borderColor: '#8D92A3' }}>
                        <Image
                            source={Name}
                            style={{ width: 30, height: 30, borderRadius: 8, overflow: 'hidden', marginRight: 12, marginLeft: -12, marginTop: 20 }}
                        />
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 14, color: '#020202', paddingVertical: 20 }}>Nama Lengkap</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 14, color: '#020202', paddingVertical: 20 }}>{name}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 8, borderBottomWidth: 0.5, borderColor: '#8D92A3' }}>
                        <Image
                            source={Handphone}
                            style={{ width: 30, height: 30, borderRadius: 8, overflow: 'hidden', marginRight: 12, marginLeft: -12, marginTop: 20 }}
                        />
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 14, color: '#020202', paddingVertical: 20 }}>Ho Handphone</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 14, color: '#020202', paddingVertical: 20 }}>{noHp}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 8, borderBottomWidth: 0.5, borderColor: '#8D92A3' }}>
                        <Image
                            source={Email}
                            style={{ width: 30, height: 30, borderRadius: 8, overflow: 'hidden', marginRight: 12, marginLeft: -12, marginTop: 20 }}
                        />
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 14, color: '#020202', paddingVertical: 20 }}>Email</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 14, color: '#020202', paddingVertical: 20 }}>{email}</Text>
                        </View>
                    </View>

                </View>

                <View style={{ paddingTop: 8 }}>

                    <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 8, borderBottomWidth: 0.5, borderColor: '#8D92A3' }}>
                        <Image
                            source={Store}
                            style={{ width: 30, height: 30, borderRadius: 8, overflow: 'hidden', marginRight: 12, marginLeft: -12, marginTop: 20 }}
                        />
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 14, color: '#020202', paddingVertical: 20 }}>Nama Toko</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 14, color: '#020202', paddingVertical: 20 }}>{nama_toko}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 8, borderBottomWidth: 0.5, borderColor: '#8D92A3' }}>
                        <Image
                            source={Maps}
                            style={{ width: 30, height: 30, borderRadius: 8, overflow: 'hidden', marginRight: 12, marginLeft: -12, marginTop: 20 }}
                        />
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 14, color: '#020202', paddingVertical: 20 }}>Alamat</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 14, color: '#020202', paddingVertical: 20 }}>{alamat}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 8, borderBottomWidth: 0.5, borderColor: '#8D92A3' }}>
                        <Image
                            source={Reward}
                            style={{ width: 30, height: 30, borderRadius: 8, overflow: 'hidden', marginRight: 12, marginLeft: -12, marginTop: 20 }}
                        />
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 14, color: '#020202', paddingVertical: 20 }}>Kode Referal</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 14, color: '#020202', paddingVertical: 20 }}>{kode_referal}</Text>
                        </View>
                    </View>

                </View>

                <View style={{ paddingTop: 8 }}>

                    <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 8, borderBottomWidth: 0.5, borderColor: '#8D92A3' }}>
                        <Image
                            source={Bank}
                            style={{ width: 30, height: 30, borderRadius: 8, overflow: 'hidden', marginRight: 12, marginLeft: -12, marginTop: 20 }}
                        />
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 14, color: '#020202', paddingVertical: 10 }}>Akun Bank</Text>
                            <Text style={{ fontSize: 12, color: '#8D92A3' }}>Atur Akun Bank dan No Rekening Anda</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('EditBank')}>
                                <View>
                                    <Image
                                        source={Forward}
                                        style={{ width: 30, height: 30, borderRadius: 8, overflow: 'hidden', marginRight: 12, marginLeft: -12, marginTop: 20 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={{ paddingTop: 20, paddingBottom: 20 }}>

                    <View style={styles.buttonContainer}>
                        <Button text="Edit Profil" textColor='white' onPress={() => navigation.navigate('EditProfile')} />
                    </View>

                </View>

            </ScrollView>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    page: { flex: 1 },
    // container: { flexGrow: 1, backgroundColor: 'black', paddingHorizontal: 24, paddingVertical: 26, marginTop: 24, flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30},
    addFoto: { fontSize: 14, color: '#8D92A3', textAlign: 'center' },
    photoContainer: { width: 95, height: 95, borderRadius: 95, backgroundColor: '#F0F0F0', justifyContent: 'center', alignItems: 'center' },
    borderPhoto: { borderWidth: 1, borderColor: '#8D92A3', width: 115, height: 115, borderRadius: 115, borderStyle: 'dashed', justifyContent: 'center', alignItems: 'center' },
    photo: { alignItems: 'center', marginTop: 6, marginBottom: 16 },
    profile: { width: 90, height: 90, borderRadius: 24 },
    buttonContainer: { width: '100%', paddingHorizontal: 80 }
})
