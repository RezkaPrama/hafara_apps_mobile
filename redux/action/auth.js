import axios from "axios";
import { showMessage, storeData } from "../../utils";
import { setLoading } from "./global";

const API_HOST = {
    url: 'https://api.cekpoint.glumory.id/api'
}

export const findPointReward = async (point) => (dispatch) => {
    try {
        axios.get(`${API_HOST.url}/point-reward/${point}`)
            .then(function (res) {
                dispatch(setLoading(false));
            })
            .catch(function (err) {
                dispatch(setLoading(false));
                showMessage('Gagal! Point Tidak ada', 'danger');
            });
    } catch (error) {
        showMessage('Gagal! Kesalahan Server', 'danger');
    }
}

export const testingApi = () => (dispatch) => {
    dispatch(setLoading(true));
    try {
        axios.get('https://catfact.ninja/fact')
            .then(function (res) {
                // console.log(res)
            })
            .catch(function (err) {
                // console.log(err)
            });
    } catch (err) {
        // console.log(err)
    }
}

export const register = (form, navigation) => (dispatch) => {
    dispatch(setLoading(true));
    try {
        axios.post(`${API_HOST.url}/register`, form)
            .then(function (res) {
                const dist = res.data;
                // console.log(res);

                if (dist.success === true) {
                    // showMessage('Registrasi Berhasil', 'success');

                    // store data distributor
                    storeData('tokenUser', dist.token);
                    storeData('dataUser', dist.user);
                    navigation.navigate('SuccessSignUp');
                } else {
                    showMessage('No anda Sudah Terdaftar', 'warning');
                }
                dispatch(setLoading(false));
            })
            .catch(function (err) {
                console.log(err);
                dispatch(setLoading(false));
                showMessage('No anda Sudah Terdaftar', 'danger');
            });
    } catch (err) {
        showMessage('Gagal! Kesalahan Server', 'danger');
    }
}

export const login = (form, navigation) => (dispatch) => {
    dispatch(setLoading(true));

    try {
        axios.get('https://catfact.ninja/fact')
            .then(function (res) {
                try {
                    axios.post(`${API_HOST.url}/login`, form)
                        .then(function (res) {
                            const dist = res.data;
                            console.log(dist);

                            if (dist.success === true) {
                                showMessage(dist.message, 'success');

                                navigation.navigate('SendOtp');
                            } else {
                                showMessage('No anda Belum Terdaftar', 'warning');
                            }
                            dispatch(setLoading(false));
                        })
                        .catch(function (err) {
                            console.log(err);
                            dispatch(setLoading(false));
                            showMessage('No anda Belum Terdaftar', 'danger');
                        });
                } catch (err) {
                    showMessage('Gagal! Kesalahan Server', 'danger');
                }
            })
            .catch(function (err) {

            });
    } catch (err) {

    }
}

export const signin = (data, navigation) => (dispatch) => {
    dispatch(setLoading(true));

    try {
        axios.post(`${API_HOST.url}/signin`, data)
            .then(function (res) {
                const dist = res.data;
                // console.log(dist);

                if (dist.success === true) {
                    showMessage(dist.message, 'success');
                    // store data distributor
                    storeData('tokenUserSignin', dist.token);
                    storeData('dataUserSignin', dist.user);
                    navigation.navigate('MainApp');
                } else {
                    showMessage('Nomor Hp atau OTP anda salah', 'warning');
                }
                dispatch(setLoading(false));
            })
            .catch(function (err) {
                // console.log(err);
                dispatch(setLoading(false));
                showMessage('Nomor Hp atau OTP anda salah', 'danger');
            });
    } catch (err) {
        showMessage('Gagal! Kesalahan Server', 'danger');
    }
}