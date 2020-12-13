import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper'
import apis from '../config/apis'
import CardCitta from '../Components/CardCitta'


export default function SearchScreen() {
    const [ricerca, setRicerca] = useState('')
    const [meteo, setMeteo] = useState([])
    const [running, setRunning] = useState(false)




    ///////////////////////////////////////////////////////////////////////////////////////////////////

    function callApi() {
        fetch(`${apis.baseUrlMeteoAttuale}${ricerca}&appid=${apis.key}&units=metric&lang=it`)
            .then(response => response.json())
            .then(data => {
                setMeteo(data)
                setRunning(true)
            }
            )



    }
    //////////////////////////////////////////////////////////////////////////////////////////////////



    return (
        <>
            <Searchbar
                placeholder="Inserisci la città"
                onChangeText={citta => setRicerca(citta)}
                value={ricerca}
                onIconPress={callApi}


            />

            <CardCitta
                we={meteo}
                runn={running}
            />


        </>
    )
}


