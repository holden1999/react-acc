import React from "react";

const useQuery = (query, opts) => {
    //success
    const [data, setData] = React.useState([])

    //loading
    const [loading, setLoading] = React.useState(false)

    //error
    const [error, setError] = React.useState("")

    const fetchQuery = async () => {
        try {
            setLoading(true)
            const response = await query()
            const data = await response.json()
            setData(data)
            opts.onSuccess()

        } catch (e) {
            setError("Gagal mendapatkan data")
        } finally {
            setLoading(false)
            opts.onFinish()
        }
    }

    React.useEffect(() => {
        fetchQuery()
    }, [opts.shouldRefresh])

    return {
        data, loading, error, fetchQuery
    }
}

export default useQuery