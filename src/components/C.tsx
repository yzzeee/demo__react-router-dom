import {useHistory, useLocation} from "react-router-dom";

export default function C() {
  const history = useHistory();
  // const location = useLocation();
  return <>
    <div className="caption">[{history.location.pathname}]</div>
    {/*<div className="caption">[{location.pathname}]</div>*/}
    <div className="">{[window.location.pathname]}</div>
  </>
}
