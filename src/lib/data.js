import axios from "axios"
import moment from "moment"
import { toast } from "react-toastify";


export const handleFetch = async (url, method, token, body, setIsLoading) => {
    if(setIsLoading){
        setIsLoading(true)
    }
    try {
        const options = {
            method: method || 'GET',
            headers: {
                'Authorization': token || '',
            },
        };
    
        if (body) {
            if (body instanceof FormData) {
                options.body = body;
            } else {
                options.body = JSON.stringify(body); 
                options.headers['Content-Type'] = 'application/json'; 
            }
        }
    
        const requestUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/api${url}`;
        
        const response = await fetch(requestUrl, options);
        const data = await response.json();
        if (data?.message?.includes('Authorization failed')) {
            localStorage.removeItem('flimify')
            toast.info('Session expired')
            return
        }

        return data;

    } catch (error) {
        console.log('Error in handleFetch:', error);
        return []; 
    }finally{
        if(setIsLoading){
            setIsLoading(false)
        }
    }
};

export const fetchMovies = async (query) =>{
    function setIsLoading(){}
    const res = await handleFetch(`/movies?query=${query}`,'GET','','',setIsLoading)
    return res?.data
}

export const fetchWatchMovies = async (slug) =>{
    function setIsLoading(){}
    const res = await handleFetch(`/movies/slug?slug=${slug}`,'GET','','',setIsLoading)
    return res?.data
}

export const fetchComingSoon = async (page = 1) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/coming-soon?page=${page}`,{
            method: 'GET',
        })
        const data = await res.json()
        const filterData = data?.results?.filter((d)=>{
            return moment(d?.release_date).isAfter(moment())
        })
        return data?.results
    } catch (error) {
        console.log(error)
        return []
    }
}