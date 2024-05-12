import React from 'react'

function InputBox({
    label,
    amount,
    onchangeAmount,
    oncurrencychange,
    currencyOptions = [],
    selectCurrency = 'USD'

}) {
    return (
        <div className="flex items-center space-x-28">
            <div>
                <label className="block text-gray-700">{label}</label>
                <input className="block w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400" type="text" placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => onchangeAmount && onchangeAmount(Number(e.target.value))} />
            </div>
            <div>
                <label className="block text-gray-700">Currency Type</label>
                <select className="block w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400"
                    value={selectCurrency}
                    onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}>
                    {
                        currencyOptions.map((currency) => (
                            <option value={currency} key={currency}>{currency}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default InputBox