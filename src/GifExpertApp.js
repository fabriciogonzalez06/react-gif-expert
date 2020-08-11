import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories=['One Punch','Samurai X','Dragon Ball'];
    const [categories, setcategories] = useState(['One Punch']);


    // const handleAdd = () => {

    //     setcategories([...categories,'nuevo']);
    // }


    return (
        <>
            <div className="mb-2">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-md">
                        <p className="navbar-brand" >GifExpertApp</p>
                    </div>
                </nav>
            </div>
            <AddCategory setCategories={setcategories} />
            <ol className="list-group mr-2">
                {
                    categories.map((categoria) => {
                        return <GifGrid  key={categoria}  categoria = { categoria }/>
                    })
                }
            </ol>


            {/* <h1>GifExpertApp</h1> */}

        </>
    );
}

export default GifExpertApp;
