import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
// import PropTypes from 'prop-types'

const GifApp = props => {

    // const categorias=['Honda', 'Yamaha', 'Vespa']

    const [categorias, setCategorias] = useState(['Honda', 'Yamaha', 'Vespa'])

    // const addCategoria=()=>{
    //     categorias.push("Nueva")
    //     setCategorias([...categorias])
    // }

    const borrarPrimero=()=>{
        categorias.shift()
        setCategorias([...categorias])
    }

    const borrarUltimo=()=>{
        categorias.pop()
        setCategorias([...categorias])
    }

  return (
    <>
        <h2>GifApp</h2>
                
        <hr />
        <AddCategory setCategorias={setCategorias} />
        <ul>
            {
                categorias.map((category)=>
                    <GifGrid key={category} category={category} />
                )
            }
        </ul>
        {/* <button onClick={addCategoria}>Annadir categoria</button><br/><br/> */}
        <button onClick={borrarPrimero}>Eliminar el primero</button>
        <button onClick={borrarUltimo}>Eliminar el ultimo</button>

    </>
  )
}

GifApp.propTypes = {}

export default GifApp