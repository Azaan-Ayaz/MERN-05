import React from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
  const globalState = useSelector((state) => state);

  const renderCartItem = (itemKey) => {
    const item = globalState?.cart[itemKey];
    const { name, price, qty } = item;

    return (
      <tr key={itemKey}>
        <td>{itemKey + 1}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{qty}</td>
        <td>{qty * price}</td>
      </tr>
    );
  };

  const calculateTotal = () => {
    let total = 0;
    Object.keys(globalState.cart).forEach((itemKey) => {
      const item = globalState.cart[itemKey];
      total += item.qty * item.price;
    });
    return total;
  };

  return (
    <div className=" flex justify-around">
      
    <div className="text-start m-6">
      <h2>Checkout</h2>
      <hr />
      <div className="flex justify-start">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Net Price</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(globalState.cart).map((itemKey, index) =>
              renderCartItem(itemKey, index)
            )}

            <tr className="border-t-orange-300 border-[1px]">
              <td colSpan={4}></td>
              <td>{calculateTotal()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <form action="">
        <div className="text-xl font-semibold pb-6">
          Pay With Card
          <hr className="bg-blend-color-burn" />
        </div>
        <div>
        <label className=" flex flex-col">Email</label>
        <input type="text" className="border rounded-md pl-1" placeholder="Email" />
        </div>
        <div className="mt-2">
        <label className=" flex flex-col">Card Information</label>
        <input type="text" className="border w-64" placeholder="1334 1234 1234 1234" />
        <div className="flex">
          <div>
        <input type="text" className="border w-32 pl-1  rounded-md" placeholder="MM / YY" />
        </div>
        <div>
        <input type="text" className="border w-32 pl-1  rounded-md" placeholder="CVC" />
        </div>
        </div>
        <div className="pt-3">
        <label className=" flex flex-col">Cardholder Name</label>
        <input type="text" className="border rounded-md pl-1" placeholder="Full ame on card" />
        </div>
       <div className="pt-3">
            <label className="flex flex-col">Country or region</label>
            <select
              className="border rounded-md pl-1" >
              <option value="">Select a country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Oman">Oman</option>
              <option value="Palestine">Palestine</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div className="w-64 border text-center mt-3 bg-teal-400 p-1 shadow-lg rounded-md">
            Pay
          </div>
          </div>
      </form>
    </div>
    </div>
  );
}
