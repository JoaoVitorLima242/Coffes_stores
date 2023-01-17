import { useContext, useState } from "react"

import { StoreContext } from "../context/Store"
import { ACTION_TYPES } from "../context/Store/types.d"

const useTrackLocation = () => {
    const [locationErrorMsg, setLocationErrorMsg] = useState('')
    const [isFindingLocation, setIsFindingLocation] = useState(false)

    const { state, dispatch } = useContext(StoreContext)

    const success = (position: GeolocationPosition) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude 

        dispatch({
            type: ACTION_TYPES.SET_COORDS,
            payload: {
                coords: {
                    latitude,
                    longitude
                }
            }
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
        coords: state.coords,
        locationErrorMsg,
        isFindingLocation,
        handleTrackLocation
    }
}

export default useTrackLocation