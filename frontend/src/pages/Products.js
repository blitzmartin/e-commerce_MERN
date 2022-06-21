import React from 'react'
import { useParams } from "react-router-dom";

export default function Products () {
    const params = useParams();
    const {slug} = params;

    return (
        <div>
            <h1>{slug}</h1>
        </div>
    )
}