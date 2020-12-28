import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {


    const {loading,data} = useFetchGifs(category)


    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-item animate__animated animate__fadeIn"> 
            {
                    data.map((img)=>{
                        return (
                            <GifGridItem 
                            key={img.id}
                            {...img}
                            />
                        )
                    })
                } 
            </div>     

        </>
    )
}
