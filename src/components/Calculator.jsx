import React,{useState} from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import {Box} from '@mui/system';

export default function Calculator(){
    const [num,setNum]=useState(0);
    const [oldnum,setOldNum]=useState(0);
    const [operator,setOperator]=useState();

    function inputNum(e){
        var input=e.target.value;
        if(num==0){
            setNum(input)
        }else{
            setNum(num + input);
        }  
    }
    function clear(){
        setNum(0);
    }
    function porcentage(){
        setNum(num/100);
    }
    function changeSign(){
        if(num>0){
            setNum(-num)
        }else{
            setNum(Math.abs(num))
        }
    }
    function operatorHandler(e){
        var operatorInp = e.target.value;
        setOperator(operatorInp);
        setOldNum(num);
        setNum(0);
    }
    function calculate(){
        if(operator === "/"){
            setNum(oldnum / num);

        }else if(operator === "*"){
            setNum(oldnum * num);

        }else if(operator === "-"){
            setNum(oldnum - num);

        }else if(operator === "+"){
            setNum(parseFloat(oldnum) + parseFloat(num));
        }
    }
    return(
        <div>
            <Box m={2}/>
            <div style={{marginTop:"2em"}}></div>
            <Container maxWidth="xs">

                <div className='wrapper'>

                    <div style={{marginTop:"4em"}}></div>
                    <p className='result'>{num}</p>
                    <div style={{marginTop:"2em"}}></div>

                    <button onClick={clear} className='grey'>AC</button>
                    <button onClick={changeSign} className='grey'>+/-</button>
                    <button onClick={porcentage} className='grey'>%</button>
                    <button onClick={operatorHandler} className='orange' value="/">/</button>

                    <button onClick={inputNum} value={7}>7</button>
                    <button onClick={inputNum} value={8}>8</button>
                    <button onClick={inputNum} value={9}>9</button>
                    <button onClick={operatorHandler} className='orange' value="*">x</button>

                    <button onClick={inputNum} value={4}>4</button>
                    <button onClick={inputNum} value={5}>5</button>
                    <button onClick={inputNum} value={6}>6</button>
                    <button onClick={operatorHandler} className='orange' value="-">-</button>

                    <button onClick={inputNum} value={1}>1</button>
                    <button onClick={inputNum} value={2}>2</button>
                    <button onClick={inputNum} value={3}>3</button>
                    <button onClick={operatorHandler} className='orange' value="+">+</button>
                    
                    <button onClick={inputNum} value={0} className='zero'>0</button>
                    <button onClick={inputNum} value={'.'}>.</button>
                    <button onClick={calculate} className='orange'>=</button>
                </div>
            </Container>
        </div>
    )
}