import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    data: []
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    switch (req.method) {
        case 'GET':
            const url = process.env.API_URL as string + req.url?.split("/api")[1]
            const response = await fetch(url)
            const data = await response.json()
            res.status(200).json(data)
            break
    }
}
