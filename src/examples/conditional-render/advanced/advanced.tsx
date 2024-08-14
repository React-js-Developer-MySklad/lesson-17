import React, {FC, useState} from "react";
import {ChildrenCheck} from "../../children/children-check/children-check";
import {Button, Divider} from "antd";

const HandleQueryComponent: FC<{ loading: boolean; error: Error; data: unknown }> = ({ loading, data, error }) => {
    if (loading) return <div>loading</div>;
    if (error) return <div>{error.message}</div>;
    if (!data && !error && !loading) return <div>Idle State</div>

    return <div>{JSON.stringify(data)}</div>;
};

export const Advanced = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error>();
    const [data, setData] = useState<unknown>();

    const onFetch = () => {
        setLoading(true);
        setError(undefined)
        setData(undefined)
        fetch('https://dummyjson.com/products/1/?delay=1000')
            .then((res) => res.json())
            .then(setData)
            .finally(() => setLoading(false))
            .catch(setError);
    };

    const onFetchWithError = () => {
        setLoading(true);
        setError(undefined)
        setData(undefined)

        fetch('https://dummyjson.com/http/404/products/1/?delay=1000')
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error(`${res.status}`)
                }
                return res.json()
            })
            .then(setData)
            .finally(() => setLoading(false))
            .catch(setError);
    };

    const isIdle = !data && !error && !loading;

    return (
        <div>
            <Button onClick={onFetch}>запросить данные</Button>
            <Button onClick={onFetchWithError}>запросить данные с ошибкой </Button>

            <Divider/>

            {/*<ChildrenCheck>*/}
            {/*    {loading && <div>loading</div>}*/}
            {/*    {error && <div>{error.message}</div>}*/}
            {/*    {isIdle && <div>Idle State</div>}*/}
            {/*    {data && JSON.stringify(data)}*/}
            {/*</ChildrenCheck>*/}

            {/*<ChildrenCheck>*/}
            {/*    {(() => {*/}
            {/*        if (loading) { */}
            {/*            return <div>loading</div>;*/}
            {/*        }*/}
            {/*        */}
            {/*        if (error) {*/}
            {/*            return <div>{error.message}</div>;*/}
            {/*        }*/}
            {/*        */}
            {/*        if (!data && !error && !loading) return <div>Idle State</div>*/}

            {/*        return JSON.stringify(data);*/}
            {/*    })()}*/}
            {/*</ChildrenCheck>*/}

            {/*<ChildrenCheck>*/}
            {/*    {*/}
            {/*        loading*/}
            {/*            ? <div>loading</div>*/}
            {/*            : error*/}
            {/*                ? <div>{error.message}</div>*/}
            {/*                : data*/}
            {/*                    ? JSON.stringify(data)*/}
            {/*                    : <div>Idle State</div>*/}
            {/*    }*/}
            {/*</ChildrenCheck>*/}

            {/*<HandleQueryComponent loading={loading} error={error} data={data}/>*/}

        </div>
    );
};