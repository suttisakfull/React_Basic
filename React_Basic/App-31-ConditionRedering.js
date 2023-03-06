import React, { Component } from 'react'; 

function Message(props)   
{   
    if (props.isSubmit)   
        return <h1>-- Content --</h1>;   
    else  
        return <h1>-- Main Page --</h1>;   
}   

function Submit(props)   
{   
   return(<button onClick = {props.clickInfo}>Submit</button>);   
}    
  
function Back(props)   
{   
    return(   
           <button onClick = {props.clickInfo}>Back</button>   
       );   
}   
class App extends Component{    
   constructor(props)   
    {   
        super(props);    
        this.handleSubmit = this.handleSubmit.bind(this);  
          this.handleBack = this.handleBack.bind(this);   
      this.state = {isSubmit : false};   
    }   
   handleSubmit()   
    {   
        this.setState({isSubmit : true});   
    }   
    handleBack()   
    {   
        this.setState({isSubmit : false});   
    }   
    render(){   
        return(   
            <div>   
        <h1>::: React Web Application :::</h1>  
                <Message isSubmit = {this.state.isSubmit}/>               
                {   
                    (this.state.isSubmit)?(   
                    <Back clickInfo = {this.handleBack} />   
                    ) : (   
                    <Submit clickInfo = {this.handleSubmit} />   
                    )   
                }   
            </div>         
            );   
    }   
}   
export default App;    