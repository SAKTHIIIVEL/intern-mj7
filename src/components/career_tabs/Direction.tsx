import JobCard from "../resuable/JobCard";

export default function Direction() {

  // ✅ Data stored locally in this file
  const directionJobs = [
    { title: "Director", type: "Full-Time", location: "Chennai" ,desc:"Lead strategic initiatives, drive organizational growth, and oversee overall operations to ensure long-term success and strong business performance." },
    { title: "Co-Director", type: "Full-Time", location: "Chennai",desc:"Support leadership in decision-making, manage key functions, and collaborate on strategies to achieve organizational goals effectively." },
    { title: "Associate Director", type: "Full-Time", location: "Chennai" ,desc:"Handle core operations, coordinate with teams, and contribute to planning and execution of business strategies."},
    { title: "Assistant Director", type: "Full-Time", location: "Chennai",desc:"Assist in daily operations, support team coordination, and ensure smooth execution of tasks across departments." },
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