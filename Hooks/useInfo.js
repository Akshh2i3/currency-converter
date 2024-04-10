'use client'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


// custom hook 

const useInfo = (curr) => {
    const [data, setData] = useState({});

    useEffect(() => {
        async function call() {
            try {
                let res = await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`)
                // console.log(res.data[scurr])
                setData(res.data[curr])
            } catch (e) {
                console.log("ERROR FOUND IN FETCHING DATA")
                console.log(e);
            }
        }
        call()
    }, [curr])

    return data
}

export default useInfo