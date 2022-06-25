import { useEffect, useState } from "react";
import {fetchedData  } from "./interface";

export const useFetch = (url:string) => {

    const [data, setData] = useState<fetchedData>()
    const [isPending, setIsPending] = useState<boolean>(true)
    const [error, setError] = useState<string>("")

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
                setError("")
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

    return {data, isPending, error}

}

export default useFetch;