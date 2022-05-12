import React from 'react';
import ReactDom from 'react-dom';
import CounterApp2 from './CounterApp2';
//import CounterApp from './PrimeraApp';
import { createRoot } from 'react-dom/client';
import './index.css'


const container = document.getElementById('app')
const root = createRoot(container); 
root.render( <CounterApp2 value={10}/>  )