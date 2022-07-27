import { client } from '../../../utils/client'
import { allFish } from '../../../utils/queries'

export default async function handler(req,res) {
  if(req.method === 'GET'){
    const query = allFish()
    const data = await client.fetch(query)
    res.status(200).json(data)
  }
}