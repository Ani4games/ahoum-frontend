interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}
export const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search..."
        />
    );
}
export default SearchInput;