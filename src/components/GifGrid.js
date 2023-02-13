import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([])

    const {data:images, loading} = useFetchGifs(category);

    // useEffect( ()=>{
    //     getGifs(category)
    //         .then(setImages)
    // }, [])

    // const getGifs = async() =>{
    //     const url="https://api.giphy.com/v1/gifs/search?api_key=rIYhhnsCVrwDwe4g8EHnzYfbbaj35lKq&q="+encodeURI(category)+"&limit=10&offset=0&rating=g&lang=en"
    //     const resp = await fetch(url)
    //     const {data} = await resp.json();
    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images.downsized_medium.url
    //         }
    //     })
    //     return gifs
    // }

    return (
        <>
            <h3>{category}</h3>
            {loading && <span class="loader"></span>}
            <div className='cardGrid'>
                {
                    images.map((img)=>
                        <GifGridItem key={img.id}
                                    {...img} />
                    )
                }
            </div>
        </>
    )
}
