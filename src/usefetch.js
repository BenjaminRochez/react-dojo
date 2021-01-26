import { useState, useEffect } from 'react';

const useFetch = (url) => {


    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abordCont = new AbortController();

        async function logFetch(url) {
            try {
                const response = await fetch(url, { signal: abordCont.signal });
                if (!response.ok) {
                    throw Error('could not fetch the data for that ressource');
                }
                //console.log(await response.json());
                fillData(await response.json());
            }
            catch (err) {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            }
        }

        logFetch(url);
        return () => {
            abordCont.abort();
        }

    }, [url]);
    return { data, isPending, error };



    // Filldata
    function fillData(data) {
        console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
    }
}

export default useFetch;