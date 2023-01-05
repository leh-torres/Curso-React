import React from "react";
import './calculadora.css';

const titulo = process.env.REACT_APP_NAME //Não consegui

class Calculadora extends React.Component{

   constructor(props){
      super(props);
      this.state ={
         num1: '',
         num2: '',
         resultado: 0 
      }

      this.handleAlterarNum1 = this.handleAlterarNum1.bind(this);
      this.handleAlterarNum2 = this.handleAlterarNum2.bind(this);
      this.calcular = this.calcular.bind(this);
   }

   handleAlterarNum1(event){
      this.setState({num1: event.target.value})
   }

   handleAlterarNum2(event){
      this.setState({num2: event.target.value})
   }

   calcular(){
      let resultado = 0;

      if(this.state.num1 === '' || this.state.num2 === ''){
         alert('Preencha todos os campos!');
      } else{
         resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);

         this.setState({resultado: resultado.toString()});
      }
   }

   render(){
    return(
      <div className="calculadora">
         <h1>MaisMais</h1>
         <h3>A sua calculadora de soma</h3>
         <input type={"text"} value={this.state.num1} onChange={this.handleAlterarNum1}/>
         <span>+</span>
         <input type={"text"} value={this.state.num2} onChange={this.handleAlterarNum2}/>
         <button onClick={this.calcular}>=</button>
         <span className="resultado">{this.state.resultado}</span>
      </div>
    )
   }

};

export default Calculadora;