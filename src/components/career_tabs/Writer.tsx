import JobCard from "../resuable/JobCard";

export default function Writer(){
    // ✅ Data stored locally in this file
      const writerJobs = [
        { title: "Writer", type: "Full-Time", location: "Chennai" ,desc:"We are looking for writer who Develops original story ideas, concepts, and narratives." },
        { title: "Script Writer", type: "Full-Time", location: "Chennai",desc:"We are looking for script writer who Writes screenplays, dialogues, and scene structure for production." },
        { title: "Storyboard Writer", type: "Full-Time", location: "Chennai" ,desc:"We are looking for Storyboard writer who Visualizes scenes through sketches to guide filming."},
      ];
    
      return (
        <div className="space-y-10">
          {writerJobs.map((job, index) => (
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