import { NextApiRequest, NextApiResponse } from 'next'
import { table } from '../../services/airtable'

const createCoffeeStore = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        res.status(405).json({message: 'Only POST methods for this route'})
        return
    }

    res.status(200).json({message: 'teste'})
}

export default createCoffeeStore