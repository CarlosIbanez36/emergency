export function EmergencyButton({ label, onActivate }) {
  return (
    <div className="emergency-case">
      <button className="emergency-button" onClick={onActivate}>
        {label}
      </button>
    </div>
  );
}