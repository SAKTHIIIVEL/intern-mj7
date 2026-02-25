import JobCard from "../resuable/JobCard";

export default function Editor(){
    // ✅ Data stored locally in this file
      const editorJobs = [
        { title: "Editor", type: "Full-Time", location: "Chennai" ,desc:"We are looking for Editor who Shapes the final story by assembling and refining footage." },
      ];
    
      return (
        <div className="space-y-10">
          {editorJobs.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              type={job.type}
              location={job.location}
              desc={job.desc}
            />
          ))}
        </div>
      );
}