import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import { useDispatch } from 'react-redux';
import { UserDummy } from '../../assets';
import { Button, Gap, Header, TextInput } from '../../components';
import { getData, showMessage } from '../../utils';
import { editUser } from '../../redux/action/editUser';
import axios from 'axios';

export default class EditProfile extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            alamat: '',
            noHp: '',
            email: '',
            nama_toko: '',
            nama_bank: '',
            no_rek: '',
        };
    }

    componentDidMount() {
        getData('dataUserSignin').then((res) => {
            console.log(res);

            this.setState({
                id: res.id,
                name: res.name,
                alamat: res.alamat,
                noHp: res.noHp,
                email: res.email,
                nama_toko: res.nama_toko,
                nama_bank: res.nama_bank,
                no_rek: res.no_rek,
            });

        });
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    // dispatch = useDispatch();

    onSubmit() {
        // console.log(this.state);
        
        try {
            axios.post(`https://api.cekpoint.glumory.id/api/editUser/${this.state.id}`, this.state)
                .then(function (res) {
                    console.log(res.data);

                    if (res.data.success === true) {
                        showMessage(res.data.messagge, 'success');

                        // this.props.navigation.navigate('SuccessSignUp');
                        // navigation.navigate('SuccessSignUp');
                        
                    } else {
                        showMessage('Data Profil Gagal di update, Silahkan ulangi kembali', 'warning');
                    }
                    // dispatch(setLoading(false));
                })
                .catch(function (err) {
                    // console.log(err);
                    // dispatch(setLoading(false));
                    // showMessage('Silahkan ulangi kembali', 'danger');
                });
        } catch (err) {
            // console.log(err);
            showMessage('Gagal! Kesalahan Server', 'danger');
        }
    }

    render() {
        return (
            <View style={styles.page}>
                <Header title="Profil" subTitle="Silahkan Edit Profil anda" onBack={() => this.props.navigation.goBack()} />
                <ScrollView style={styles.container}>
                    <View style={styles.photo}>
                        <View style={styles.borderPhoto}>
                            {/* <View style={styles.photoContainer}>
                            <Text style={styles.addFoto}>Tambah Foto</Text>
                        </View> */}
                            <Image source={UserDummy} style={styles.profile} />
                        </View>
                    </View>

                    <TextInput
                        label="Nama Lengkap"
                        placeholder={'Name'}
                        value={this.state.name}
                        onChangeText={(val) => this.inputValueUpdate(val, 'name')}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="Alamat"
                        placeholder={'alamat'}
                        value={this.state.alamat}
                        onChangeText={(val) => this.inputValueUpdate(val, 'alamat')}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="No Handphone"
                        placeholder={'No Handphone'}
                        value={this.state.noHp}
                        onChangeText={(val) => this.inputValueUpdate(val, 'noHp')}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="Email"
                        placeholder={'Email'}
                        value={this.state.email}
                        onChangeText={(val) => this.inputValueUpdate(val, 'email')}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="Nama Toko"
                        placeholder={'Nama Toko'}
                        value={this.state.nama_toko}
                        onChangeText={(val) => this.inputValueUpdate(val, 'nama_toko')}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="Nama Bank"
                        placeholder={'Nama Bank'}
                        value={this.state.nama_bank}
                        onChangeText={(val) => this.inputValueUpdate(val, 'nama_bank')}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="No Rekening"
                        placeholder={'No Rekening'}
                        value={this.state.no_rek.toString()}
                        onChangeText={(val) => this.inputValueUpdate(val, 'no_rek')}
                    />

                    <Gap height={34} />
                    <Button text="Edit Profil" textColor='white' onPress={() => this.onSubmit()} />
                    <Gap height={64} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: { flex: 1 },
    container: { flexGrow: 1, backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 26, marginTop: 24, flex: 1 },
    addFoto: { fontSize: 14, color: '#8D92A3', textAlign: 'center' },
    photoContainer: { width: 95, height: 95, borderRadius: 95, backgroundColor: '#F0F0F0', justifyContent: 'center', alignItems: 'center' },
    borderPhoto: { borderWidth: 1, borderColor: '#8D92A3', width: 115, height: 115, borderRadius: 115, borderStyle: 'dashed', justifyContent: 'center', alignItems: 'center' },
    photo: { alignItems: 'center', marginTop: 6, marginBottom: 16 },
    profile: { width: 90, height: 90, borderRadius: 24 },
})
