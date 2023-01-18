import { NextApiRequest, NextApiResponse } from 'next'
import { table } from '../../services/airtable'


const createCoffeeStore = (req: NextApiRequest, res: NextApiResponse) => {

    res.status(200).json({message: 'teste'})
}

export default createCoffeeStore