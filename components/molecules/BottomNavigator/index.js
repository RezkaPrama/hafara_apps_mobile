import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { IcDistributorOff, IcDistributorOn, IcHomeOff, IcHomeOn, IcProfileOff, IcProfileOn, } from '../../../assets';

const Icon = ({label, focus}) => {
    switch (label) {
        case 'Home':
            return focus ? <IcHomeOn /> : <IcHomeOff />;
        case 'Distributor':
            return focus ? <IcDistributorOn /> : <IcDistributorOff />;
        case 'Profile':
            return focus ? <IcProfileOn /> : <IcProfileOff />;
        default:
            return<IcDistributorOn />;
    }
};

const BottomNavigator = ({ state, descriptors, navigation }) => {

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                    >
                        <Icon label={label} focus={isFocused}/>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default BottomNavigator

const styles = StyleSheet.create({
    container: { flexDirection: 'row', backgroundColor: 'white', paddingLeft: 75, justifyContent: 'space-between', paddingTop: 15, paddingBottom: 13, paddingHorizontal: 2, borderTopWidth: 1, borderTopColor: '#8D92A3', borderStyle: 'dashed' }
})
