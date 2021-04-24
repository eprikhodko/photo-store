import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])

    useEffect(() => {
        fetch("")
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    }, []) 
    
    console.log(allPhotos)

    return (
        <Context.Provider value={{allPhotos}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}