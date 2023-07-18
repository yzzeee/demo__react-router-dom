import React, {useEffect} from 'react';
import './App.css';
import {NavLink, Route, Switch} from 'react-router-dom';
import {A, B} from "./components";
import Item from "./components/Item";

const listener = (e: PopStateEvent) => {
  console.log('check listener', e);
};

function App() {
  useEffect(() => {
    console.log('mounted');
    window.addEventListener("popstate", listener);
    return () => {
      console.log('unmounted ddadf');
      window.removeEventListener("popstate", () => listener);
    }
  }, [])

  return (
      <div style={{display: 'flex'}}>
        <div className="flex-container stretch">
          <Item color="Violet" onClick={() => null} />
          <div className="flex-item color-lightseagreen">1</div>
          <div className="flex-item color-lightseagreen">2</div>
          <div className="flex-item color-lightseagreen">3</div>
          <div className="flex-item color-lightseagreen">4</div>
        </div>
        <div className="flex-container flex-start">
          <div className="flex-item color-red">1</div>
          <div className="flex-item color-red">2</div>
          <div className="flex-item color-red">3</div>
          <div className="flex-item color-red">4</div>
        </div>
        <div className="flex-container flex-end">
          <div className="flex-item color-blue">1</div>
          <div className="flex-item color-blue">2</div>
          <div className="flex-item color-blue">3</div>
          <div className="flex-item color-blue">4</div>
        </div>
        <div className="flex-container center">
          <div className="flex-item color-green">1</div>
          <div className="flex-item color-green">2</div>
          <div className="flex-item color-green">3</div>
          <div className="flex-item color-green">4</div>
        </div>
        <div className="flex-container space-between">
          <div className="flex-item color-yellow">1</div>
          <div className="flex-item color-yellow">2</div>
          <div className="flex-item color-yellow">3</div>
          <div className="flex-item color-yellow">4</div>
        </div>
        <div className="flex-container space-around">
          <div className="flex-item color-pupple">1</div>
          <div className="flex-item color-pupple">2</div>
          <div className="flex-item color-pupple">3</div>
          <div className="flex-item color-pupple">4</div>
        </div>
        <div className="flex-container space-evenly">
          <div className="flex-item color-orange">1</div>
          <div className="flex-item color-orange">2</div>
          <div className="flex-item color-orange">3</div>
          <div className="flex-item color-orange">4</div>
        </div>
        {/* 아래 영역에 outlet 노출 */}
        <Switch>
          <Route path="/:id" render={(routeProps) =>
            ({A: <A/>, B: <B/>}[routeProps.match.params.id])
          }/>
        </Switch>
      </div>
  );
}

export default App;
