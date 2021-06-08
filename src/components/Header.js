import React from 'react'
class Header extends React.Component{
    constructor(props){
        super()
    }
    

    render(){
        return(
            
            <div style={{backgroundColor:"blue", color:"white",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            <h2>Tip Calculator</h2>

            <span>Build in React</span>
            </div>
            
        )
    }
}

export default Header