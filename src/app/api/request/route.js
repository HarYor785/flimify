
export async function POST(req){
    const token = req.headers.get('Authorization')
    const body = await req.json()
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/request`,{
            method: 'POST',
            body: JSON.stringify(body),
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

