
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated, ActivityIndicator } from 'react-native';
import { Text, Avatar } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

import getProperBg from '../components/Bg';
import getProperIcon from '../components/MyIcon';

export default function HomeScreen({ navigation }) {
    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [currCity, setCurrCity] = useState(null);

    // const detailId = 1330407;
    const detailId = 3530597;
    const fetchUri = `https://api.openweathermap.org/data/2.5/weather?id=${detailId}&appid=8af9429984615c233a49404a5a53fa44&units=metric`;

    const [fontsLoaded] = useFonts({ Montserrat_400Regular });

    useEffect(() => {
        fetch(fetchUri)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCurrCity(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (!fontsLoaded || !isLoaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#fff" />
                <Text style={styles.loading}>
                    Loading...
                </Text>
            </View>
        );
    } else if (error) {
        return (
            <View>
                <Text>There was an error loading weather data.</Text>
            </View>
        );
    } else if (!currCity) {
        return null;
    } else {
        return (
            <AnimatedLinearGradient
                style={styles.container}
                colors={getProperBg(currCity?.weather[0]?.icon)}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('City')}
                    style={[styles.menuIcon, { justifyContent: 'flex-end', marginRight: 20 }]}
                >
                    <MaterialIcons
                        name="menu"
                        color="white"
                        size={38}
                    />
                </TouchableOpacity>

                <View>
                    <Text style={styles.h1}>
                        {currCity?.name}
                    </Text>
                    <View style={styles.main}>
                        <Avatar
                            style={styles.icon}
                            source={getProperIcon(currCity?.weather[0]?.icon)}
                        />
                        <Text style={styles.h2}>
                            {currCity?.weather[0]?.main}
                        </Text>
                    </View>
                    <Text style={styles.h3}>
                        {Math.round(currCity?.main?.temp)}°C
                    </Text>
                    <Text style={styles.h4}>
                        {Math.round(currCity?.main?.temp_min)}°C / {Math.round(currCity?.main?.temp_max)}°C
                    </Text>
                </View>
                <View style={styles.add}>
                    <View style={styles.box}>
                        <FontAwesomeIcon
                            name="tint"
                            size={40}
                            color="white"
                        />
                        <Text style={styles.h5}>
                            {currCity?.main?.humidity}%
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <FontAwesomeIcon
                            name="wind"
                            size={40}
                            color="white"
                        />
                        <Text style={styles.h5}>
                            {currCity?.wind?.speed}km/h
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <FontAwesomeIcon
                            name="thermometer-half"
                            size={40}
                            color="white"
                        />
                        <Text style={styles.h5}>
                            {currCity?.main?.feels_like}°C
                        </Text>
                    </View>
                </View>
            </AnimatedLinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30, 
        backgroundColor: 'white', 
    },
    menuIcon: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginTop: 20,
    },
    h1: {
        fontSize: 40,
        marginTop: 40,
        marginBottom: 20,
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'Montserrat_400Regular'
    },
    h2: {
        fontSize: 34,
        marginTop: 20,
        marginBottom: 0,
        marginHorizontal: 10,
        paddingBottom: 15,
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'Montserrat_400Regular'
    },
    icon: {
        width: "20%",
    },
    h3: {
        fontSize: 70,
        marginTop: 10,
        marginBottom: 20,
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'Montserrat_400Regular'
    },
    h4: {
        fontSize: 28,
        marginTop: 0,
        marginBottom: 20,
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'Montserrat_400Regular'
    },
    main: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    add: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    box: {
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    h5: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20,
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'Montserrat_400Regular'
    },
    loading: {
        fontSize: 30,
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
        color: 'black',
        fontFamily: 'Montserrat_400Regular'
    },
});
