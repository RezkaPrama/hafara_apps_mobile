import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Gap, Header, SliderBanner, SliderCard, TextInput } from '../../components';
import { setLoading, testingApi } from '../../redux/action';
import { findDistAction } from '../../redux/action/findDist';
import { useForm } from '../../utils';

const Home = ({ navigation }) => {
  
  // const [id, setId] = useState('');
  const [form, setForm] = useForm({id: ''})
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(testingApi());
    dispatch(findDistAction(form.id, navigation));
  }

  return (
    <View>

      {/* <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>Glumory Third Party</Text>
          <Text style={styles.desc}>Cek Point Reward Anda</Text>
        </View>
        <Image source={ProfileDummy} style={styles.profile} />
      </View> */}

      <Header title="Glumory Third Party" subTitle="Cek Point Reward Anda" />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleHome}> Selamat Datang Di Check Point 3rd Party Glumory </Text>
        </View>
        <View>
          <SliderCard />
          {/* <SliderBanner /> */}
        </View>
        <View style={styles.searchContainer}>
          <Text style={styles.titleSearch}> Mau Cek Point Anda? </Text>
          <TextInput placeholder={"Masukan ID Third Party"}
            value={form.id}
            onChangeText={(value) => setForm('id', value)}
          // value={id}
          // onChangeText={(value) => setId('id', value)}
          />
          <Gap height={26} />
          <Button text="Cari " color='#f19097' textColor='white' onPress={onSubmit} />
          {/* <Button text="Cari" color='#f19097' textColor='white' onPress={() => navigation.replace('ResultSearch')} /> */}
        </View>
      </ScrollView>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  appName: { fontSize: 18, color: '#fff', paddingTop: 6 },
  desc: { fontSize: 16, color: '#020202', paddingTop: 6 },
  profileContainer: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 24, paddingTop: 12, paddingBottom: 24, backgroundColor: '#f19097' },
  profile: { width: 50, height: 50, borderRadius: 24 },
  titleHome: { fontSize: 14, paddingTop: 20, paddingBottom: 30 },
  titleSearch: { fontSize: 14, paddingTop: 5, paddingBottom: 5 },
  titleContainer: { alignItems: 'center' },
  searchContainer: { backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 26, marginTop: 24, borderRadius: 12 },
  bodyHome: { flexGrow: 1 }
})
