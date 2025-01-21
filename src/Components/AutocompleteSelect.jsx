import React, { useState } from "react";
import LoadingInfo from "./LoadingInfo";

function AutocompleteSelect({
  placeholder = "Search...",
  options = [],
  fetchOptionsCallback = null,
  onSelect = null,
}) {
  const [isSearchResultBoxOpen, setIsSearchResultBoxOpen] = useState(false);
  const [isOptionsLoading, setIsOptionsLoading] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (label, value) => {
    setSelectedOption({ label, value });
    setSearchKey(label);
    setIsSearchResultBoxOpen(false);
    onSelect && onSelect({ label, value });
  };

  const handleSearchKeyChange = async (e) => {
    const searchVal = e.target.value;
    setSearchKey(searchVal);
    let filteredData = [];

    // Trigger loading state immediately on input
    setIsOptionsLoading(true);

    if (searchVal.length) {
      if (options.length) {
        console.log("options");
        filteredData = options.filter(({ label }) =>
          label.toLowerCase().includes(searchVal.toLowerCase())
        );
      } else if (fetchOptionsCallback) {
        console.log("fetchOptionsCallback");
        filteredData = await fetchOptionsCallback(searchVal);
      }
      setFilteredOptions(filteredData);
      setIsSearchResultBoxOpen(true);
    } else {
      setFilteredOptions(filteredData);
      setIsSearchResultBoxOpen(false);
    }

    // After async call, turn off loading state
    setIsOptionsLoading(false);
  };

  // Close the search result box when input loses focus (except when clicking on an option)
  const handleInputBlur = (e) => {
    // Delay the closing action so that the click event on options is handled first
    setTimeout(() => {
      setIsSearchResultBoxOpen(false);
      selectedOption ? setSearchKey(selectedOption.label) : setSearchKey("");
    }, 100);
  };

  return (
    <div className="relative w-fit max-w-64">
      <div className="border w-full rounded flex items-center justify-between focus-within:outline focus-within:outline-blue-500 focus-within:outline-1">
        <input
          type="text"
          className="outline-none rounded ps-1 py-1"
          placeholder={placeholder}
          value={searchKey}
          onInput={handleSearchKeyChange}
          onBlur={handleInputBlur} // Added the blur event handler
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      <div
        className={`absolute left-0 w-full z-10 bg-white max-h-64 border shadow-lg rounded overflow-auto transform transition-all duration-300 ${
          isSearchResultBoxOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {isOptionsLoading ? (
          <p className="px-1 py-1 text-wrap">
            <LoadingInfo />
          </p>
        ) : filteredOptions.length ? (
          filteredOptions.map(({ label, value }) => (
            <p
              key={value}
              className={`px-1 py-1 ${
                selectedOption &&
                value === selectedOption.value &&
                "bg-blue-500"
              } hover:bg-blue-500 cursor-pointer border-b text-wrap`}
              onMouseDown={() => handleOptionSelect(label, value)}
            >
              {label}
            </p>
          ))
        ) : (
          <p className="px-1 py-1 text-wrap">No search result found.</p>
        )}
      </div>
    </div>
  );
}

export default AutocompleteSelect;
