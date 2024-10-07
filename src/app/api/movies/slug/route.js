

export async function GET(req){
    const {searchParams} = new URL(req.url)
    const params = searchParams.get('slug')
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/movie/watch?slug=${params}`,{
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