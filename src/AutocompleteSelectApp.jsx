import React from "react";
import AutocompleteSelect from "./Components/AutocompleteSelect";

function AutocompleteSelectApp() {
  const ops = Array.from({ length: 1000 }, (_, index) => ({
    id: (index + 1).toString(),
    userName: `User ${index + 1}`,
  }));

  const getOptionsLikeAsyncCall = async (searchKey) => {
    // console.log(searchKey);
    try {
      // Simulate an asynchronous operation with a delay (e.g., 2 seconds)
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      // Wait for the delay to simulate the async operation
      await delay(200); // 2 seconds delay

      // Simulate fetching filtered options after delay
      //   console.log("Fetched options for searchKey:", searchKey);
      // Example: You can return some mock data or perform an actual async call here
      return ops
        .filter(
          ({ id, userName }) =>
            !searchKey.length ||
            userName.toLowerCase().includes(searchKey.toLowerCase())
        )
        .map(({ id, userName }) => {
          return { label: userName, value: id };
        });
    } catch (error) {
      alert("Error fetching options:", error);
      return [];
    }
  };

  return (
    <div className="p-4">
      AutocompleteSelectApp
      <div className="mt-5">
        <p>hello</p>
        <AutocompleteSelect
          placeholder="Search User"
        //   options={ops.map(({ id, userName }) => {
        //     return { label: userName, value: id };
        //   })}
          fetchOptionsCallback={getOptionsLikeAsyncCall}
          onSelect={(selectedVal) => console.log("selectedVal", selectedVal)}
        />
        <p>akash daa</p>
      </div>
    </div>
  );
}

export default AutocompleteSelectApp;
