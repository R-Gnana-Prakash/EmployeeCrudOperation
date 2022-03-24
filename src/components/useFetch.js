import { useState, useEffect } from "react";

const useFetch = (url) =>{
    const [ data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending , setIsPending] = useState(true);

    useEffect(() => {
      
      const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch the data for that resource')
            }
            return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
        })
        .catch((err) => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            }else{
                setError(err.message);
                setIsPending(false);
            }
        })

        return () => abortCont.abort();
    },[url, data]);

    return { data, error, isPending };
}

export default useFetch;