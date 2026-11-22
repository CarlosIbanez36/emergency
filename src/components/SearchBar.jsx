type SearchBarProps = {
  value: string;
  onChange: (nuevoValor: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
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