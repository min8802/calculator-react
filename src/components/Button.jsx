const Button = ({name, onClickButton}) => {
    return (
    <button className={`bg-gray-100 flex justify-center w-20 h-10 items-center rounded-md ${name === "+" && "bg-blue-500"}`} onClick={onClickButton}>
        {name}
    </button>
    );
  };
  
  export default Button;