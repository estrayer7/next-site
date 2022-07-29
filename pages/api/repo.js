import { client } from '../../utils/client'
import { allRepos } from '../../utils/queries'

export default async function handler(req,res) {
  if(req.method === 'GET'){
    const query = allRepos()
    const data = await client.fetch(query)
    res.status(200).json(data)
  }
}