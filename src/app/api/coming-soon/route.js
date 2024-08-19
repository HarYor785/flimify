
export async function GET() {
    try {
        const apiUrl = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=`;
        const allMovies = [];
        let currentPage = 1;
        let totalPages = 1;

        while (currentPage <= totalPages) {
            const response = await fetch(`${apiUrl}${currentPage}`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_IMDB_KEY}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            totalPages = data.total_pages;
            allMovies.push(...data.results);
            currentPage++;
        }
console.log(allMovies)
        return new Response(JSON.stringify(allMovies), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
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
                },
            }
        );
    }
}
