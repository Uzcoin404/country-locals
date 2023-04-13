import { PrimaryNav, StatesType } from '../../utilities/types';
import HiddenMenuSecondary from './HiddenMenuSecondary';

interface HiddenMenuPrimaryProps {
  isOpen: boolean;
  panel: number;
  menuItems: { id: number; title: string; active: boolean }[];
  onNavChange: (id: number) => void;
  categoryMenu: PrimaryNav[];
  states: StatesType[];
  adults: number;
  child: number;
  infants: number;
  onIncrement: (type: string) => void;
  onDecrement: (type: string) => void;
  when: Date | null;
  onDateChange: (date: Date | null) => void;
}

const HiddenMenuPrimary = ({
  isOpen,
  panel,
  menuItems,
  onNavChange,
  categoryMenu,
  states,
  adults,
  child,
  infants,
  onIncrement,
  onDecrement,
  when,
  onDateChange,
}: HiddenMenuPrimaryProps) => (
  <div
    className={`hidden_menu absolute top-4 left-0 flex w-full origin-top transform flex-col justify-center transition duration-200 ease-in ${
      isOpen
        ? 'pointer-events-auto visible scale-100 opacity-100'
        : 'pointer-events-none invisible -translate-y-10 scale-[.45] opacity-0'
    }`}
  >
    <div className="flex items-center justify-center gap-5">
      {menuItems.map((item) => (
        <button
          type="button"
          key={item.id}
          onClick={() => {
            onNavChange(item.id);
          }}
          className={`focus-green after:duration-400 relative text-sm after:absolute after:-bottom-[6px] after:left-0 after:h-[2px] after:w-full after:origin-center after:transform after:bg-black after:transition-all hover:text-black hover:after:scale-100 ${
            item.active
              ? 'font-semibold text-black after:scale-100'
              : 'text-[#4B4B4B] after:scale-0'
          }`}
        >
          {item.title}
        </button>
      ))}
    </div>
    <HiddenMenuSecondary
      panel={panel}
      categoryMenu={categoryMenu}
      states={states}
      adults={adults}
      child={child}
      infants={infants}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      when={when}
      onDateChange={onDateChange}
    />
  </div>
);

export default HiddenMenuPrimary;
