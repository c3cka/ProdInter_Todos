import './TabItem.css';

export interface TabItemProps {
  LeadingIcon: JSX.Element;
  label: string;
  ariaLabel: string;
  active: boolean;
  onClick: () => void;
}

export default function TabItem({ LeadingIcon, label, ariaLabel, active, onClick }: TabItemProps) {
  return (
    <li className="tab-item-root" data-active={active}>
      <button
        type="button"
        className="tab-item-main"
        onClick={onClick}
        aria-label={ariaLabel}
      >
        { LeadingIcon }
        { label }
      </button>
    </li>
  )
}
