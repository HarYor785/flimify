
export async function POST(req){
    const token = req.headers.get('Authorization')
    const {searchParams} = new URL(req.url)
    const id = searchParams.get('id')
    

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/watchlist?id=${id}`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })

        const res = await response.json()
        return new Response(JSON.stringify(res),{
            status: response.status,
            statusText: response.statusText,
            headers: {
                'Content-Type': 'application/json',
            }
        })
        
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify(error.message),{
            status: 500,
            statusText: 'Internal server error',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
}

export async function GET(req){
    const token = req.headers.get('Authorization')
    const {searchParams} = new URL(req.url)
    const page = searchParams.get('page')
    const limit = searchParams.get('limit')

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/watchlist?page=${page}&limit=${limit}`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })

        const res = await response.json()
        return new Response(JSON.stringify(res),{
            status: response.status,
            statusText: response.statusText,
            headers: {
                'Content-Type': 'application/json',
            }
        })
        
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify(error.message),{
            status: 500,
            statusText: 'Internal server error',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
}