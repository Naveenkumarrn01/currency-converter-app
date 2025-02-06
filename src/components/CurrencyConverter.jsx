import React, { useState } from "react";
import useCurrencyInfo from "../hooks/useCurrencyinfo";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null); // Store result

  const { data: currencyData, loading, error } = useCurrencyInfo(fromCurrency);

  const handleConvert = () => {
    if (currencyData[toCurrency]) {
      const result = amount * currencyData[toCurrency];
      setConvertedAmount(result.toFixed(2)); // Store result after clicking button
    } else {
      setConvertedAmount("N/A");
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">
        Currency Converter
      </h1>
      <div className="space-y-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          min="0"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <div className="flex space-x-4">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-1/2 p-2 border border-gray-300 rounded-md"
          >
            {Object.keys(currencyData).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <span className="self-center">to</span>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-1/2 p-2 border border-gray-300 rounded-md"
          >
            {Object.keys(currencyData).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        {/* Convert Button */}
        <button
          onClick={handleConvert}
          className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Convert
        </button>

        {/* Display Converted Amount */}
        {convertedAmount !== null && (
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold">
              Converted Amount: {convertedAmount} {toCurrency}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrencyConverter;

// // src/components/CurrencyConverter.jsx
// import React, { useState } from "react";
// import useCurrencyInfo from "../hooks/useCurrencyinfo";

// function CurrencyConverter() {
//   const [amount, setAmount] = useState(1);
//   const [fromCurrency, setFromCurrency] = useState("USD");
//   const [toCurrency, setToCurrency] = useState("EUR");

//   const { data: currencyData, loading, error } = useCurrencyInfo(fromCurrency);

//   const handleConvert = () => {
//     if (currencyData[toCurrency]) {
//       const result = amount * currencyData[toCurrency];
//       return result.toFixed(2);
//     }
//     return "N/A";
//   };

//   if (loading) {
//     return <div className="text-center">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500">Error: {error}</div>;
//   }

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-2xl font-bold text-center mb-6">
//         Currency Converter
//       </h1>
//       <div className="space-y-4">
//         <input
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(parseFloat(e.target.value))}
//           min="0"
//           className="w-full p-2 border border-gray-300 rounded-md"
//         />
//         <div className="flex space-x-4">
//           <select
//             value={fromCurrency}
//             onChange={(e) => setFromCurrency(e.target.value)}
//             className="w-1/2 p-2 border border-gray-300 rounded-md"
//           >
//             {Object.keys(currencyData).map((currency) => (
//               <option key={currency} value={currency}>
//                 {currency}
//               </option>
//             ))}
//           </select>
//           <span className="self-center">to</span>
//           <select
//             value={toCurrency}
//             onChange={(e) => setToCurrency(e.target.value)}
//             className="w-1/2 p-2 border border-gray-300 rounded-md"
//           >
//             {Object.keys(currencyData).map((currency) => (
//               <option key={currency} value={currency}>
//                 {currency}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="text-center">
//           <h2 className="text-xl font-semibold">
//             Converted Amount: {handleConvert()} {toCurrency}
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CurrencyConverter;
