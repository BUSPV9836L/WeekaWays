import React, { useState } from "react";

export const Booking = () => {
  let destination, cheackInDate, cheackOutDate;
  function formHandler(e) {
    // e.preventDefault();
    console.log(destination,cheackInDate,cheackOutDate);
  }
  function destinationHandler(e) {
    destination = e.target.value;
  }
  function cheackInHandler(e) {
    cheackInDate = e.target.value;
  }
  function cheackOutHandler(e) {
    cheackOutDate = e.target.value;
  }
  return (
    <div id="deals" className="max-w-[1140px] m-auto w-full p-4">
      <form
        className="lg:flex lg:justify-between w-full iteam-center"
        onSubmit={formHandler}
      >
        <div className="flex flex-col my-2 py-2">
          <label>Destination</label>
          <select
            className="lg:w-[300px] md:w-full border rounded-md p-2"
            onChange={destinationHandler}
          >
            <option selected>Choose Destination</option>
            <option>Taj Mahal</option>
            <option>Marvelous</option>
            <option>The Corniche</option>
            <option>Hilton Salwa</option>
            <option>The St. Regis Doha</option>
            <option>Purple Island</option>
          </select>
        </div>
        <div className="flex w-full ">
          <div className="flex flex-col w-full ld:max-w-[250px] my-2 p-2">
            <label>Chek-In</label>
            <input
              onChange={cheackInHandler}
              className="border rounded-md p-2"
              type="date"
            ></input>
          </div>
          <div className="flex flex-col w-full ld:max-w-[250px] my-2 p-2">
            <label>Chek-Out</label>
            <input
              onChange={cheackOutHandler}
              className="border rounded-md p-2"
              type="date"
            ></input>
          </div>
        </div>
        <div className="flex flex-col my-2 p-2 w-full">
          <label>Search</label>
          <button className="submit">Rates & Availiblities</button>
        </div>
      </form>
    </div>
  );
};
