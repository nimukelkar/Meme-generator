import React from "react"
import { render } from "react-dom"

class MemeGenerator extends React.Component {
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]

        }
    }
    componentDidMount(){   // Made an API call to get meme images.
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response=>{
            const{memes}=response.data
            console.log(memes[0])

            this.setState({allMemeImgs:memes})
        })
    }
    render(){
        return(
            <h1>Meme Generator</h1>
        )
    }
}




export default MemeGenerator