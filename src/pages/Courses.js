import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Tabs,
  Tab,
  Rating,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  CheckCircle as CheckCircleIcon,
  AccessTime as AccessTimeIcon,
  CalendarToday as CalendarTodayIcon,
  School as SchoolIcon,
  People as PeopleIcon,
} from "@mui/icons-material";
import CourseEnrollDialog from "../components/CourseEnrollDialog";
import PaymentPage from "../components/PaymentPage";
import { useNavigate, useParams } from "react-router-dom";

// Import CSS files
import "../styles/Header.css";
import "../styles/CourseCard.css";
import "../styles/CourseDetail.css";
import "../styles/Courses.css";

// Course Data
const courses = {
  tech: [
    {
      title: "Live Summer Training Courses",
      items: [
        {
          title: "Essential of cyber security",
          description: "Deep dive into Essential of cyber security",
          image: "/img/cyber-security-img.jpg",
          rating: 4.9,
          students: 600,
          price: 550,
          class: "6st May 2025 Onwards",

          duration: {
            live: "15+ hours",
          },
          effort: "Study Material + Project + Live Doubt Clearing",
          level: "Advanced",
          language: "English",
          learningOutcomes: [
            "Proctored exam",
            "Project",
            "Live session",
            "Recording of live session",
          ],
          skills: [
            "Network Security",
            "Cryptography",
            "Threat Detection",
            "Security Protocols",
            "Risk Assessment",
          ],
          requirements: [
            "Basic computer and networking knowledge",
            "Understanding of operating systems",
            "Familiarity with internet and web usage",
            "Interest in cyber threats and digital safety",
          ],
          instructor: {
            name: "Anand Sharma",
            title: "Cyber Security Expert",
            experience: "10 Years of corporate and academic experience",
            bio: "CEH certified\n\nAnand Sharma is a knowledgeable and dedicated trainer in Cyber Security Essentials, equipping students with the skills to identify threats, secure systems, and implement effective protection strategies. His hands-on approach makes learning both practical and engaging.",
            image: "/trainer/Anand-sharma-img.png",
          },
          reviews: [
            {
              name: "Ritika Sinha",
              rating: 5,
              comment:
                "An excellent course for understanding how computers really work. The clarity in explaining CPU architecture and memory design was outstanding.",
              date: "2024-03-15",
            },
            {
              name: "Mohammed Irfan",
              rating: 4.9,
              comment:
                "Loved the detailed breakdown of instruction sets and pipelining. The use of Logisim for hands-on circuit design made concepts stick.",
              date: "2024-03-02",
            },
            {
              name: "Kavya Menon",
              rating: 4.8,
              comment:
                "A very solid foundation in computer architecture. The integration of real-world processor examples made the theory very relatable.",
              date: "2024-02-18",
            },
          ],
          syllabus: [
            {
              week: "Module 1: ",
              content: [
                "Introduction to Information Security (4 Hours)",
                "- Fundamentals of Information Security (CIA Triad, Threats, Attacks)",
                "- Security Policies and Best Practices",
                "- Hands-on Lab: Password Cracking with Hashcat",
                "- Hands-on Lab: Packet Analysis with Wireshark",
              ],
            },

            {
              week: "Module 2: ",
              content: [
                "Network Security & Ethical Hacking Basics (4 Hours)",
                "- Introduction to Network Security",
                "- Hands-on Lab: Network Scanning with Nmap",
                "- Ethical Hacking & Penetration Testing Basics",
                "- Hands-on Lab: Exploiting Vulnerabilities with Metasploit",
              ],
            },
            {
              week: "Module 3: ",
              content: [
                "Web Application Security & Malware Analysis (4 Hours)",
                "- Web Application Security Fundamentals (OWASP Top 10)",
                "- Hands-on Lab: Web Application Penetration Testing with Burp Suite",
                "- Malware Analysis Basics",
                "- Hands-on Lab: Analyzing Malicious Files with VirusTotal & Hybrid Analysis",
              ],
            },
            {
              week: "Module 4: ",
              content: [
                "Security Operations & Incident Response (4 Hours)",
                "- Security Operations & SIEM",
                "- Hands-on Lab: Threat Detection using Splunk or ELK Stack",
                "- Incident Response & Digital Forensics",
                "- Hands-on Lab: Vulnerability Scanning with OpenVAS",
              ],
            },
          ],
        },
        {
          title: "Data visualization using power BI",
          description: "Deep dive into Data visualization using power BI",
          image: "/img/DataVisu.jpg",
          rating: 4.9,
          students: 600,
          price: 599,
          class: "6st May 2025 Onwards",

          duration: {
            live: "20+ hours",
          },
          effort: "Study Material + Project + Live Doubt Clearing",
          level: "Advanced",
          language: "English",
          learningOutcomes: [
            "Proctored exam",
            "Project",
            "Live session",
            "Recording of live session",
          ],
          skills: [
            "Power BI Dashboard Design",
            "Data Cleaning and Transformation",
            "DAX (Data Analysis Expressions)",
            "Interactive Visual Reports",
            "Data Modeling and Relationships",
          ],
          requirements: [
            "Basic understanding of Microsoft Excel",
            "Knowledge of data types and structures",
            "Familiarity with charts and graphs",
            "Interest in visual storytelling and analytics",
          ],
          instructor: {
            name: "Ravinder singh",
            title: "12+ years of experience",
            experience:
              "The Tableau course on Data Visualization and Dashboard Design was led by Ravinder Singh, a seasoned professional with over 12 years of experience in the field. His deep industry knowledge and hands-on teaching approach made complex visualization concepts easy to understand. Through real-world examples and interactive dashboards, he ensured that learners not only grasped the tools but also mastered the art of presenting data effectively.",
            image: "/",
          },
          reviews: [
            {
              name: "Ritika Sinha",
              rating: 5,
              comment:
                "An excellent course for understanding how computers really work. The clarity in explaining CPU architecture and memory design was outstanding.",
              date: "2024-03-15",
            },
            {
              name: "Mohammed Irfan",
              rating: 4.9,
              comment:
                "Loved the detailed breakdown of instruction sets and pipelining. The use of Logisim for hands-on circuit design made concepts stick.",
              date: "2024-03-02",
            },
            {
              name: "Kavya Menon",
              rating: 4.8,
              comment:
                "A very solid foundation in computer architecture. The integration of real-world processor examples made the theory very relatable.",
              date: "2024-02-18",
            },
          ],
          syllabus: [
            {
              week: "Module 1: ",
              content: [
                "Introduction to Information Security (4 Hours)",
                "- Fundamentals of Information Security (CIA Triad, Threats, Attacks)",
                "- Security Policies and Best Practices",
                "- Hands-on Lab: Password Cracking with Hashcat",
                "- Hands-on Lab: Packet Analysis with Wireshark",
              ],
            },

            {
              week: "Module 2: ",
              content: [
                "Network Security & Ethical Hacking Basics (4 Hours)",
                "- Introduction to Network Security",
                "- Hands-on Lab: Network Scanning with Nmap",
                "- Ethical Hacking & Penetration Testing Basics",
                "- Hands-on Lab: Exploiting Vulnerabilities with Metasploit",
              ],
            },
            {
              week: "Module 3: ",
              content: [
                "Web Application Security & Malware Analysis (4 Hours)",
                "- Web Application Security Fundamentals (OWASP Top 10)",
                "- Hands-on Lab: Web Application Penetration Testing with Burp Suite",
                "- Malware Analysis Basics",
                "- Hands-on Lab: Analyzing Malicious Files with VirusTotal & Hybrid Analysis",
              ],
            },
            {
              week: "Module 4: ",
              content: [
                "Security Operations & Incident Response (4 Hours)",
                "- Security Operations & SIEM",
                "- Hands-on Lab: Threat Detection using Splunk or ELK Stack",
                "- Incident Response & Digital Forensics",
                "- Hands-on Lab: Vulnerability Scanning with OpenVAS",
              ],
            },
          ],
        },
        {
          title: "Fundamental of computer network",
          description: "Deep dive into Fundamental of computer network",
          image: "/img/fundamental-computer-img.jpg",
          rating: 4.9,
          students: 600,
          price: 450,
          class: "6st May 2025 Onwards",

          duration: {
            live: "15+ hours",
          },
          effort: "Study Material + Project + Live Doubt Clearing",
          level: "Advanced",
          language: "English",
          learningOutcomes: [
            "Proctored exam",
            "Project",
            "Live session",
            "Recording of live session",
          ],
          skills: [
            "OSI and TCP/IP Models",
            "IP Addressing and Subnetting",
            "Routing and Switching",
            "Network Protocols (HTTP, FTP, DNS, etc.)",
            "Wireless and Wired Networking Concepts",
          ],
          requirements: [
            "Basic understanding of how computers communicate",
            "Familiarity with binary and data transmission concepts",
            "Interest in how networks operate and connect systems",
            "Willingness to troubleshoot and analyze network issues",
          ],
          instructor: {
            name: "Anita Sharma",
            title: "Network Engineer",
            experience: "8+ years in Computer Networking",
            bio: "Experienced network specialist with a strong background in designing, implementing, and maintaining computer networks across diverse environments.",
            image: "/trainer/Anita Sharma Photo.jpeg",
          },
          reviews: [
            {
              name: "Anjali Verma",
              rating: 5,
              comment:
                "This course made Power BI so easy to understand! Creating dashboards and using DAX felt intuitive, even for a beginner like me.",
              date: "2024-04-12",
            },
            {
              name: "Rohan Desai",
              rating: 4.9,
              comment:
                "I appreciated the real-world examples and datasets. The course helped me improve my data storytelling and visual presentation skills.",
              date: "2024-03-27",
            },
            {
              name: "Sneha Kapoor",
              rating: 4.8,
              comment:
                "Clear explanations and step-by-step guidance on Power BI features. The section on data modeling and relationships was particularly useful.",
              date: "2024-03-10",
            },
          ],
          syllabus: [
            {
              week: "Module 1:",
              content: [
                "Introduction to Data Visualization",
                "- Importance of data visualization",
                "- Key principles of effective visuals",
                "- Overview of BI tools",
                "- Introduction to Power BI and its interface",
                "- Power BI Desktop vs Power BI Service",
                "- Loading and transforming data in Power BI",
              ],
            },
            {
              week: "Module 2:",
              content: [
                "Data Preparation and Modeling",
                "- Connecting to various data sources (Excel, SQL, Web)",
                "- Data cleaning with Power Query",
                "- Creating data models and relationships",
                "- Understanding data types and fields",
                "- Introduction to DAX (Data Analysis Expressions)",
                "- Creating calculated columns and measures",
              ],
            },
            {
              week: "Module 3:",
              content: [
                "Building Reports and Dashboards",
                "- Visual elements in Power BI (tables, charts, slicers, maps)",
                "- Creating interactive and dynamic reports",
                "- Using filters and slicers for interactivity",
                "- Designing dashboards for business scenarios",
                "- Custom visuals and formatting options",
                "- Using themes and templates",
              ],
            },
            {
              week: "Module 4:",
              content: [
                "Publishing and Sharing in Power BI",
                "- Publishing reports to Power BI Service",
                "- Creating and managing dashboards in the cloud",
                "- Sharing reports and dashboards securely",
                "- Power BI mobile app overview",
                "- Refreshing datasets and scheduling",
                "- Power BI best practices and performance tips",
              ],
            },
          ],
        },
        {
          title: "Advanced Python for ML & AI",
          description: "Deep dive into machine learning concepts with Python",
          image: "/img/ml-pythons.png",
          rating: 4.9,
          students: 600,
          price: 1899,
          class: "15 June Onwards",

          duration: {
            live: "35+ hours",
          },
          effort: "Study Material + Project + Live Doubt Clearing",
          level: "Advanced",
          language: "English",
          learningOutcomes: [
            "Completion certificate",
            "Project",
            "Live session",
            "Recording of live session",
          ],
          skills: [
            "Python",
            "Machine Learning",
            "Data Analysis",
            "Neural Networks",
            "Deep Learning",
          ],
          requirements: [
            "Basic Python knowledge",
            "Understanding of mathematics",
            "Computer with Python installed",
            "Dedication to practice",
          ],
          instructor: {
            name: "Rahul Jain",
            title: "ML Expert",
            experience: "10+ years in Machine Learning",
            bio: "Leading AI researcher with extensive experience in implementing ML solutions",
            image: "/trainer/Rahul Jain Photo.jpeg",
          },
          reviews: [
            {
              name: "Vikram Malhotra",
              rating: 5,
              comment:
                "Dr. Rodriguez's expertise in ML is evident. The neural network implementations and real-world applications were eye-opening.",
              date: "2024-02-20",
            },
            {
              name: "Neha Shah",
              rating: 4.9,
              comment:
                "Excellent advanced course! The project work helped me understand deep learning concepts thoroughly.",
              date: "2024-02-12",
            },
            {
              name: "Arun Kumar",
              rating: 4.8,
              comment:
                "Best ML course I've taken. The hands-on approach to feature engineering and model evaluation was particularly useful.",
              date: "2024-01-25",
            },
          ],
          syllabus: [
            {
              week: "Week 1",
              content: [
                "Basic Python Programming:",
                "- Python Basics",
                "- Operators",
                "- Loops",
                "- Functions",
                "- Strings",
                "- List, Tuples",
                "- Dictionary, Set",
                "- Object-oriented concepts (OOPs)",
                "- f-strings, lambda functions etc",
              ],
            },
            {
              week: "Week 2",
              content: [
                "Libraries:",
                "- Numpy",
                "- Pandas",
                "- Matplotlib",
                "- Sklearn",
                "- Seaborn",
              ],
            },
            {
              week: "Week 3",
              content: [
                "Introduction to Machine Learning:",
                "- Supervised and Unsupervised Machine Learning",
                "- Algorithms",
                "- Reinforcement Learning",
                "- Classification Tasks",
                "- Clustering Tasks",
              ],
            },
            {
              week: "Week 4",
              content: [
                "Data pre processing and cleaning:",
                "- Data Preprocessing",
                "- Dealing with Missing Data",
                "- Handling Categorical Data",
                "- Splitting a Dataset in Training and Test Sets",
              ],
            },
            {
              week: "Week 5",
              content: [
                "Mathematical Analysis",
                "- Stochastic Gradient Descent",
                "- Hyper parameter tuning",
                "- Regularization",
                "- Bias vs Variance",
                "- Gradient Descent",
                "- Stochastic Gradient Descent",
                "- Batch Gradient Descent",
                "- Mini Batch Gradient Descent",
                "- Hyper parameter tuning",
                "- Regularization",
                "- Bias vs Variance",
              ],
            },
            {
              week: "Week 6",
              content: [
                "Machine Learning Algorithms:",
                "- Linear Regression",
                "- Logistic Regression",
                "- Decision Trees",
                "- Naive Bayes Classifier",
                "- Support Vector Machine",
                "- Clustering",
                "- K-means clustering",
                "- Agglomerative clustering",
              ],
            },
            {
              week: "Week 7",
              content: [
                "Machine Learning & Data Science project:",
                "- Real Estate Price Prediction Project",
              ],
            },
          ],
        },
        {
          title: "Data Structures and Algorithm using Python",
          description:
            "Learn and implement essential data structures using Python",
          image: "/img/data-structures.jpg",
          rating: 4.8,
          students: 950,
          price: 1799,
          class: "15 June Onwards",

          duration: {
            live: "35+ hours",
          },
          effort: "Study Material + Project + Live Doubt Clearing",
          level: "Intermediate",
          language: "English",
          learningOutcomes: [
            "Completion certificate",
            "Project",
            "Live session",
            "Recording of live session",
          ],
          skills: [
            "Python Programming",
            "Data Structures",
            "Algorithms",
            "Problem Solving",
            "Complexity Analysis",
            "Recursion",
            "Searching and Sorting",
            "Stacks and Queues",
            "Linked Lists",
            "Trees and Graphs",
            "Hashing",
            "Algorithm Design",
          ],
          requirements: [
            "Basic knowledge of Python syntax and data types",
            "Familiarity with control flow (if-else, loops, functions)",
            "Logical and analytical thinking",
            "Basic understanding of mathematical concepts",
            "Python 3.x installed on your system",
            "Access to a code editor or IDE (e.g., VS Code, PyCharm)",
            "Willingness to practice regularly and solve problems",
          ],
          instructor: {
            name: "Rahul Jain",
            title: "ML Expert",
            experience: "10+ years in Machine Learning",
            bio: "Leading AI researcher with extensive experience in implementing ML solutions",
            image: "/trainer/Rahul Jain Photo.jpeg",
          },
          reviews: [
            {
              name: "Aarav Mehta",
              rating: 5,
              comment:
                "This course gave me a strong foundation in data structures. The explanations were clear and the coding exercises very helpful.",
              date: "2025-01-20",
            },
            {
              name: "Sneha Reddy",
              rating: 4.9,
              comment:
                "A must for anyone preparing for coding interviews! The problems on trees and graphs were particularly well taught.",
              date: "2025-01-12",
            },
            {
              name: "Rahul Verma",
              rating: 4.8,
              comment:
                "I finally understood time complexity thanks to this course. The project at the end really tied everything together.",
              date: "2025-01-05",
            },
          ],
          syllabus: [
            {
              week: "Week 1",
              content: [
                "Introduction:",
                "- Measuring Running time of Algorithms",
                "- Asymptotic Analysis",
                "- Big O Notation",
                "- Finding Big O, Tight and Loose Upper Bounds",
                "- Introduction Quiz A",
                "- Big O analysis of Algorithms",
                "- Finding Time Complexity",
                "- Big O, Omega, Theta Notations with Graphs",
                "- Worst, Best and Average Case Analysis",
                "- Common Complexities",
                "- Abstract Data Types",
                "- Interview Questions from Introduction of DSA",
                "- GATE and Other Competitive Exam Questions",
                "",
                "Linked Lists:",
                "- Introduction to Linked List",
                "- Traversing and Searching a Single Linked List",
                "- Finding references in a single linked list",
                "- Difference: `while p is not None` vs `while p.link is not None`",
                "- Insertion in a Single Linked List",
                "- Deletion in a Single Linked List",
                "- Reversing a Single Linked List",
                "- Linked List Quiz A",
              ],
            },
            {
              week: "Week 2",
              content: [
                "Linked Lists (continued):",
                "- Sorting a Linked list using Bubble Sort",
                "- Merging of sorted Linked lists",
                "- Sorting using Merge Sort",
                "- Detecting and Removing a cycle",
                "- Doubly Linked List: Insertion, Deletion, Reversing",
                "- Circular Linked List: Insertion, Deletion, Concatenation",
                "- Linked List with Header Node",
                "- Sorted Linked List",
                "- Interview Questions",
                "- GATE and Other Competitive Exam Questions",
              ],
            },
            {
              week: "Week 3",
              content: [
                "Stacks and Queues:",
                "- Stack Introduction, Array & Linked List Implementation",
                "- Queue Introduction, Array & Linked List Implementation",
                "- Circular Queue, Deque, Priority Queue",
                "- Validating expressions with nested parentheses",
                "- Evaluating Arithmetic Expressions",
                "- Polish Notations",
                "- Infix to Postfix Conversion",
                "- Postfix Evaluation",
                "- Stack and Queue Quiz",
                "- Interview Questions",
                "- GATE and Other Competitive Exam Questions",
              ],
            },
            {
              week: "Week 4",
              content: [
                "Binary Trees:",
                "- Introduction to Trees & Binary Tree types",
                "- Array and Linked Representation",
                "- Binary Tree Quiz A",
                "- Binary Tree in Python",
                "- Tree Traversals: Preorder, Inorder, Postorder, Level order",
                "- Height of Binary Tree",
                "- Constructing Binary Tree from Traversals (Inorder + Pre/Post)",
                "- Binary Tree Quiz B",
                "- Interview Questions",
                "- GATE and Other Competitive Exam Questions",
              ],
            },
            {
              week: "Week 5",
              content: [
                "Binary Search Trees:",
                "- Introduction, Traversals, Searching, Min/Max Nodes",
                "- Insertion and Deletion",
                "- Binary Search Tree Quiz",
                "- Interview Questions",
                "- GATE and Other Competitive Exam Questions",
                "",
                "Heap:",
                "- Introduction, Representation, Insertion, Deletion",
                "- Building and Applications",
                "- Heap Quiz",
                "- Interview Questions",
                "- GATE and Other Competitive Exam Questions",
                "",
                "Graphs:",
                "- Introduction, Representation",
                "- BFS vs DFS",
              ],
            },
            {
              week: "Week 6",
              content: [
                "Sorting:",
                "- Introduction, Sort Stability",
                "- Selection Sort: Example, Python, Analysis",
                "- Bubble Sort: Example, Python, Optimization, Analysis",
                "- Sorting Quiz A",
                "- Insertion Sort: Example, Python, Analysis",
                "- Shell Sort: Example, Python, Analysis",
                "- Merging, Recursive & Iterative Merge Sort with Analysis",
                "- Quick Sort: Implementation & Analysis",
                "- Binary Tree Sort: Implementation & Analysis",
                "- Heap Sort: Python Implementation & Analysis",
                "- Radix Sort: Implementation & Analysis",
                "- Sorting Quiz B",
                "- Comparison Chart (Time & Space Complexity)",
                "- Interview Questions",
                "- GATE and Other Competitive Exam Questions",
                "",
                "Searching:",
                "- Linear Search",
                "- Linear Search in Sorted List",
                "- Binary Search: Implementation & Analysis",
                "- Interview Questions",
              ],
            },
            {
              week: "Week 7",
              content: [
                "Hashing:",
                "- Direct Addressing, Hashing, Collisions",
                "- Hash Functions",
                "- Open Addressing: Linear, Quadratic, Double Hashing",
                "- Deletion in Open Addressed Tables",
                "- Implementation of Open Addressing & Separate Chaining",
                "- Interview Questions",
                "- GATE and Other Competitive Exam Questions",
                "",
                "Project Work:",
                "- Hints and Suggestions",
                "- Self Work by Students",
                "- Queries and Discussion",
                "- Conclusion and Future Guidance",
                "- Project: Flight Reservation System",
                "  - System to manage flight reservations, seat allocations, and cancellations",
                "  - Use of Queues, Trees (for seat mapping), Hash Tables (for passengers)",
                "  - Seat assignment, waitlist, schedule optimization",
              ],
            },
            {
              week: "Week 8",
              content: ["Continuation of Project Work and Final Presentations"],
            },
          ],
        },
        {
          title: "Advanced Java Programming with GUI",
          description:
            "Comprehensive Java course from basics to advanced concepts",
          image: "/img/java-programming.jpg",
          rating: 4.8,
          students: 1300,
          price: 1750,
          class: "10 June Onwards",

          duration: {
            live: "35+ hours",
          },
          effort: "Study Material + Project + Live Doubt Clearing",
          level: "Beginner to Advanced",
          language: "English",
          learningOutcomes: [
            "Completion certificate",
            "Project",
            "Live session",
            "Recording of live session",
          ],
          skills: [
            "Java",
            "OOP",
            "Collections",
            "Multithreading",
            "GUI Development",
          ],
          requirements: [
            "No prior programming experience needed",
            "Computer with JDK installed",
            "Interest in software development",
            "Dedication to learn",
          ],
          instructor: {
            name: "Sawal Tandon",
            title: "Sr. Manager Training and development",
            experience: "18+ years in Java Development",
            bio: "Senior Java architect with extensive teaching experience",
            image: "/trainer/Sawal-tandon.jpeg",
          },
          reviews: [
            {
              name: "AMIT CHAUDHARY",
              rating: 4.9,
              comment:
                "Loved the practical part of this course! From creating login pages to building small forms and dashboards, everything was taught step by step. As an engineering student, this helped me with my mini-projects and internal assessments. The explanation of OOP concepts with GUI applications was the best part. Totally worth it.",
              date: "2024-02-14",
            },
            {
              name: "Anjali Deshmukh",
              rating: 4.8,
              comment:
                "Comprehensive coverage from basics to advanced topics. The GUI development section was particularly helpful.",
              date: "2024-02-06",
            },
            {
              name: "Ravi Shankar",
              rating: 4.7,
              comment:
                "The multithreading and collections framework modules were excellent. Great hands-on exercises!",
              date: "2024-01-24",
            },
          ],
          syllabus: [
            {
              week: "Week 1",
              content: [
                "Introduction:",
                "- About the Course",
                "- A Brief History",
                "- Computer Career Research",
                "- Setting up Java",
                "- The Software Development Process",
                "- What is my Program Doing?",
                "- Introduction to Object-Oriented Programming Concepts",
                "- Software Development",
                "- What is a Variable?",
                "- Numeric Data",
                "- Number Systems",
                "- Textual Data",
                "- Converting Between Data Types",
                "- Keyboard Input",
              ],
            },
            {
              week: "Week 2",
              content: [
                "Swing UI:",
                "- Packages",
                "- Components and Containers",
                "- Layouts and Absolute",
                "- Components Class Hierarchy",
                "- Event Handling and Listeners",
                "- Action",
                "- Window, Mouse, Key",
                "- Item, Adjustment",
                "- ListSelection",
                "- Adapter Classes",
                "- Data Types",
                "What is a Method?",
                "- Methods and Library Classes (Using GUI)",
                "- Recursion",
                "- The Import Declaration and Packages",
                "- Java API Documentation",
                "- The String Class",
                "- The Random Class",
                "- The Math Class",
              ],
            },
            {
              week: "Week 3",
              content: [
                "Decision Statements (Using GUI):",
                "- Boolean Expressions and if/else Constructs",
                "- Understanding Conditional Execution",
                "- Relational Operators",
                "- Truth Tables",
                "- De Morgan's Law",
                "- switch Statement",
                "Loops:",
                "- For Loop Constructs (Using GUI)",
                "- while and do-while Loops",
                "- Tracing Java Loops",
                "- Using break and continue Statements",
              ],
            },
            {
              week: "Week 4",
              content: [
                "Creating Classes (Using GUI):",
                "- Creating a Class",
                "- Instantiating Objects",
                "- Constructors",
                "- Overloading Methods",
                "- Java String Project",
                "- Object Interaction and Encapsulation",
                "- static Variables and Methods",
                "- Inheritance",
                "- Polymorphism",
                "- Inheritance and Polymorphism Project",
              ],
            },
            {
              week: "Week 5",
              content: [
                "Arrays and Exceptions (Using GUI):",
                "- One-dimensional Arrays",
                "- ArrayList",
                "- Two-dimensional Arrays",
                "- Arrays Projects",
                "- Sorting and Searching",
                "- Exception Handling",
                "- Debugging Concepts and Techniques",
              ],
            },
          ],
        },
        {
          title: "C++ Programming: OOPs and DSA",
          description: "Master modern C++ programming with practical projects",
          image: "/img/cpp-programming.jpg",
          rating: 4.7,
          students: 900,
          price: 1699,
          class: "15 June Onwards",

          duration: {
            live: "35+ hours",
          },
          effort: "Study Material + Project + Live Doubt Clearing",
          level: "Intermediate",
          language: "English",
          learningOutcomes: [
            "Completion certificate",
            "Project",
            "Live session",
            "Recording of live session",
          ],
          skills: ["C++", "OOP", "STL", "Memory Management", "Problem Solving"],
          requirements: [
            "Basic programming knowledge",
            "Computer with C++ compiler",
            "Understanding of C helpful",
            "Dedication to practice",
          ],
          instructor: {
            name: "Rahul Jain",
            title: "C++ Development Expert",
            experience: "20+ years in Systems Programming",
            bio: "Systems programming specialist with industry experience",
            image: "/trainer/Rahul Jain Photo.jpeg",
          },
          reviews: [
            {
              name: "DIVYA MEHTA",
              rating: 4.8,
              comment:
                "I joined CSE Pathshala on a friend's recommendation and I'm glad I did. Their C++ course not only improved my programming but also boosted my confidence for technical interviews. They're really doing a great job for CSE students like us.",
              date: "2024-02-13",
            },
            {
              name: "PAVVY GREWAL",
              rating: 4.7,
              comment:
                "I joined the C++ course to strengthen my basics and prepare for college placements, and it definitely served the purpose. Topics like OOPs, STL, pointers, and memory management were covered in great detail. The course was beginner-friendly and also included some advanced-level problem-solving, which was perfect for me. The practice sets at the end of each module made a big difference.",
              date: "2024-02-04",
            },
            {
              name: "Varun Malhotra",
              rating: 4.9,
              comment:
                "Excellent course for learning advanced C++ concepts. The practical projects were very engaging.",
              date: "2024-01-26",
            },
          ],
          syllabus: [
            {
              week: "Week 1",
              content: [
                "Basics of C++:",
                "- Introduction of C++",
                "- Data types",
                "- Cin and Cout",
                "- Control structure",
                "- Creating classes",
                "- Class objects",
                "- Accessing class members",
                "- Differences between Structures",
                "- Unions",
                "- Enumerations and Classes",
                "Functions:",
                "- Functions with Default parameters/arguments",
                "- Inline Functions",
                "- Function overloading and Scope rules",
                "- Friend function and friend class",
                "- Reference variables",
                "- Differences between Call by value",
                "- Call by address and call by reference",
                "- Recursion",
              ],
            },
            {
              week: "Week 2",
              content: [
                "Pointers, Reference Variables, Arrays and String Concepts:",
                "- Void pointer",
                "- Pointer arithmetic",
                "- Pointer to pointer",
                "- Possible problems with the use of pointers",
                "- Dangling pointer",
                "- Wild pointer",
                "- Null pointer assignment",
                "- Classes containing pointers",
                "- Pointer to objects",
                "- this pointer",
                "- Array of objects",
                "String class-defining and assigning string objects",
                "Differences between pointer and reference variables",
                "Array declaration and processing in multidimensional array(inside main and inside class)",
                "Pointer to data member",
              ],
            },
            {
              week: "Week 3",
              content: [
                "Data file operations, Constructors, Destructors and File Handling:",
                "- Opening and closing of files",
                "- Modes of file",
                "- File stream functions",
                "- Reading/Writing of files",
                "- Binary file operations",
                "- Classes and file operations",
                "- Structures and file operation",
                "- Manager functions (constructors and destructor)",
                "- Default constructor",
                "- Constructor with default arguments",
                "- Destructors",
                "- Parameterized constructor",
                "- Copy constructor",
                "- Initializer lists",
              ],
            },
            {
              week: "Week 4",
              content: [
                "OOPs Implementation:",
                "- Implementing Object Oriented Approaches",
                "- Implementing Inheritance and Polymorphism",
                "- Exception Handling",
                "- operator overloading",
              ],
            },
            {
              week: "Week 5",
              content: [
                "Data Structures:",
                "- Basics of data structures",
                "- Implementation of Linked List",
                "- Stack",
                "- Queue and Tree using C++",
              ],
            },
            {
              week: "Week 6",
              content: [
                "Searching and Sorting:",
                "- Basics of searching and sorting algorithms",
                "Implementation of:",
              ],
            },
          ],
        },
        {
          title: "Full Stack Web Development: Angular and Next.js",
          description: "Build modern web applications with Angular and Next.js",
          image: "/img/web-development.jpg",
          rating: 4.9,
          students: 750,
          price: 1725,
          class: "10 June Onwards",

          duration: {
            live: "35+ hours",
          },
          effort: "Study Material + Project + Live Doubt Clearing",
          level: "Intermediate to Advanced",
          language: "English",
          learningOutcomes: [
            "Completion certificate",
            "Project",
            "Live session",
            "Recording of live session",
          ],
          skills: [
            "Angular",
            "Next.js",
            "TypeScript",
            "Frontend Development",
            "Backend Integration",
          ],
          requirements: [
            "Basic JavaScript knowledge",
            "HTML and CSS understanding",
            "Node.js installed",
            "Dedication to learn",
          ],
          instructor: {
            name: "Harsh Verma",
            title: "Full Stack Developer",
            experience: "12+ years in Web Development",
            bio: "Senior architect specializing in modern web technologies",
            image: "/instructor-sarah-m.jpg",
          },
          reviews: [
            {
              name: "MEENAKSHI SHARMA",
              rating: 5,
              comment:
                "Hands down, one of the best courses I've done! Angular and Next.js always seemed intimidating with all the moving parts – MongoDB, Express, React, Node. But the way CSE Pathshala broke it down made learning full-stack development much easier.The instructor's teaching style was super friendly and practical. Also, I got guidance on how to deploy my apps on Render and Netlify which was a bonus for me.",
              date: "2024-02-11",
            },
            {
              name: "Zara Khan",
              rating: 4.8,
              comment:
                "Great coverage of modern web development. The state management and API integration sections were particularly useful.",
              date: "2024-02-02",
            },
            {
              name: "Ishaan Joshi",
              rating: 4.9,
              comment:
                "Perfect course for learning full-stack development. The deployment and authentication modules were very practical.",
              date: "2024-01-23",
            },
          ],
          syllabus: [
            {
              week: "Module 1",
              content: [
                "Introduction to Full Stack Development:",
                "- What is Full Stack?",
                "- Angular vs React vs Next.js",
                "- Client-side vs Server-side rendering",
                "- Monorepo structure for Angular + Next.js integration",
              ],
            },
            {
              week: "Module 2",
              content: [
                "Angular Fundamentals:",
                "- Angular CLI and App Structure",
                "- Components, Modules, and Services",
                "- Routing and Lazy Loading",
                "- Data Binding and Forms (Template-driven and Reactive)",
                "- HTTPClient and REST API Calls",
                "- Angular Material UI Basics",
                "🔧 Mini Project: (Frontend Only)",
              ],
            },
            {
              week: "Module 3",
              content: [
                "Next.js Fundamentals (Backend with React):",
                "- Setting up Next.js with TypeScript",
                "- File-based routing and API routes",
                "- Static Generation vs Server-side Rendering (SSR)",
                "- Connecting to MongoDB/PostgreSQL",
                "- Authentication (JWT or NextAuth)",
                "- Environment Variables & API security",
                "🔧 Mini Project",
              ],
            },
            {
              week: "Module 4",
              content: [
                "Advanced Angular Topics:",
                "- State Management using RxJS and Signals",
                "- Angular Interceptors & Guards",
                "- Component Lifecycle Hooks",
                "- Dependency Injection Patterns",
                "- Unit Testing with Jasmine/Karma",
              ],
            },
            {
              week: "Module 5",
              content: [
                "Advanced Next.js & Full Stack Integration:",
                "- API Middleware in Next.js",
                "- Backend Logic in API routes",
                "- Integrating Angular frontend with Next.js backend",
                "- Role-based Access Control",
                "- Deployment using Vercel (Next.js) & Firebase/Netlify (Angular)",
              ],
            },
            {
              week: "Module 6",
              content: [
                "Full Stack Project Development:",
                "👨‍💻 Capstone Project",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Recorded + Live (Hybrid) Course",
      items: [
        {
          title: "Data Science With Excel, Tableau & R Programming",
          description:
            "Master data analysis with Excel, Tableau & R programming",
          image: "/img/data-tableau.jpg",
          rating: 4.7,
          students: 800,
          price: 1599,
          class: "5 June Onwards",

          duration: {
            live: "20+ hours",
            recorded: "15 hours",
          },
          effort: "Study Material + Project + Live Doubt Clearing",
          level: "Beginner to Advanced",
          language: "English",
          learningOutcomes: [
            "Completion certificate",
            "Project",
            "Live session",
            "Recording of live session",
          ],
          skills: [
            "Excel",
            "Tableau",
            "R Programming",
            "Data Visualization",
            "Statistical Analysis",
          ],
          requirements: [
            "Basic computer knowledge",
            "No prior programming experience needed",
            "Excel installed on your computer",
            "Dedication to learn",
          ],
          instructor: {
            name: "Ravinder",
            title: "Data Science Expert",
            experience: "12+ years in Data Analytics",
            bio: "Expert in data visualization and analytics with extensive industry experience",
            image: "/trainer/Ravinder Photo.jpg",
          },
          reviews: [
            {
              name: "RAKSHIT THAKUR",
              rating: 4.7,
              comment:
                "CSE Pathshala truly lives up to its name. The course structure was excellent—everything from supervised to unsupervised learning was explained so well. The best part was the doubt support and the mentor sessions. I felt like I had personal guidance throughout. This is the kind of platform students really need in India.",
              date: "2024-02-05",
            },
            {
              name: "Sneha Gupta",
              rating: 4.9,
              comment:
                "The Excel and Tableau sections were incredibly practical. Prof. Chen's approach to teaching data visualization is outstanding.",
              date: "2024-02-18",
            },
            {
              name: "Ananya Singh",
              rating: 4.8,
              comment:
                "Perfect blend of theory and practical work. The interactive dashboards we created were exactly what I needed for my job.",
              date: "2024-01-30",
            },
          ],
          syllabus: [
            {
              week: "Week 1",
              content: [
                "Introduction:",
                "- What is data science?, Its importance",
                "- Recap of RDBMS",
                "- Data Visualization and its importance",
                "Tableau:",
                "- Introduction to Tableau",
                "- Power of Tableau, Architecture of Tableau",
                "- Charts and Graphs",
                "- Working with Metadata and Data Blending",
                "- Advanced Data Manipulations",
                "- Working with Filters",
              ],
            },
            {
              week: "Week 2",
              content: [
                "Tableau:",
                "- Organizing Data and Visual Analytics",
                "- Working with Mapping",
                "- Working with Calculations and Expressions",
                "- Working with Parameters",
                "- Dashboards and Stories",
                "- Tableau Prep. - Integration of Tableau with R",
              ],
            },
            {
              week: "Week 3",
              content: [
                "R Programming:",
                "- What is R",
                "- R Packages",
                "- Sorting Data Frame",
                "- Matrices and Vectors",
                "- Reading Data from External Files",
              ],
            },
            {
              week: "Week 4",
              content: [
                "R Programming:",
                "- Generating Plots",
                "- Analysis of Variance (ANOVA)",
                "- K-Means Clustering",
                "- Association Rule Mining",
              ],
            },
            {
              week: "Week 5",
              content: [
                "Regression in R:",
                "- Introduction",
                "- Analyzing Relationship with Regression",
                "- Advanced Regression",
              ],
            },
            {
              week: "Week 6",
              content: ["Logistic Regression and Advanced Logistic Regression"],
            },
            {
              week: "Week 7",
              content: [
                "Project: Sales Performance Analysis and Forecasting",
                "- Description: Analyzing sales data using data science techniques with Tableau for visualization and R programming for analysis",
                "- R case studies: Discussion",
              ],
            },
          ],
        },
        {
          title: "C Programming Language",
          description:
            "Master C programming fundamentals and advanced concepts",
          image: "/img/c-programming.png",
          rating: 4.8,
          students: 850,
          price: 1299,
          class: "5 June Onwards",

          duration: {
            live: "20+ hours",
            recorded: "15 hours",
          },
          effort: "Study Material + Project + Live Doubt Clearing",
          level: "Beginner to Intermediate",
          language: "English",
          learningOutcomes: [
            "Completion certificate",
            "Project",
            "Live session",
            "Recording of live session",
          ],
          skills: [
            "C Programming",
            "Problem Solving",
            "Memory Management",
            "Data Structures",
            "Algorithm Design",
          ],
          requirements: [
            "No prior programming experience needed",
            "Computer with C compiler installed",
            "Basic computer knowledge",
            "Dedication to learn",
          ],
          instructor: {
            name: "Rahul Jain",
            title: "C Programming Expert",
            experience: "15+ years in Programming",
            bio: "Expert in systems programming and algorithm design",
            image: "/trainer/Rahul Jain Photo.jpeg",
          },
          reviews: [
            {
              name: "RAJESH KUMAR",
              rating: 4.9,
              comment:
                "Perfect course for beginners! The way pointers and memory management were explained made these complex topics easy to understand. The practice problems after each module really helped reinforce the concepts.",
              date: "2024-02-15",
            },
            {
              name: "PRIYA SHARMA",
              rating: 4.8,
              comment:
                "Great course structure and content. The data structures implementation in C was particularly helpful for my academics.",
              date: "2024-02-08",
            },
            {
              name: "AMIT PATEL",
              rating: 4.7,
              comment:
                "Excellent coverage of both basic and advanced topics. The live doubt clearing sessions were very helpful.",
              date: "2024-01-28",
            },
          ],
          syllabus: [
            {
              week: "Week 1",
              content: [
                "Introduction to C Programming:",
                "- History and Importance of C",
                "- Setting up the Development Environment",
                "- First C Program",
                "- Variables and Data Types",
                "- Operators and Expressions",
                "- Input/Output Operations",
                "- Type Conversion",
                "- Programming Exercises",
              ],
            },
            {
              week: "Week 2",
              content: [
                "Control Structures:",
                "- Decision Making (if, if-else, switch)",
                "- Loops (for, while, do-while)",
                "- Break and Continue",
                "- Nested Control Structures",
                "- Pattern Programming",
                "- Problem Solving",
              ],
            },
            {
              week: "Week 3",
              content: [
                "Functions and Arrays:",
                "- Function Declaration and Definition",
                "- Parameter Passing",
                "- Recursion",
                "- Arrays (1D and 2D)",
                "- Array Operations",
                "- Strings",
                "- String Functions",
                "- Practice Problems",
              ],
            },
            {
              week: "Week 4",
              content: [
                "Pointers and Memory Management:",
                "- Understanding Pointers",
                "- Pointer Arithmetic",
                "- Dynamic Memory Allocation",
                "- Memory Management",
                "- Pointer to Arrays",
                "- Array of Pointers",
                "- Common Pointer Mistakes",
              ],
            },
            {
              week: "Week 5",
              content: [
                "Structures and Unions:",
                "- Defining Structures",
                "- Structure Arrays",
                "- Nested Structures",
                "- Unions",
                "- Typedef",
                "- File Operations",
                "- Error Handling",
              ],
            },
            {
              week: "Week 6",
              content: [
                "Data Structures in C:",
                "- Linked Lists",
                "- Stacks",
                "- Queues",
                "- Basic Tree Operations",
                "- Searching Algorithms",
                "- Sorting Algorithms",
                "- Project Implementation",
              ],
            },
          ],
        },
      ],
    },
  ],
  nonTech: [
    {
      title: "On-demand Live Courses",
      items: [
        {
          title: "Business Communication",
          description: "Master professional communication skills",
          image: "/img/business-communication.jpg",
          rating: 4.7,
          students: 900,
        },
      ],
    },
    {
      title: "Recorded Courses",
      items: [
        {
          title: "Personal Development",
          description: "Self-improvement and soft skills training",
          image: "/img/personal-dev.jpg",
          rating: 4.8,
          students: 1100,
        },
      ],
    },
  ],
  tutorials: [
    {
      title: "Course Materials",
      items: [
        {
          title: "Programming MCQs",
          description: "Practice questions and assessments",
          image: "/img/programming-MCQs.png",
          rating: 4.9,
          students: 3000,
        },
        {
          title: "Compiler Practice",
          description: "Hands-on coding exercises",
          image: "/img/compiler.png",
          rating: 4.8,
          students: 2500,
        },
      ],
    },
  ],
};

// Course Card Component
const CourseCard = ({ course, onEnrollClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="course-card"
  >
    <img src={course.image} alt={course.title} className="course-image" />
    <div className="course-content">
      <Typography variant="h5" className="course-title text-truncate">
        {course.title}
      </Typography>
      <Typography variant="body1" className="course-description">
        {course.description}
      </Typography>

      <Box className="course-meta">
        <Box className="course-rating">
          <Rating value={course.rating} precision={0.1} readOnly />
          <Typography variant="body2">({course.rating})</Typography>
        </Box>

        <Box className="course-duration">
          {(course.duration?.live || course.duration?.recorded) && (
            <>
              {course.duration.live && (
                <Typography variant="body2" color="text.secondary">
                  <AccessTimeIcon
                    fontSize="small"
                    sx={{ mr: 0.5, verticalAlign: "middle" }}
                  />
                  Live Class: {course.duration.live}
                </Typography>
              )}
              {course.duration.recorded && (
                <Typography variant="body2" color="text.secondary">
                  <AccessTimeIcon
                    fontSize="small"
                    sx={{ mr: 0.5, verticalAlign: "middle" }}
                  />
                  Recorded Lecture: {course.duration.recorded}
                </Typography>
              )}
            </>
          )}

          <Typography variant="body2" color="text.secondary">
            <AccessTimeIcon
              fontSize="small"
              sx={{ mr: 0.5, verticalAlign: "middle" }}
            />
            Class start: {course.class || "N/A"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <AccessTimeIcon
              fontSize="small"
              sx={{ mr: 0.5, verticalAlign: "middle" }}
            />
            Price: {course.price || "N/A"}
          </Typography>
        </Box>
      </Box>

      <Button
        variant="contained"
        color="primary"
        className="course-button"
        onClick={() => onEnrollClick(course)}
      >
        Enroll Now
      </Button>
    </div>
  </motion.div>
);

// Course Header Component
const CourseHeader = ({ course }) => (
  <Box className="course-header">
    <Typography variant="h4" className="header-title">
      {course.title}
    </Typography>
    <Typography variant="body1" className="header-description">
      {course.description}
    </Typography>
    <Box className="header-meta">
      <Box className="meta-item">
        <AccessTimeIcon />
        <Typography variant="body2">
          Live: {course.duration?.live || "N/A"}
        </Typography>
      </Box>
    </Box>
  </Box>
);

// Main Component
const Courses = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showEnrollDialog, setShowEnrollDialog] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();
  const { courseSlug } = useParams();

  const handleTabChange = (event, newValue) => setCurrentTab(newValue);

  const getCourseSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleEnrollClick = (course) => {
    const courseSlug = getCourseSlug(course.title);
    navigate(`/course/${courseSlug}`);
    setSelectedCourse(course);
    setShowEnrollDialog(true);
  };

  const handleBackClick = () => {
    navigate("/courses");
    setSelectedCourse(null);
    setShowEnrollDialog(false);
    setShowPayment(false);
  };

  const handleBuyClick = () => {
    setShowPayment(true);
  };

  const renderCourseSection = (section, index) => (
    <Box key={section.title} className="courses-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <Typography variant="h3" className="courses-section-title">
          {section.title}
        </Typography>
        <Box className="courses-grid">
          {section.items.map((course, courseIndex) => (
            <CourseCard
              key={course.title}
              course={course}
              onEnrollClick={handleEnrollClick}
            />
          ))}
        </Box>
      </motion.div>
    </Box>
  );

  return (
    <div className="courses-container">
      <Container>
        {showPayment ? (
          <>
            <Button
              variant="outlined"
              onClick={handleBackClick}
              className="courses-back-button"
              sx={{ mb: 2 }}
            >
              Back to Courses
            </Button>
            <PaymentPage
              course={selectedCourse}
              onClose={() => setShowPayment(false)}
            />
          </>
        ) : (
          <>
            {" "}
            <div className="courses-bg-clr">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="courses-header"
              >
                <h1>Explore Our Courses</h1>
                <p>
                  Discover a wide range of courses designed to help you advance
                  your career and achieve your learning goals. From technical
                  skills to professional development, we've got you covered.
                </p>
              </motion.div>

              <Box className="courses-tabs">
                <Tabs
                  value={currentTab}
                  onChange={handleTabChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  className="courses-tabs-container"
                >
                  <Tab label="Tech Courses" className="courses-tab" />
                  <Tab label="Non-Tech Courses" className="courses-tab" />
                  <Tab label="Tutorials" className="courses-tab" />
                </Tabs>
              </Box>

              {/*<Box className="courses-filters">
                {["All", "Most Popular", "Newest", "Beginner Friendly"].map(
                  (filter) => (
                    <Button
                      key={filter}
                      className="filter-chip"
                      variant="outlined"
                      size="small"
                    >
                      {filter}
                    </Button>
                  )
                )}
              </Box>*/}

              {currentTab === 0 &&
                courses.tech.map((section, index) =>
                  renderCourseSection(section, index)
                )}
              {currentTab === 1 &&
                courses.nonTech.map((section, index) =>
                  renderCourseSection(section, index)
                )}
              {currentTab === 2 &&
                courses.tutorials.map((section, index) =>
                  renderCourseSection(section, index)
                )}
            </div>
          </>
        )}
      </Container>

      <CourseEnrollDialog
        open={showEnrollDialog}
        course={selectedCourse}
        onClose={() => {
          setShowEnrollDialog(false);
          navigate("/courses");
        }}
        onBuyClick={handleBuyClick}
      />
    </div>
  );
};

export default Courses;
