const emp = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@gmail.com",
    password: "123",
    role: "employee",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 3,
      failed: 1
    },
    tasks: [
      {
        title: "Prepare Report",
        description: "Prepare a detailed monthly sales report by collecting accurate data from multiple departments, analyzing sales performance, comparing previous months, identifying trends, and presenting the findings clearly to management.",
        date: "2026-01-10",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client Call",
        description: "Call the client to discuss project requirements in detail, understand their expectations, clarify technical doubts, confirm timelines, and ensure smooth communication for successful project execution.",
        date: "2026-01-08",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update CRM",
        description: "Update customer details in the CRM system by verifying contact information, correcting outdated records, adding recent interactions, and maintaining clean and accurate data for business analysis.",
        date: "2026-01-09",
        category: "Data Entry",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Team Sync",
        description: "Attend the daily team sync meeting to share work progress, discuss ongoing tasks, identify blockers, collaborate with teammates, and plan priorities for the rest of the working day.",
        date: "2026-01-11",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Email Follow-up",
        description: "Send professional follow-up emails to clients and stakeholders regarding pending tasks, approvals, previous discussions, and next steps to maintain strong and clear communication.",
        date: "2026-01-12",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 2,
    firstName: "Emma",
    lastName: "Watson",
    email: "emma.watson@gmail.com",
    password: "123",
    role: "employee",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Design Banner",
        description: "Design a creative and visually appealing banner for the marketing campaign by following brand guidelines, selecting appropriate colors, typography, and ensuring high-quality graphics.",
        date: "2026-01-11",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix UI Bug",
        description: "Identify and fix the UI alignment issue in the navigation bar by debugging CSS styles, testing across browsers, and ensuring a responsive and consistent user interface.",
        date: "2026-01-07",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Attend the weekly team meeting to discuss project updates, share feedback, align on goals, and coordinate upcoming tasks with designers and developers.",
        date: "2026-01-06",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Prototype Review",
        description: "Review the UI prototype carefully by checking layout consistency, usability, color combinations, and overall user experience before final approval.",
        date: "2026-01-09",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Asset Upload",
        description: "Upload finalized design assets to the shared platform by organizing files properly, naming them clearly, and ensuring they meet project specifications.",
        date: "2026-01-12",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 3,
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex.johnson@gmail.com",
    password: "123",
    role: "employee",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Test Application",
        description: "Perform thorough unit testing on the application by validating individual components, identifying bugs, ensuring expected behavior, and documenting results for developers.",
        date: "2026-01-12",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Bug Report",
        description: "Create detailed bug reports for identified issues, including steps to reproduce, screenshots, expected behavior, and severity level for efficient fixing.",
        date: "2026-01-08",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deploy Build",
        description: "Deploy the latest application build on the server by following deployment procedures, verifying configurations, and ensuring system stability after deployment.",
        date: "2026-01-09",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Regression Test",
        description: "Perform regression testing to ensure previously developed features continue to function correctly after recent code changes or updates.",
        date: "2026-01-11",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Documentation",
        description: "Write detailed test documentation and test cases by clearly explaining scenarios, expected results, and execution steps for future reference.",
        date: "2026-01-10",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 4,
    firstName: "Sarah",
    lastName: "Brown",
    email: "sarah.brown@gmail.com",
    password: "123",
    role: "employee",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Content Writing",
        description: "Write a high-quality blog post by researching the topic, structuring content properly, using engaging language, and ensuring it aligns with brand tone.",
        date: "2026-01-10",
        category: "Content",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "SEO Check",
        description: "Analyze SEO keywords and website performance by reviewing search rankings, optimizing content, and suggesting improvements to increase visibility.",
        date: "2026-01-07",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Social Media Post",
        description: "Create and publish a social media post by designing engaging content, writing captions, and scheduling it for maximum audience reach.",
        date: "2026-01-08",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Newsletter",
        description: "Prepare an email newsletter by compiling recent updates, formatting content attractively, and ensuring clear communication with subscribers.",
        date: "2026-01-11",
        category: "Content",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Content Review",
        description: "Review previously published blogs to improve clarity, update outdated information, and ensure consistency with current content standards.",
        date: "2026-01-12",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 5,
    firstName: "Michael",
    lastName: "Smith",
    email: "michael.smith@gmail.com",
    password: "123",
    role: "employee",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Inventory Check",
        description: "Check inventory stock availability by reviewing records, verifying physical stock, identifying shortages, and reporting discrepancies to management.",
        date: "2026-01-11",
        category: "Operations",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Vendor Call",
        description: "Call vendors to discuss pricing details, negotiate better rates, confirm delivery schedules, and maintain strong professional relationships.",
        date: "2026-01-06",
        category: "Operations",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Order Processing",
        description: "Process pending orders by verifying customer details, coordinating with logistics, updating order status, and ensuring timely delivery.",
        date: "2026-01-07",
        category: "Operations",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Invoice Check",
        description: "Verify invoices by cross-checking amounts, validating payment terms, identifying errors, and coordinating with the finance department.",
        date: "2026-01-09",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Stock Update",
        description: "Update inventory records by entering accurate stock data, tracking incoming and outgoing items, and maintaining up-to-date system information.",
        date: "2026-01-12",
        category: "Operations",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];





const adm=[
   {
      id: 1,
      firstName: "Sharvari",
    lastName: "kale",
      email: "sharvari@gmail.com",
    password: "123",
      role: "admin"
    }
]

export const setLocalstorage=()=>{
    localStorage.setItem("emp",JSON.stringify(emp))
    localStorage.setItem("adm",JSON.stringify(adm))
}

export const getLocalstorage=()=>{
  const employee=JSON.parse(localStorage.getItem('emp'))
   
  const admin=JSON.parse(localStorage.getItem("adm"))

  return {employee,admin}
}

export const setCurrentUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
}
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
}

export const removeCurrentUser=()=>{
  return localStorage.removeItem('currentUser')
}
