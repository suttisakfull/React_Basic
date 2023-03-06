import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [dataState, setDataState] = useState(
        {
            counter: 0
        }
    );
    const add = () => {
        setDataState({
          counter: dataState.counter + 1
        });
    }
    const minus = () => {
      setDataState({
        counter: dataState.counter - 1
      });
    }
    return (
      <div className="col-4 mx-auto mt-4">
        <div className="card text-center">
          <div className="card-header">
            <button className="btn btn-sm btn-primary mr-1" onClick={add}>Add</button>
            <button className="btn btn-sm btn-danger ml-1" onClick={minus}>Minus</button>
          </div>
          <div className="card-body">Result : {dataState.counter}</div>
        </div>
      </div>
    );
}
export default App;
