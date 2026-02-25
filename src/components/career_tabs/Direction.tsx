import JobCard from "../resuable/JobCard";

export default function Direction() {

  // ✅ Data stored locally in this file
  const directionJobs = [
    { title: "Director", type: "Full-Time", location: "Chennai" ,desc:"From concept to final cut, be part of the creative journey. Grow your career in a space built for cinema lovers." },
    { title: "Co-Director", type: "Full-Time", location: "Chennai",desc:"From concept to final cut, be part of the creative journey. Grow your career in a space built for cinema lovers." },
    { title: "Associate Director", type: "Full-Time", location: "Chennai" ,desc:"From concept to final cut, be part of the creative journey. Grow your career in a space built for cinema lovers."},
    { title: "Assistant Director", type: "Full-Time", location: "Chennai",desc:"From concept to final cut, be part of the creative journey. Grow your career in a space built for cinema lovers." },
  ];

  return (
    <div className="space-y-10">
      {directionJobs.map((job, index) => (
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