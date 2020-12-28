import React,{useState} from 'react';
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['naruto']);



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} categories={categories}/>
            <hr/>
            
            {/* <button onClick={handleAdd}>agregar</button> */}

              <ol className="card-item">
              {
                    categories.map((category)=>{
                        return <GifGrid 
                        key={category}
                        category={category}
                        />
                    })
                }
              </ol>  

        </>
    )
}

