import { data } from "react-router-dom";
import { resHubData } from "../ResourceHub/ResourceHub";

const resHubCourseData = resHubData.filter((data) => data.imgTag == "Course");
const resHubProgData = resHubData.filter((data) => data.imgTag == "Program");

interface resourcesTabDetail {
  tabName: string;
  tabNumeration: number;
}

const resourcesTabData: resourcesTabDetail[] = [
  {
    tabName: "All",
    tabNumeration: resHubData.length,
  },
  {
    tabName: "Courses",
    tabNumeration: resHubCourseData.length,
  },
  {
    tabName: "Programs",
    tabNumeration: resHubProgData.length,
  },
];

function selectTab() {
  // if(resHubCourseData)
}

const ResourcesTab = () => {
  return (
    <div className="w-full mt-16">
      <div className="flex gap-10 items-center text-gray-500">
        {resourcesTabData.map((data) => (
          <button key={data.tabName} onClick={() => selectTab()}>
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
