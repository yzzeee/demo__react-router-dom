import { useHistory } from "react-router-dom";

export default function B() {
  const history = useHistory();

  const handleClick = () => {
    history.push('1');
  }

  return <button className="component info" onClick={handleClick}>goBack</button>
}
