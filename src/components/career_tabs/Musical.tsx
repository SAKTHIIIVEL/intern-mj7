import JobCard from "../resuable/JobCard";

export default function Musical(){
    // ✅ Data stored locally in this file
      const musicJobs = [
        { title: "Music Director", type: "Full-Time", location: "Chennai" ,desc:"We are looking for Music Director who Oversees the musical style and sound identity of the project." },
        { title: "Musician", type: "Full-Time", location: "Chennai",desc:"We are looking for Musician who Performs or records musical elements for the production." },
      ];
    
      return (
        <div className="space-y-10">
          {musicJobs.map((job, index) => (
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