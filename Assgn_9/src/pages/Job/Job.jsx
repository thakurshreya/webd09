import React from "react";
import Card from "../../components/Card"; 
import Navbar from "../../components/Navbar"; 
import "./job.css"; 

const Job = ({ setUser }) => {
  const jobs = [


    {
      id: 1,
      title: "UI/UX Designer",
      description: "UI/UX designers create intuitive and visually appealing user interfaces and experiences, ensuring that products are user-friendly and meet client needs.",
      lastUpdated: "Last updated 3 days ago",
      salary: "$80,000 - $120,000 per year",
      applyLink: "https://example.com/apply/ui-ux-designer",
      applyNow: "Apply Now"
    },
    {
      id: 2,
      title: "Cybersecurity Analyst",
      description: "Cybersecurity analysts protect an organization’s data and networks by monitoring for security breaches, implementing protocols, and responding to incidents.",
      lastUpdated: "Last updated 1 week ago",
      salary: "$70,000 - $150,000 per year",
      applyLink: "https://example.com/apply/cybersecurity-analyst",
      applyNow: "Apply Now"
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      description: "Digital marketing specialists develop and execute online marketing strategies to enhance brand visibility and drive engagement through various digital channels.",
      lastUpdated: "Last updated 5 days ago",
      salary: "$100,000 - $220,000 per year",
      applyLink: "https://example.com/apply/digital-marketing-specialist",
      applyNow: "Apply Now"
    },
    {
      id: 4,
      title: "Human Resources Manager",
      description: "HR managers oversee recruitment, employee relations, and organizational development to maintain a productive and satisfied workforce.",
      lastUpdated: "Last updated 2 days ago",
      salary: "$90,000 - $200,000 per year",
      applyLink: "https://example.com/apply/hr-manager",
      applyNow: "Apply Now"
    },
    {
      id: 5,
      title: "Project Manager",
      description: "Project managers coordinate and oversee projects from inception to completion, ensuring that goals are met on time and within budget.",
     lastUpdated: "Last updated 3 days ago",
     salary: "$100,000 - $190,000 per year",
      applyLink: "https://example.com/apply/project-manager",
      applyNow: "Apply Now"
    },
    {
      id: 6,
      title: "Full Stack Developer",
      description: "Full stack developers build and maintain both the front-end and back-end of web applications, ensuring seamless integration and performance.",
      lastUpdated: "Last updated 6 days ago",
      salary: "$70,000 - $150,000 per year",
      applyLink: "https://example.com/apply/full-stack-developer",
      applyNow: "Apply Now"
    },
     {
      id: 7,
      title: "Project Manager",
      description: "Project managers coordinate and oversee projects from inception to completion, ensuring that goals are met on time and within budget.",
     lastUpdated: "Last updated 3 days ago",
     salary: "$100,000 - $190,000 per year",
      applyLink: "https://example.com/apply/project-manager",
      applyNow: "Apply Now"
    },
    {
      id: 8,
      title: "Full Stack Developer",
      description: "Full stack developers build and maintain both the front-end and back-end of web applications, ensuring seamless integration and performance.",
      lastUpdated: "Last updated 6 days ago",
      salary: "$70,000 - $150,000 per year",
      applyLink: "https://example.com/apply/full-stack-developer",
      applyNow: "Apply Now"
    },
    
  ];

  return (
      <div className="container">
        <Navbar setUser={setUser} />
        <div className="jobs_container">
          {jobs.map((job) => (
            <Card
              key={job.id}
              title={job.title}
              cardContent={job.description}
              lastUpdated={job.lastUpdated}
              applyLink={job.applyLink}
              applyNow={job.applyNow}
              salary ={job.salary}
            />
          ))}
        </div>
      </div>
    

    
  );
};

export default Job;
