const Button = ({name, onClickButton}) => {
    return (
    <button className="bg-gray-200 flex justify-center w-10 h-10 items-center rounded-md" onClick={onClickButton}>
        {name}
    </button>
    );
  };
  
  export default Button;