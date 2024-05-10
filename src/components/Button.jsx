const Button = ({name, result, setResult}) => {
 const onClickButton = () => {
    if (result === "0") {
        setResult(name);
    } else {
        setResult(result + name);
    }
 };
    return (
    <button className="bg-gray-200 flex justify-center w-10 h-10 items-center rounded-md" onClick={onClickButton}>
        {name}
    </button>);
  };
  
  export default Button;