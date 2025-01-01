import React, { FC, SetStateAction, Dispatch } from "react";
import { resHubData } from "../ResourceHub/ResourceHub";

const resHubCourseData = resHubData.filter((data) => data.imgTag === "Course");
const resHubProgData = resHubData.filter((data) => data.imgTag === "Program");

interface resourcesTabDetail {
  tabName: string;
  tabNumeration: number;
  id: number;
}

const resourcesTabData: resourcesTabDetail[] = [
  {
    tabName: "All",
    tabNumeration: resHubData.length,
    id: 0,
  },
  {
    tabName: "Courses",
    tabNumeration: resHubCourseData.length,
    id: 1,
  },
  {
    tabName: "Programs",
    tabNumeration: resHubProgData.length,
    id: 2,
  },
];

interface ResourceTabProps {
  tabIndex: number;
  setTabIndex: Dispatch<SetStateAction<number>>;
}

const ResourcesTab: FC<ResourceTabProps> = ({ tabIndex, setTabIndex }) => {
  return (
    <div className="w-full mt-16">
      <div className="flex gap-10 items-center text-gray-500">
        {resourcesTabData.map((data) => (
          <button
            onClick={() => setTabIndex(data.id)}
            key={data.id}
            className={tabIndex === data.id ? "font-bold text-black" : ""}
          >
            {data.tabName}
            <span className="text-sm">({data.tabNumeration})</span>
          </button>
        ))}
      </div>
      <div className="bg-gray-500 w-full"></div>
    </div>
  );
};

export default ResourcesTab;
