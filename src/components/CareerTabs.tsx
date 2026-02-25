interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { label: "Direction", value: "direction" },
  { label: "Writing", value: "writing" },
  { label: "Music", value: "music" },
  { label: "Editing", value: "editing" },
  { label: "Stunt & Action", value: "stunt" },
  { label: "Makeup & Hair", value: "makeup" },
  { label: "Art & Production", value: "art" },
  { label: "Costume Designer", value: "costume" },
  { label: "Graphic & Visual", value: "graphic" },
  { label: "Cinematography", value: "cinematography" },
];

export default function CareerTabs({ activeTab, setActiveTab }: Props) {
  return (
    <div
      className="flex gap-x-4 lg:gap-x-8 gap-y-4 overflow-x-auto whitespace-nowrap border-b border-[#FFFFFF82] pb-6
                 lg:flex-wrap lg:overflow-visible lg:whitespace-normal"
    >
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setActiveTab(tab.value)}
          className={`
            flex-shrink-0 px-6 py-2 rounded-full border text-[16px] sm:text-[18px] xl1:text-[24px] transition-all
            ${
              activeTab === tab.value
                ? "bg-red-500 border-red-500 text-white"
                : "border-[#FFFFFF82] text-white hover:border-white"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}