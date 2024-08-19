import axios from "axios"
import moment from "moment"


export const fetchComingSoon = async () => {
    try {
        const res = await fetch('http://localhost:3001/api/coming-soon',{
            method: 'GET',
        })
        const data = await res.json()
        const filterData = data?.filter((d)=>{
            return moment(d?.release_date).isAfter(moment())
        })
        return filterData
    } catch (error) {
        console.log(error)
        return []
    }
}