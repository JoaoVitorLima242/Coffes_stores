import { NextApiRequest, NextApiResponse } from "next";
import { getCoffeeStores } from "../../services/places";

interface ExtendedNextApiRequest extends NextApiRequest {
    query: {
        longitude: string
        latitude: string
        limit: string
    }
}

const getCoffeeStoresByLocation = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    try {
        const {
            latitude,
            longitude,
            limit,
        } = req.query
    
        const coords = {
            latitude: Number(latitude),
            longitude: Number(longitude)
        }
    
        const response = await getCoffeeStores(coords, Number(limit))

        res.status(200).json(response)

    } catch (error) {
        res.status(500).json({message: 'Oh no! Something went wrong', error })
    }

}

export default getCoffeeStoresByLocation