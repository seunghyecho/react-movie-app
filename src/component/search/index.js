import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const SearchEle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
  padding: 20px 10px;
  margin-bottom: 20px;

  input {
    color: #fff;
  }
`;
export default function Search({ defaultValue, onChange, onClick }) {
  return (
    <SearchEle className="search">
      <input
        type="text"
        placeholder="Search by name..."
        defaultValue={defaultValue}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        <FontAwesomeIcon icon={faSearch} color="white"></FontAwesomeIcon>
      </button>
    </SearchEle>
  );
}
