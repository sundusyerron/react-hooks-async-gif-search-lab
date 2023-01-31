import { useState, useEffect } from "react"
import GifList from "./GifList"
import GifSearch from "./GifSearch"
function GifListContainer() {
    const [userSearch,setUserSearch] = useState("dolphin")
    function searchQuery(value){
     setUserSearch(value)
     console.log(userSearch)
    }
    const [gifsData, setGifsData] = useState("")
    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=kzTVQiwvVNYOcjnzEg8MRwESSiETrFm5&rating=g`)
            .then((r) => r.json())
            .then((d) => setGifsData(d.data.slice(0,3)))
    }, [userSearch])
    return (
        <div>
            <GifSearch searchQuery={searchQuery}/>
            {gifsData !== "" ? <GifList gifsList={gifsData}/> : console.log("loading")}
        </div>
    )
}
export default GifListContainer