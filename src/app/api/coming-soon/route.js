
export async function GET(req) {
    try {
        const {searchParams} = new URL(req.url)
        const page = searchParams.get('page')
        const minDate = new Date().toISOString().split('T')[0];

        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}&release_date.gte=${minDate}`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_IMDB_KEY}`,
            },
            cache: 'no-store'
        });

        const data = await response.json()

        return new Response(JSON.stringify(data), {
            status: response.status,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store'
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ error: 'Internal server error' }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store'
                },
            }
        );
    }
}
