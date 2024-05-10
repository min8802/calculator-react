import { useState } from "react";

const Result = () => {
    const [result, setResult] = useState(0);


    return <div className="bg-gray-50 p-2 rounded-md shadow-md">{result}</div>
};

export default Result