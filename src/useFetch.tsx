import { useEffect, useState } from "react";

export const useFetch = (url:string) => {

    const [data, setData]    = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const abortConst = new AbortController()

        fetch(url, {signal:abortConst.signal})
            .then((response) => {
                if(!response.ok){
                    throw Error('GET request failed!')
                }
                return response.json()
            })
            .then((data) => {
                setData(data);
                setIsPending(false)
                setError(null)
            })
            .catch((err) => {
                if(err.name === `AbortError`){
                    console.log(`Request Aborted!`)
                }else{
                    setError(err.message)
                    setIsPending(false)
                }
            })

        return() => {
            abortConst.abort();
          }

    }, [url])

    // console.log(data)

    return {data, isPending, error}

}

export default useFetch;