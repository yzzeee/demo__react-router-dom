export default function A(){
  const handleClick = () => {
    window.history.back();
  }
  return <button className="component warn" onClick={handleClick}>back</button>
}
