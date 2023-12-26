"use client"
import React, { useState, useEffect } from 'react'

const Groupchat = ({ params }) => {
    useEffect(() => {
        const id = params.id
        console.log(id);
    }, [])

    return (
        <div>{params.id}</div>
    )
}

export default Groupchat