import React from "react";
import { useSelector } from "react-redux";

const SearchResult = () => {
  const searchResults = useSelector((state) => state.search.searchResults);

  return (
    <div>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResult;
