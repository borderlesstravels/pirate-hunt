import React from "react";
import cs from "classnames";

interface Props {
  header: string;
  variant: "green-shade" | "blue-shade" | "orange-shade";
  data: string[];
}

const RoadMapItem = ({ header, variant, data }: Props) => {
  return (
    <div className="flex-1 max-w-[300px]">
      <div
        className={cs("rounded-t-lg w-max shadow-lg px-4 py-2", {
          "bg-[#00A3C4]": variant === "green-shade",
          "bg-[#1A365D]": variant === "blue-shade",
          "bg-[#BA5333]": variant === "orange-shade",
        })}
      >
        <h4 className="text-white uppercase text-[22px] font-semibold">
          {header}
        </h4>
      </div>
      <div
        className={cs(
          "rounded-b-lg rounded-tr-lg shadow-lg border px-4 pt-2 pb-5",
          {
            "border-[#00A3C4] text-[#00A3C4] bg-[#EBF9FF]":
              variant === "green-shade",
            "border-[#1A365D] text-[#1A365D] bg-[#D6F4FF40]":
              variant === "blue-shade",
            "border-[#BA5333] text-[#BA5333] bg-[#FFF8EB]":
              variant === "orange-shade",
          }
        )}
      >
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </div>
    </div>
  );
};

export default RoadMapItem;
