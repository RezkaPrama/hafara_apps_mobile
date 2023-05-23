import axios from "axios";
import { showMessage, storeData } from "../../utils";
import { setLoading } from "./global";

const API_HOST = {
    url: 'https://api.cekpoint.glumory.id/api'
}

export const findDistAction = (idDist, navigation) => (dispatch) => {
    dispatch(setLoading(true));
    try {
        axios.get(`${API_HOST.url}/dist/${idDist}`)
            // axios.get('https://api.cekpoint.glumory.id/api/dist/888009000')
            // axios.get('https://api.publicapis.org/entries')
            .then(function (res) {
                const dist = res.data.data;

                if (dist === null || dist === undefined) {
                    showMessage('Id Distributor belum Di isi atau tidak terdaftar', 'warning');
                } else {
                    showMessage('Pencarian Berhasil', 'success');

                    // store data distributor
                    storeData('dataDistributor', dist);
                    navigation.navigate('ResultSearch');
                    // navigation.reset({index: 0, routes: [{name: 'ResultSearch'}]});
                }
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