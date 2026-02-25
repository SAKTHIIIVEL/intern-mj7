import JobCard from "../resuable/JobCard";

export default function Costume(){
    // ✅ Data stored locally in this file
      const costumeJobs = [
        { title: "Costume Designer", type: "Full-Time", location: "Chennai" ,desc:".We are looking for Costume Designer who Creates costumes that reflect character and story needs." },
      ];
    
      return (
        <div className="space-y-10">
          {costumeJobs.map((job, index) => (
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