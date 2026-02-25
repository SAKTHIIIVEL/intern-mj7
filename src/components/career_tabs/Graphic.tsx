import JobCard from "../resuable/JobCard";

export default function Graphic(){
    // ✅ Data stored locally in this file
      const graphicJobs = [
        { title: "Graphic Designer", type: "Full-Time", location: "Chennai" ,desc:"We are looking for Graphic Designer who Creates visual elements, titles, and graphics for branding and production." },
      ];
    
      return (
        <div className="space-y-10">
          {graphicJobs.map((job, index) => (
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