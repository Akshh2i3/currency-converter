'use client'
import React from 'react'

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurruncyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountNotEditable = false,
    currencyNotEditable = false,
    addedClass = '',
}) => {

    return (
        <div className={`bg-zinc-200 p-3 rounded-lg flex ${addedClass}`}>
            <div className="w-1/2">
                <label className="text-black/60">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-zinc-200 text-black/60 py-1.5 mt-2 text-2xl"
                    type="number"
                    placeholder="Enter Amount"
                    readOnly={amountNotEditable}
                    value={amount}
                    onChange={(e) => { onAmountChange && onAmountChange(Number(e.target.value)) }}
                // we are just checking if the function is existing or not if existing then only call otherwise not
                />
            </div>

            <div className="w-1/2 flex flex-col items-end">
                <label className="text-black/60 mb-2 w-full text-right">Currency Type</label>
                <select
                    className="rounded-lg py-0.5 px-1 bg-gray-300 cursor-pointer outline-none text-xl mt-2"
                    readOnly={currencyNotEditable}
                    value={selectCurrency}
                    onChange={(e) => { onCurruncyChange && onCurruncyChange(e.target.value) }}
                >
                    {
                        currencyOptions.map((currcode) => {
                            return (
                                <option key={currcode} value={currcode}>
                                    {currcode}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        </div >
    );
}

export default InputBox