import { useEffect, useRef, useState } from "react";
import routes from "@/pages/public/routes";
import { useNavigate } from 'react-router-dom';

export const Tab = () => {
  const tabsRef = useRef<(HTMLElement | null)[]>([]);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const navigate = useNavigate();

  const [activeTabIndex, setActiveTabIndex] = useState<number>(
    () => Number(localStorage.getItem("activeTabIndex")) || 0
  );

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();

    localStorage.setItem("activeTabIndex", String(activeTabIndex));
  }, [activeTabIndex]);


  return (
    <div className="flew-row relative mx-auto flex h-11 rounded-full px-0.5">
      <span
        className="absolute bottom-0 top-0 z-10 flex overflow-hidden rounded-full py-1.5 transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-full bg-vektor-blue shadow-sm" />
      </span>
      {routes.map((route, index) => {
        const isActive = activeTabIndex === index;
        return (
          <button
            type="button"
            key={route.name}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`${isActive ? `text-black` : `hover:text-black text-neutral-700 dark:text-vektor-blue dark:hover:text-vektor-bg`} z-20 text-sm my-auto cursor-pointer select-none rounded-full px-4 text-center font-medium`}
            onClick={() => {
              setActiveTabIndex(index);
              navigate(route.path ?? "");
            }}
          >
            {route.name}
          </button>
        );
      })}
    </div>
  );
};

export default Tab;