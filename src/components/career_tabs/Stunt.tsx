import JobCard from "../resuable/JobCard";

export default function Stunt(){
    // ✅ Data stored locally in this file
      const stuntJobs = [
        { title: "Stunt Director", type: "Full-Time", location: "Chennai" ,desc:"We are looking for Stunt Director who Plans and supervises safe and impactful stunt sequences." },
      ];
    
      return (
        <div className="space-y-10">
          {stuntJobs.map((job, index) => (
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