
import{ useEffect, useState } from 'react'; 
import { StyleSheet, View, Animated, TouchableOpacity, ActivityIndicator} from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios'; 

import { Text, Avatar } from '@rneui/themed'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

import getProperBg from '../components/Bg';
import getProperIcon from '../components/MyIcon';

export const getCityById = async (detailId) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${detailId}&appid=8af9429984615c233a49404a5a53fa44&units=metric`); 
    return response.data; 
}

export default function CityWeatherScreen({ route, navigation }){
    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient); 
    const { detailId } = route.params;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [currCity, setCurrCity] = useState(null);

    useEffect(() => {
        getCityById(detailId).then(data => {
            setCurrCity(data);
            setIsLoaded(true);

        });
    }, [detailId]);


    if (!isLoaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <Text style={styles.loading}>
                    Loading...
                </Text>
            </View>
        );
    }
    else if (error) {
        return (
            <View>
                <Text>
                    There was an error loading your data. 
                </Text>
            </View>
        );
    }
    else if (!currCity) {
        return null;
    }
    else {
        return (
            <AnimatedLinearGradient
                style={styles.container}
                colors={getProperBg(currCity?.weather[0]?.icon)}
            >
                {/* go back to cityListScreen */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('City')}
                    style={styles.menuIcon}
                >
                    <MaterialIcons
                        name="arrow-back"
                        size={50}
                        color="white"
                    />
                </TouchableOpacity>

                {/* Current weather */}
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
        color: 'white',
        // backgroundColor: '#000ff', 
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
        marginTop: 30,
        marginBottom: 20,
        alignSelf: 'center',
        color: 'white',
        fontFamily: 'Montserrat_400Regular'
    },
    time: {
        fontSize: 24,
        marginTop: 5,
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
    loading: {
        fontSize: 30,
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
        color: 'blue',
        fontFamily: 'Montserrat_400Regular'
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
});

