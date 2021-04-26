import React, {useContext} from "react"
import {Context} from "../Context"

import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {
    const context = useContext(Context)
    // Get the allPhotos array from context
    // console.log(context.allPhotos)

    const allPhotos = context.allPhotos.map((item, index) => 
        <Image key={item.id} img={item} className={getClass(index)} />
    )

    // or we can say
    // const {allPhotos} = useContext(Context)
    
    // const imageElements = allPhotos.map((img, i) => (
    //     <Image key={img.id} img={img} className={getClass(i)} />
    // ))
    
    return (
        <main className="photos">
            {allPhotos}
        </main>
    )
}

export default Photos