import { useState } from "react"

type Coords = {
    latitude: number
    longitude: number
}

const useTrackLocation = () => {
    const [locationErrorMsg, setLocationErrorMsg] = useState('')
    const [coords, setCoords] = useState<Coords | null>(null)

    const success = (position: GeolocationPosition) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude 

        setCoords({
            latitude,
            longitude 
        })
    }

    const error = () => {
        setLocationErrorMsg('Unable to retrieve your location')
    }

    const handleTrackLocation = () => {
        if(!navigator.geolocation) {
            setLocationErrorMsg('Geolocation is not supported by your browser')
        } else {
            // status.textContent = 'Locating...'
            navigator.geolocation.getCurrentPosition(success, error)
        }
    }

    return {
        coords,
        locationErrorMsg,
        handleTrackLocation
    }
}

export default useTrackLocation