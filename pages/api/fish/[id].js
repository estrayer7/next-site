import { client } from '../../../utils/client'
import { fishDetails } from "../../../utils/queries";

export default async function handler(req, res){
  if(req.method === 'GET'){
    const { id } = req.query
    const query = fishDetails(id)
    const data = await client.fetch(query)

    res.status(200).json(data[0])
  }
}