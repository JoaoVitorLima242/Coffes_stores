import { useState } from "react"

type Coords = {
    latitude: number
    longitude: number
}

const useTrackLocation = () => {
    const [locationErrorMsg, setLocationErrorMsg] = useState('')
    const [isFindingLocation, setIsFindingLocation] = useState(false)
    const [coords, setCoords] = useState<Coords | null>(null)

    const success = (position: GeolocationPosition) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude 

        setCoords({
            latitude,
            longitude 
        })
        setLocationErrorMsg('')
        setIsFindingLocation(false)
    }

    const error = () => {
        setLocationErrorMsg('Unable to retrieve your location')
        setIsFindingLocation(false)
    }

    const handleTrackLocation = () => {
        setIsFindingLocation(true)
        if(!navigator.geolocation) {
            setLocationErrorMsg('Geolocation is not supported by your browser')
            setIsFindingLocation(false)
        } else {
            navigator.geolocation.getCurrentPosition(success, error)
        }
    }

    return {
        coords,
        locationErrorMsg,
        isFindingLocation,
        handleTrackLocation
    }
}

export default useTrackLocation