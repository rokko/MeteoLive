import React from 'react'
import { Card, Title, Paragraph } from 'react-native-paper'
import { Text, View, Image } from 'react-native'
import apis from '../config/apis'


export default function CardCitta(props) {
    if (props.runn) {
        return (
            <View>
                <Card>
                    <Card.Content style={{ alignItems: 'center', height: 'auto' }}>
                        <Image
                            style={{
                                height: 100,
                                width: 100,
                            }}
                            source={{ uri: `${apis.icons}${props.we.weather[0].icon}@2x.png` }}
                        />
                        <Title>{props.we.name}</Title>
                        <Title style={{ textTransform: 'capitalize'}} >{props.we.weather[0].description}</Title>
                        <Paragraph>Temperatura Attuale {props.we.main.temp}°</Paragraph>
                        <Paragraph>Max {props.we.main.temp_max}°</Paragraph>
                        <Paragraph>Min {props.we.main.temp_min}° </Paragraph>
                    </Card.Content>
                </Card>

            </View>

        )
    }
    else {
        return <Text>Nessuna città inserita</Text>
    }
}
