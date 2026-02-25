import JobCard from "../resuable/JobCard";

export default function Cinematography(){
    // ✅ Data stored locally in this file
      const cinemaJobs = [
        { title: "Director of Photography", type: "Full-Time", location: "Chennai" ,desc:"We are looking for Director of Photography who Controls the visual style, lighting, and camera execution." },
        { title: "Camera Man", type: "Full-Time", location: "Chennai" ,desc:"We are looking for Cinematographer who Captures scenes creatively using camera techniques and framing" },
        { title: "Assistant Cameraman", type: "Full-Time", location: "Chennai" ,desc:"We are looking for Assistant Cameraman who Supports camera setup, focus, and equipment handling." },
      ];
    
      return (
        <div className="space-y-10">
          {cinemaJobs.map((job, index) => (
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