import JobCard from "../resuable/JobCard";

export default function Makeup(){
    // ✅ Data stored locally in this file
      const makeupJobs = [
        { title: "Makeup Artist", type: "Full-Time", location: "Chennai" ,desc:"We are looking for Makeup Artist who Designs and applies makeup to match character and scene requirements." },
      ];
    
      return (
        <div className="space-y-10">
          {makeupJobs.map((job, index) => (
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