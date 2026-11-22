export function SearchBar({ value, onChange }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Busca tu medicina: Vulfpeck, jazz fusion..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}