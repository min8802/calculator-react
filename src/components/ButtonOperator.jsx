import Button from "./Button";

const ButtonOperator = ({ name, result, setResult, setTemp, setOperator }) => {
    const onclickButton = () => {
        setTemp(result);
        setResult("0");
        setOperator(name);
    };

    return (
        <Button name={name} onClickButton={onclickButton}/>
    );
};

export default ButtonOperator