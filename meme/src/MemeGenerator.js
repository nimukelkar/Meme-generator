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
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const randno=Math.floor(Math.random()*this.state.allMemeImgs.length)
        const MemeImg=this.state.allMemeImgs[randno].url
        this.setState({randomImg:MemeImg})
    }
    handleChange(event){
        const{name,value} = event.target;
        this.setState({[name]:value});
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
            <div>
            <h1>Meme Generator</h1>

            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="topText" placeholder="topText" value={this.state.topText} onChange={this.handleChange}/>
                    <input type="text" name="bottomText" placeholder="bottonText" value={this.state.bottomText} onChange={this.handleChange}/>
                    
                    <button>GEN</button>
                </form>

            </div>
            <div className="meme">
                <img src={this.state.randomImg}/>
                <h2 className="top">{this.state.topText}</h2>
                <h2 className="bottom">{this.state.bottomText}</h2>

            </div>

            </div>
            
        )
    }
}




export default MemeGenerator