

export async function GET(req){
    const {searchParams} = new URL(req.url)
    const params = searchParams.get('query')
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/movie/category?query=${params}`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
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


export async function POST(req){
    const {searchParams} = new URL(req.url)
    const params = searchParams.get('query')
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/movie/search?q=${params}`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
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