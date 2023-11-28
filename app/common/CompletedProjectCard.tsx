/* eslint-disable @next/next/no-img-element */
import { ProjectProps } from "./projectCard";

const CompletedProjectCard = ({ proj }: { proj: ProjectProps }) => {
  const isoString = proj.deadline;
  const date = new Date(isoString);

  const options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return (
    <div className="transform hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer group rounded-lg overflow-hidden shadow-md border border-black/20">
      <div className="relative">
        <img
          alt="Project Cover"
          className="object-cover w-full h-64"
          height="200"
          src={proj.cover}
          style={{
            aspectRatio: "300/200",
            objectFit: "cover",
          }}
          width="300"
        />
      </div>
      <div className="flex flex-col justify-between items-center pt-5 px-10">
        <div className="text-lg text-center">{proj.title}</div>
        <div className="text-xs border border-black/10 mt-2 mb-10 rounded-full h-6 flex items-center justify-center px-3">Deadline: {formattedDate}</div>
      </div>
      <div className="flex justify-between items-center pb-5 px-10 text-sm">
        <p>Submissions: {proj.submission_count}</p>
      </div>
    </div>
  );
};

export default CompletedProjectCard;
