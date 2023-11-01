import { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

function Search({ onSearch }) {
   const [query, setQuery] = useState("");

   const handleInputChange = (event) => {
      setQuery(event.target.value);
   };
   const handleSearch = () => {
      onSearch(query);
   };
   return (
      <InputGroup className="mb-3">
         <FormControl
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-addon2"
         />
         <Button variant="primary" onClick={handleSearch}>
            Search
         </Button>
      </InputGroup>
   );
}

export default Search;
