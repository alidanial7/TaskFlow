import { IconDots } from "@tabler/icons-react";
import { IconSunFilled } from "@tabler/icons-react";

function Sidebar() {
  return (
    <div className="basis-1/4 p-2 bg-base-300">
      <div className="card w-full bg-neutral text-neutral-content">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <span className="text-base">Temperature Outside</span>
            <button className="btn btn-circle bg-neutral border-neutral btn-xs">
              <IconDots size={16} />
            </button>
          </div>
          <div className="flex flex-row items-center">
            <IconSunFilled size={52} />
            <div className="flex items-center justify-center flex-1 flex-col">
              <span className="text-4xl">25&deg;C.</span>
              <span className="text-sm">Yazd, Iran</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
