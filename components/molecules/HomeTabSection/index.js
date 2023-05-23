import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { IdCard, Maps, Name, Reward, Store } from '../../../assets';
import { getData } from '../../../utils';
import { Gap } from '../../atoms';
import ItemDistList from './ItemDistList';

// const dispatch = useDispatch();

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#33272a' }}
        style={{ backgroundColor: '#f19097', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
        tabStyle={{ width: 'auto' }}
        renderLabel={({ route, focused, color }) => (
            <Text style={{ color: focused ? '#33272a' : '#594a4e' }}>
                {route.title}
            </Text>
        )}
    />
);

const DataDetail = () => {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [toko1, setToko1] = useState();
    const [toko2, setToko2] = useState();
    const [alamat, setAlamat] = useState();
    // const [point, setPoint] = useState();

    useEffect(() => { }, [
        getData('dataDistributor').then((res) => {
            setId(res.IDDist);
            setName(res.NamaDist);
            setToko1(res.TokoA);
            setToko2(res.TokoB);
            setAlamat(res.Alamat);
            // setPoint(res.Poin);
        }),
    ]);

    return (
        <ScrollView style={{ flexGrow: 1 }}>
            <View style={{ paddingTop: 8 }}>
                <ItemDistList image={IdCard} title={'ID Dist/Partner'} value={id} />
                <ItemDistList image={Name} title={'Nama'} value={name} />
                <ItemDistList image={Store} title={'Toko 1'} value={toko1} />
                <ItemDistList image={Store} title={'Toko 2'} value={toko2} />
                <ItemDistList image={Maps} title={'Alamat'} value={alamat} />
                {/* <ItemDistList image={Point} title={'Point'} value={point} /> */}
                {/* <ItemDistList image={Reward} title={'Deposit Sisa'} /> */}
            </View>
        </ScrollView>

    )
};

const SecondRoute = () => {
    const [name, setName] = useState();
    const [point, setPoint] = useState();
    const [verified, setVerified] = useState();
    const [point_start, setPointStart] = useState();
    // const [imgReward, setImgReward] = useState(Greet);
    const [nameReward, setNameReward] = useState();

    useEffect(() => { 
        findPointReward({point});
    }, [
        getData('dataDistributor').then((res) => {
            setName(res.NamaDist);
            setPoint(res.Poin);
            setVerified(res.Verified);
        }),
    ]);

    const findPointReward = ({point}) => {
        try {
            axios.get(`https://api.cekpoint.glumory.id/api/point-reward/${point}`)
                // await axios.get(`https://www.reactnative.dev/movies.json`)
                .then(function (res) {
                    const resPoint = res.data.data;
                    // console.log(point);
                    setPointStart(resPoint[0].point_start);
                    // setImgReward({uri: resPoint[0].img});
                    setNameReward(resPoint[0].rewards);
                })
                .catch(function (err) {
                    // showMessage('Gagal! Kesalahan Server ', 'danger');
                });
        } catch (error) {
            // showMessage('Gagal! Kesalahan Server ', 'danger');
        }
    }

    return (
        <ScrollView>
            <View style={styles.page}>
                <Gap height={30} />
                <Text style={styles.title}> Hallo, {name} </Text>
                <Gap height={6} />
                <Text>Status ID Anda {verified}</Text>
                <Gap height={30} />
                <Text style={styles.title}> Poin Anda </Text>
                <Gap height={6} />
                <Text style={styles.point}> {point} </Text>
                <Gap height={30} />
                <Text style={{ alignItems: 'center', fontSize: 20, color: '#020202' }}> Kumpulkan Point Mu dan Tukarkan </Text>
                <Text style={{ alignItems: 'center', fontSize: 20, color: '#020202' }}>  Dengan Hadiah Impian Mu </Text>
                <Gap height={20} />
                <Text style={styles.title}> Point Anda kurang </Text>
                <Gap height={6} />
                <Text style={styles.point}> {point_start - point} </Text>
                <Gap height={6} />
                <Text style={styles.title}> Untuk Mendapatkan </Text>
                <Gap height={6} />
                <Text style={styles.point}> {nameReward} </Text>
                {/* <Image
                    source={imgReward}
                    style={{ width: 150, height: 150, borderRadius: 8, overflow: 'hidden', marginRight: 12 }}
                /> */}
            </View>
        </ScrollView>
    )
};

const ThirdRoute = () => {
    const [name, setName] = useState();
    const [UserRole, setUserRole] = useState();
    const [toko1, setToko1] = useState();
    const [wa, setWa] = useState();
    const [id, setId] = useState();
    const [jumlahTrf, setJumlahTrf] = useState();
    const [jumlahOngkir, setJumlahOngkir] = useState();
    const [target, setTarget] = useState();
    const [point, setPoint] = useState();

    useEffect(() => {
        findHistoryPurchase({id});
        findUserRole({UserRole});
    }, [
        getData('dataDistributor').then((res) => {
            setName(res.NamaDist);
            setUserRole(res.UserRole);
            setToko1(res.TokoA);
            setWa(res.WA);
            setPoint(res.Poin);
            setId(res.IDDist);
        }),
    ]);

    const findHistoryPurchase = ({id}) => {
        try {
            axios.get(`https://api.cekpoint.glumory.id/api/history/${id}`)
            // axios.get(`https://api.cekpoint.glumory.id/api/history/888002915`)
                // axios.get(`https://www.reactnative.dev/movies.json`)
                .then(function (res) {
                    const resHist = res.data.data;
                    // console.log(resHist[0].jumlahOngkir);
                    setJumlahOngkir(resHist[0].jumlahOngkir);
                    setJumlahTrf(resHist[0].jumlahTrf);
                })
                .catch(function (err) {
                    console.log(err)
                });
        } catch (error) {
            console.log(error)
        }
    }

    const findUserRole = ({UserRole}) => {
        try {
            axios.get(`https://api.cekpoint.glumory.id/api/dist-role/${UserRole}`)
                .then(function (res) {
                    const resTarget = res.data.data;
                    // console.log(resTarget[0].target);
                    setTarget(resTarget[0].target);
                })
                .catch(function (err) {
                    console.log(err)
                });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={{ paddingTop: 8 }}>
            <View>
                <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 8, borderBottomWidth: 1, borderStyle: 'dashed' }}>
                    <Image
                        source={Reward}
                        style={{ width: 50, height: 50, borderRadius: 8, overflow: 'hidden', marginRight: 12 }}
                    />
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Text style={{ paddingTop: 5, fontSize: 16, color: '#020202' }}>{name}</Text>
                        <Text style={{ fontSize: 16, color: '#020202' }}>{wa}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={{ paddingTop: 5, fontSize: 13, color: '#8D92A3' }}>{UserRole}</Text>
                        <Text style={{ fontSize: 16, color: '#020202' }}>{toko1}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 8, borderBottomWidth: 1, borderStyle: 'dashed' }}>

                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Text style={{ paddingTop: 5, fontSize: 16, color: '#020202' }}>Rp. {jumlahTrf - jumlahOngkir}</Text>
                        <Text style={{ fontSize: 13, color: '#8D92A3' }}>Riwayat Transaksi Bulan ini</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        {/* <Text style={{ paddingTop: 5, fontSize: 16, color: '#020202' }}>{(jumlahTrf - jumlahOngkir) / target}%</Text> */}
                        <Text style={{ paddingTop: 5, fontSize: 16, color: '#020202' }}>{((jumlahTrf - jumlahOngkir) / target) * 100}%</Text>
                        <Text style={{ fontSize: 13, color: '#8D92A3' }}>Target Pencapaian </Text>
                    </View>
                </View>
            </View>
        </View>
    )
};

const renderScene = SceneMap({
    1: DataDetail,
    2: SecondRoute,
    3: ThirdRoute,
});

const HomeTabSection = () => {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'Data Detail' },
        { key: '2', title: 'Point' },
        { key: '3', title: 'Target' },
    ]);

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    )

}

export default HomeTabSection

const styles = StyleSheet.create({
    page: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 20, color: '#020202' },
    subTitle: { fontSize: 14, color: '#8D92A3' },
    point: { fontSize: 32, color: '#2cb67d' },
})
