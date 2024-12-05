import React, { useState } from "react";

const App = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
    };

    return (
        <div className="h-screen flex items-center justify-center bg-slate-100">
            <div className="bg-white p-10 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
                    Counter App
                </h1>

                <div className="text-6xl font-bold text-center mb-8 text-gray-700">
                    {counter}
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={handleIncrement}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Increment
                    </button>

                    <button
                        onClick={handleDecrement}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;