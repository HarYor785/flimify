export async function GET(req){
    const {searchParams} = new URL(req.url)
    const params = searchParams.get('page')
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/ads/page?location=${params}`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `sample___auth`
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