type EmergencyButtonProps = {
  label: string;
  onActivate: () => void;
};

export function EmergencyButton({ label, onActivate }: EmergencyButtonProps) {
  return (
    <div className="emergency-case">
      <button className="emergency-button" onClick={onActivate}>
        {label}
      </button>
    </div>
  );
}