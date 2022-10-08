import { useEffect, useState } from 'react';

export const useApi = (fetcher) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetcher()
            .then((response) => {
                setData(response);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [fetcher]);

    return { data, loading };
};