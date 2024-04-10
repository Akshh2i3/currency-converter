'use client'
import React, { useState } from 'react'
import useInfo from '@/Hooks/useInfo'
import InputBox from '@/Components/InputBox'

const page = () => {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const currencyInfo = useInfo(from)

  const options = Object.keys(currencyInfo)

  const swapfun = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convertfun = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className='w-full h-screen flex justify-center items-center bg-cover bg-no-repeat'
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1591033594798-33227a05780d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3VycmVuY3klMjBleGNoYW5nZXxlbnwwfHwwfHx8MA%3D%3D)' }}
    >

      <div className="w-full">
        <div className="w-1/3 mx-auto border-2 border-gray-60 rounded-3xl p-5 backdrop-blur-md bg-white/20">
          <form>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(amount)}
                onCurruncyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1"
                onClick={swapfun}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurruncyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountNotEditable={true}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={(e) => {
                e.preventDefault()
                convertfun()
              }}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div >
  )
}

export default page

// https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2