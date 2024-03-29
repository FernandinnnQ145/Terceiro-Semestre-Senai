import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {
    requestForegroundPermissionsAsync, // Solicito permisao de localizacao
    getCurrentPositionAsync, //Captura posicao atual
    watchPositionAsync, //Captura em tempos a localizacao
    LocationAccuracy //Precisao da captura
} from 'expo-location';
import { useEffect, useRef, useState } from 'react';
import MapViewDirections from 'react-native-maps-directions';
import { mapskey } from '../../utils/mapsKey';







export default function Map() {
    const mapReference = useRef(null)
    const [finalPosition, setFinalPosition] = useState({
        latitude: -23.5275,
        longitude: -46.6784
    })

    const [initialPosition, setInitialPosition] = useState(null)


    async function CapturarLocalizacao() {
        const { granted } = await requestForegroundPermissionsAsync()

        if (granted) {
            const currentPosition = await getCurrentPositionAsync()

            await setInitialPosition(currentPosition)
        }
    }

    async function RecarregarVizualizacoesMapa() {
        if (mapReference.current && initialPosition) {
            await mapReference.current.fitToCoordinates(
                [
                    {
                        latitude: initialPosition.coords.latitude,
                        longitude: initialPosition.coords.longitude
                    },
                    {
                        latitude: finalPosition.latitude,
                        longitude: finalPosition.longitude
                    }
                ],
                {
                    edgePadding: {
                        top: 60, right: 60, bottom: 60, left: 60
                    },
                    animated: true
                }
            )
        }

    }




    useEffect(() => {
        CapturarLocalizacao()

        // Capturar localizacao em tempo real
        watchPositionAsync({
            accuracy: LocationAccuracy.High,
            timeInterval: 1000,
            distanceInterval: 1
        }, async (response) => {
            await setInitialPosition(response)


            mapReference.current?.animateCamera({
                pitch: 60,
                center: response.coords
            })
        })
    }, [1000])


    useEffect(() => {
        RecarregarVizualizacoesMapa()

    }, [initialPosition])

    return (
        <>
        

            {
                initialPosition != null
                    ? (
                        <MapView
                            ref={mapReference}
                            initialRegion={{
                                latitude: initialPosition.coords.latitude,
                                longitude: initialPosition.coords.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005
                            }}
                            provider={PROVIDER_GOOGLE}
                            style={styles.map}
                            customMapStyle={grayMapStyle}
                            
                            >



                            {/* Criando um marcador no mapa */}
                            <Marker
                                coordinate={{
                                    latitude: -23.5275,
                                    longitude: -46.6784
                                }}
                                title='Alianz Parque'
                                description='PALMEIRAS PALMEIRAS PALMEIRAS MEU PALMEIRASSS'
                                pinColor='green'
                            />
                            <MapViewDirections
                                origin={initialPosition.coords}


                                destination={{
                                    latitude: -23.5275,
                                    longitude: -46.6784,
                                    latitudeDelta: 0.005,
                                    longitudeDelta: 0.005
                                }}
                                apikey={mapskey}


                                strokeWidth={5}
                                strokeColor='#496DBA'
                            />




                            <Marker
                                coordinate={{
                                    latitude: initialPosition.coords.latitude,
                                    longitude: initialPosition.coords.longitude
                                }}
                                title='Local Sao Caetano'
                                description='AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
                                pinColor='orange'
                            />
                        </MapView>
                    )
                    :
                    (
                        <>
                            <Text>Localizacao nao encontrada</Text>

                            <ActivityIndicator />
                        </>
                    )
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
       
    },


    map: {
        height: '50%',
        width: '100%'
    }
});


const grayMapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#E1E0E7",
        },
      ],
    },
    {
      elementType: "geometry.fill",
      stylers: [
        {
          saturation: -5,
        },
        {
          lightness: -5,
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#FBFBFB",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#33303E",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          color: "#fbfbfb",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#fbfbfb",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#fbfbfb",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#fbfbfb",
        },
      ],
    },
    {
      featureType: "poi.business",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#66DA9F",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#fbfbfb",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1B1B1B",
        },
      ],
    },
    {
      featureType: "road",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#C6C5CE",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#FBFBFB",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#ACABB7",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#8C8A97",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#8C8A97",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#fbfbfb",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#fbfbfb",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#8EA5D9",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#fbfbfb",
        },
      ],
    },
  ];
  
  