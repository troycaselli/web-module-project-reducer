import React, {useReducer} from 'react';
import reducer, {initialState} from '../reducers/index';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import {applyNumber, changeOperator, clearDisplay, setMemory, applyMemory, resetMemory} from '../actions/index';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const calculationHandler = (number) => {
    dispatch(applyNumber(parseInt(number)));
  }

  const operatorHandler = (operator) => {
    dispatch(changeOperator(operator));
  }

  const clearHandler = () => {
    dispatch(clearDisplay());
  }

  const memorySetHandler = () => {
    dispatch(setMemory(state.total));
  }

  const totalSetHandler = () => {
    dispatch(applyMemory(state.memory));
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={memorySetHandler} />
              <CalcButton value={"MR"} onClick={totalSetHandler} />
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(evt) => calculationHandler(evt.target.value)} />
              <CalcButton value={2} onClick={(evt) => calculationHandler(evt.target.value)} />
              <CalcButton value={3} onClick={(evt) => calculationHandler(evt.target.value)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={(evt) => calculationHandler(evt.target.value)} />
              <CalcButton value={5} onClick={(evt) => calculationHandler(evt.target.value)} />
              <CalcButton value={6} onClick={(evt) => calculationHandler(evt.target.value)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={(evt) => calculationHandler(evt.target.value)} />
              <CalcButton value={8} onClick={(evt) => calculationHandler(evt.target.value)} />
              <CalcButton value={9} onClick={(evt) => calculationHandler(evt.target.value)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={(evt) => operatorHandler(evt.target.value)} />
              <CalcButton value={"*"} onClick={(evt) => operatorHandler(evt.target.value)} />
              <CalcButton value={"-"} onClick={(evt) => operatorHandler(evt.target.value)} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearHandler} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
