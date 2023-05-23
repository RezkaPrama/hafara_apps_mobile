import React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { BlackPinkSoap, BlackToner, BoosterDrink, DayCream, DnaSalmon, FacialFoam, LipSerum, Lotion, MetaDrink, NightCream, RosePearl, SerumVitC, Vicento } from '../../assets';
import { CardProduct, Header } from '../../components';

const Distributor = ({ navigation }) => {

    return (
        <View style={styles.page}>
            <Header title="Produk Glumory" />
            <ScrollView>
                <CardProduct
                    image={BoosterDrink}
                    name={"GLUMORY BEAUTY BOOSTER DRINK"}
                    detail={"KANDUNGANNYA MEMBANTU MENCERAHKAN KULIT DAN MENGENCANGKAN KULIT"}
                />
                <CardProduct
                    image={MetaDrink}
                    name={"GLUMORY METABOLIC BOOSTER DRINK"}
                    detail={"Glumory Fiber Booster Drink di Formulasikan khusus dengan Phsyllium Husk yang kaya akan serat alami yang dapat membantu metabolisme tubuh"}
                />
                <CardProduct
                    image={LipSerum}
                    name={"GLUMORY LIPS SERUM"}
                    detail={"Dengan Formula khusus mengandung Jojoba Seed Oil, Coconut Oil, Vitamin E & C yang Menutrisi bibir dengan kandungan vitamin dan mineral"}
                />
                <CardProduct
                    image={Vicento}
                    name={"Glumory Vicento Calming Mist Spray"}
                    detail={"Kandungan Vincetoxicum Atratum Extract membantu mengurangi peradangan dan anti inflamasi."}
                />
                <CardProduct
                    image={BlackToner}
                    name={"GLUMORY BRIGHT & GLOW BLACK TONER"}
                    detail={"GLUMORY Bright & Glow Series Paket Perawatan dan Kecantikan Wajah Plus Jelly Booster Mencerahkan dan Membuat Kulit Sehat"}
                />
                <CardProduct
                    image={DayCream}
                    name={"Glumory Bright & Glow Day Cream"}
                    detail={"GLUMORY Bright & Glow Series Paket Perawatan dan Kecantikan Wajah Plus Jelly Booster Mencerahkan dan Membuat Kulit Sehat."}
                />
                <CardProduct
                    image={NightCream}
                    name={"Glumory Bright & Glow Night Cream"}
                    detail={"GLUMORY Bright & Glow Series Paket Perawatan dan Kecantikan Wajah Plus Jelly Booster Mencerahkan dan Membuat Kulit Sehat."}
                />
                <CardProduct
                    image={FacialFoam}
                    name={"Glumory Bright & Glow Facial Foam"}
                    detail={"GLUMORY Bright & Glow Series Paket Perawatan dan Kecantikan Wajah Plus Jelly Booster Mencerahkan dan Membuat Kulit Sehat."}
                />
                <CardProduct
                    image={Lotion}
                    name={"Glumory Lotion Brightening"}
                    detail={"Glumory Skin & Bodycare Triple Extra Whitening Brightening & Moisturize"}
                />
                <CardProduct
                    image={DnaSalmon}
                    name={"Glumory Niacinamide DNA salmon Brightening Soap"}
                    detail={"Dengan kandungan utama DNA salmon sebagai asam Hialuronat murni dan molekul DNA yang biasa disebut young elixir. Meregenerasi sel dan menstimulasi kolagen pada kulit."}
                />
                <CardProduct
                    image={BlackPinkSoap}
                    name={"Glumory Pores Purifier Soap"}
                    detail={"Sisi Black, Terdiridari Charcoal, Virgin Oil, SunFlower oil, Ganggang Laut, Olive Oil, dan AHA mampu membersihkan minyak wajah mengatasi jerawat, komedo, dan mencerahkan kulit wajah mulai dari pemakaian pertama."}
                />
                <CardProduct
                    image={RosePearl}
                    name={"Glumory Rose Pearl Jelly Booster"}
                    detail={"Dilengkapi Rasa Canina Flower Extract yang memiliki kandungan Lemak Esensial Tinggi dan Dikenal baik untuk menjaga kelembapan kulit tetap seimbang."}
                />
                <CardProduct
                    image={SerumVitC}
                    name={"Glumory Serum Vitamin C"}
                    detail={"GLUMORY SERUM VITAMIN C pertama dan satu-satunya di indonesia dengan ingredient dan teknologi terbaik."}
                />
            </ScrollView>
        </View>
    )
}

export default Distributor;

const styles = StyleSheet.create({
    page: { flex: 1 }
})
