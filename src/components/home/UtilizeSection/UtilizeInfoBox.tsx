import { useState } from "react";
import {
  ArrowSmRightIcon,
  XIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";

interface props {
  utilize: {
    id: number;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    modalTitle: string;
    data: string[];
  };
}

export default function UtilizeInfoBox({ utilize }: props) {
  const { id, icon, title, modalTitle, data } = utilize;
  const Icon = icon as React.FC<React.SVGProps<SVGSVGElement>>;

  const [toggleState, setToggleState] = useState<number>(0);

  return (
    <div className="bg-white border border-black/[0.1] pt-24 pb-8 pl-10 md:pt-14 md:pb-5 md:pl-6 md:pr-2 sm:pr-24">
      <Icon className="w-4 h-4 title-color" />
      <h3
        className="text-base font-medium title-color mb-4"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <button
        type="button"
        className="group/btn inline-flex items-center gap-x-1 text-sm title-color"
        onClick={() => setToggleState(id)}
      >
        View More{" "}
        <ArrowSmRightIcon className="inline-block w-4 h-4 duration-300 group-hover/btn:translate-x-1" />
      </button>

      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/[0.5] flex justify-center items-center duration-300 ${
          toggleState === id ? "" : "opacity-0 invisible"
        }`}
      >
        <div className="relative w-[500px] pt-20 pb-10 px-10 bg-white rounded-3xl">
          <XIcon
            className="absolute top-6 right-6 w-6 h-6 title-color cursor-pointer"
            onClick={() => setToggleState(0)}
          />
          <h3 className="text-xl font-medium title-color text-center mb-4">
            {modalTitle}
          </h3>
          <ul className="flex flex-col gap-y-3">
            {data.map((utilize) => (
              <li className="flex items-center gap-x-2">
                <CheckCircleIcon className="w-4 h-4" />
                {utilize}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
