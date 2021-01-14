import { useState, useEffect } from 'react';

const useFetch = (url) => {


    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error('could not fetch the data for that ressource')
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err =>{
                    setIsPending(false);
                    setError(err.message);
                })
        }, 2000);

    }, []);
    return {data, isPending, error};
}

export default useFetch;