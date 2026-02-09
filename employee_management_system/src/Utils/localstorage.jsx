const employee = [
  {
    firstName: "Aarav",
    email: "user1@example.com",
    password: "1234",
    taskCount: { total: 3, active: 3, newTask: 1, completed: 2, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Sales Report",
        description: "Create monthly sales report for management",
        date: "2026-02-01",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Follow-up",
        description: "Follow up with existing clients via email",
        date: "2026-01-25",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Data Migration",
        description: "Migrate legacy data to new system",
        date: "2026-01-20",
        category: "Technical"
      }
    ]
  },
  {
    firstName: "Vivaan",
    email: "user2@example.com",
    password: "1234",
    taskCount: { total: 4, active: 2, newTask: 1, completed: 2, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "UI Bug Fixes",
        description: "Fix UI issues reported by QA",
        date: "2026-02-02",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Review",
        description: "Review pull requests from team",
        date: "2026-01-28",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Feature Planning",
        description: "Plan features for next sprint",
        date: "2026-02-03",
        category: "Planning"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Integration",
        description: "Integrate third-party payment API",
        date: "2026-01-22",
        category: "Backend"
      }
    ]
  },
  {
    firstName: "Aditya",
    email: "user3@example.com",
    password: "1234",
    taskCount: { total: 3, active: 1, newTask: 2, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Inventory Audit",
        description: "Audit warehouse inventory",
        date: "2026-02-01",
        category: "Operations"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Supplier Meeting",
        description: "Meeting with suppliers",
        date: "2026-01-26",
        category: "Meetings"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Shipment Tracking",
        description: "Track delayed shipments",
        date: "2026-01-21",
        category: "Logistics"
      }
    ]
  },
  {
    firstName: "Ishaan",
    email: "user4@example.com",
    password: "1234",
    taskCount: { total: 3, active: 2, newTask: 2, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Employee Onboarding",
        description: "Onboard new hires",
        date: "2026-02-02",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Policy Update",
        description: "Update company policies",
        date: "2026-01-27",
        category: "HR"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Training Session",
        description: "Conduct training session",
        date: "2026-02-04",
        category: "Training"
      }
    ]
  },
  {
    firstName: "Krishna",
    email: "user5@example.com",
    password: "1234",
    taskCount: { total: 3, active: 1, newTask: 1, completed: 3, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Marketing Campaign",
        description: "Launch new marketing campaign",
        date: "2026-02-01",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Social Media Posts",
        description: "Schedule weekly posts",
        date: "2026-01-29",
        category: "Social Media"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Ad Budget Planning",
        description: "Plan ad budget",
        date: "2026-01-23",
        category: "Finance"
      }
    ]
  },
  {
    firstName: "Rohan",
    email: "user6@example.com",
    password: "1234",
    taskCount: { total: 3, active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Server Monitoring",
        description: "Monitor server performance",
        date: "2026-02-03",
        category: "IT"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Backup Verification",
        description: "Verify daily backups",
        date: "2026-01-28",
        category: "IT"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Security Patch",
        description: "Apply security patches",
        date: "2026-01-20",
        category: "Security"
      }
    ]
  },
  {
    firstName: "Arjun",
    email: "user7@example.com",
    password: "1234",
    taskCount: { total: 3, active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Customer Support",
        description: "Resolve support tickets",
        date: "2026-02-02",
        category: "Support"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Feedback Analysis",
        description: "Analyze customer feedback",
        date: "2026-01-26",
        category: "Analysis"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Escalation Handling",
        description: "Handle escalated issues",
        date: "2026-01-22",
        category: "Support"
      }
    ]
  },
  {
    firstName: "Kunal",
    email: "user8@example.com",
    password: "1234",
    taskCount: { total: 3, active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Content Writing",
        description: "Write blog articles",
        date: "2026-02-01",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "SEO Optimization",
        description: "Optimize content for SEO",
        date: "2026-01-27",
        category: "SEO"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Keyword Research",
        description: "Research new keywords",
        date: "2026-01-21",
        category: "SEO"
      }
    ]
  },
  {
    firstName: "Neha",
    email: "user9@example.com",
    password: "1234",
    taskCount: { total: 3, active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Quality Testing",
        description: "Test new release",
        date: "2026-02-03",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Bug Documentation",
        description: "Document found bugs",
        date: "2026-01-29",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Automation Script",
        description: "Create test automation",
        date: "2026-01-23",
        category: "Automation"
      }
    ]
  },
  {
    firstName: "Priya",
    email: "user10@example.com",
    password: "1234",
    taskCount: { total: 3, active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Financial Review",
        description: "Review monthly expenses",
        date: "2026-02-01",
        category: "Finance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Invoice Processing",
        description: "Process pending invoices",
        date: "2026-01-28",
        category: "Finance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Budget Forecast",
        description: "Prepare budget forecast",
        date: "2026-01-22",
        category: "Planning"
      }
    ]
  }
];

const admin = [
  {
    firstName: "Sanjay",
    email: "admin@example.com",
    password: "1234"
  }
];


export const setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employee));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employeeData = JSON.parse(localStorage.getItem("employee"));
    const adminData = JSON.parse(localStorage.getItem("admin"));
    return { employeeData, adminData };
   
    
}