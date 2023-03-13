import React from "react";

const useMutation = (mutation, opts) => {
    //success
    const [data, setData] = React.useState(null)

    //loading
    const [loading, setLoading] = React.useState(false)

    //error
    const [error, setError] = React.useState("")

    const fetchMutation = async (payload) => {
        try {
            setLoading(true)
            const response = await mutation(payload)
            const data = await response.json()
            setData(data)
            opts.onSuccess()
        } catch (e) {
            setError("Gagal mengirim data")
            opts?.onFailed()
        } finally {
            setLoading(false)
        }
    }

    return {
        data, loading, error, fetchMutation
    }

}

export default useMutation