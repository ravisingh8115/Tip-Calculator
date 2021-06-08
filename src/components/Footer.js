import React from 'react'
class Footer extends React.Component{
    constructor(props){
        super()
    }
    

    render(){
        return(
            
            <div style={{backgroundColor:"black", color:"white",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column", marginTop:"10px"}}>
             <span>@2021 TIP-CALCULATOR</span>
            </div>
            
        )
    }
}

export default Footer