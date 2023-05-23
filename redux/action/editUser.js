import axios from "axios";
import { showMessage, storeData } from "../../utils";
import { setLoading } from "./global";

const API_HOST = {
    url: 'https://api.cekpoint.glumory.id/api'
}

export const editUser = (id, navigation) => (dispatch) => {
    dispatch(setLoading(true));
    try {
        axios.get(`${API_HOST.url}/dist/${id}`)
            .then(function (res) {
                const dist = res.data.data;
                console.log(res);

                // if (dist === null || dist === undefined) {
                //     showMessage('Id Distributor belum Di isi atau tidak terdaftar', 'warning');
                // } else {
                //     showMessage('Data User Berhasil di update', 'success');

                //     // navigation.navigate('ResultSearch');
                // }
                dispatch(setLoading(false));
            })
            .catch(function (err) {
                dispatch(setLoading(false));
                showMessage('Id anda tidak ada', 'danger');
            });
    } catch (err) {
        showMessage('Gagal! Kesalahan Server', 'danger');
    }
}