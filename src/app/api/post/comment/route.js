
export async function POST(req){
    const token = req.headers.get('Authorization')
    const body = await req.json()
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/post/comment`,{
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

export async function PUT(req){
    const token = req.headers.get('Authorization')
    const body = await req.json()
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/post/like-comment`,{
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

export async function GET(req){
    const token = req.headers.get('Authorization')
    const {searchParams} = new URL(req.url)
    const id = searchParams.get('id')
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/post/comment?postId=${id}`,{
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

export async function DELETE(req){
    const token = req.headers.get('Authorization')
    const {searchParams} = new URL(req.url)
    const postId = searchParams.get('postId')
    const commentId = searchParams.get('commentId')
    const replyId = searchParams.get('replyId')
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/post/comment?postId=${postId}&commentId=${commentId}&replyId=${replyId}`,{
            method: 'DELETE',
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