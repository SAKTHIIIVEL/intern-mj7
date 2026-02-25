import JobCard from "../resuable/JobCard";

export default function Art(){
    // ✅ Data stored locally in this file
      const artJobs = [
        { title: "Art Director", type: "Full-Time", location: "Chennai" ,desc:"We are looking for Art Director who Designs and oversees the visual aesthetics and set style." },
      ];
    
      return (
        <div className="space-y-10">
          {artJobs.map((job, index) => (
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