import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ActivityIndicator, ScrollView, ImageBackground} from "react-native";
import { Text, Avatar } from '@rneui/themed';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from "expo-linear-gradient";

import getProperIcon from '../components/MyIcon';

export default function CityListScreen({ navigation }) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataResult, setDataResult] = useState([]);
    const fetchUri = "http://api.openweathermap.org/data/2.5/group?appid=8af9429984615c233a49404a5a53fa44&id=6173331,726050,2147714,658225,3530597";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(fetchUri);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setIsLoaded(true);
            setDataResult(result);
        } catch (error) {
            setIsLoaded(true);
            setError(error);
        }
    };

    return (
        <ImageBackground source={require('../assets/icons/weather.jpeg')}
        style={styles.background}
        >
        <ScrollView contentContainerStyle={styles.container}>
            {error ? (
                <Text style={styles.error}>There was an error loading your data</Text>
                // spinner implementation
            ) : !isLoaded ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>

            ) : dataResult.cnt === undefined || dataResult.cnt <= 0 ? (
                <Text style={styles.error}>No records found</Text>
            ) : (
                <>
                    <TouchableOpacity
                        style={styles.menuIcon}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <MaterialIcons
                            name="location-on"
                            size={50}
                            color="white"
                        />
                    </TouchableOpacity>

                    <Text style={styles.h1}>Weather</Text>

                    {dataResult.list.map(item => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => navigation.navigate('Weather', { detailId: item.id })}
                        >
                            <LinearGradient
                                style={styles.cityItem}
                                colors={["rgba(0, 51, 102, 1)", "rgba(128, 128, 128, 0.8)"]}
                            >
                                <Avatar
                                    style={styles.icon}
                                    source={getProperIcon(item?.weather[0]?.icon)}
                                />
                                <View style={styles.info}>
                                    <Text style={styles.degree}>{Math.round(item.main.temp)}°C</Text>
                                    <Text style={styles.cityName}>{item.name}</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    ))}
                </>
            )}
        </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    }, 
    container: {
        flexGrow: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    menuIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    h1: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    cityItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginBottom: 10,
        borderRadius: 24,
    },
    icon: {
        width: "12%",
    },
    info: {
        flex: 1,
        marginLeft: 20,
    },
    degree: {
        fontSize: 22,
        color: 'white',
    },
    cityName: {
        fontSize: 24,
        color: 'white',
    },
    error: {
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
