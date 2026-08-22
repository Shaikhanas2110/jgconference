import React, { useState } from "react";
import { FaUser, FaChevronRight } from "react-icons/fa";

function Committees() {
  const sections = [
    {
      title: "Publication Chair",
      members: [
        "Prof. (Dr.) Sailesh Suryanarayan Iyer, Principal, NSIT-IFSCS",
        "Prof. (Dr.) Fernando Otriz Rodriguez, Professor, UAT, Mexico",
        "Dr. Ahmed Elngar, Associate Professor, Beni-Suef University, Egypt",
        "Prof. (Dr.) Anand Nayyar, Vice Chairman, Duy Tan University, Vietnam",
        "Prof. (Dr.) Pawan Whig, Dean Research, VIPS, New Delhi",
      ],
    },
    {
      title: "Keynote Speaker",
      members: [
        "Prof. (Dr.) Anand Nayyar, Vice Chairman, Duy Tan University, Vietnam",
        "Prof. (Dr.) Fernando Otriz Rodriguez, Professor, UAT, Mexico",
        "Prof. (Dr.) Sailesh Suryanarayan Iyer, Principal, NSIT-IFSCS",
        "Dr. Soenil Soebedar, Chairman, SOEBIT Cybersecurity, Netherlands",
        "Prof. (Dr.) Pawan Whig, Dean Research, VIPS, New Delhi",
        "Dr. Farah Jemili, Associate Professor, University of Sousse, Tunisia",
      ],
    },
    {
      title: "General Chair",
      members: [
        "Prof. (Dr.) Sailesh Suryanarayan Iyer",
        "Prof. (Dr.) S.Pushpalatha",
      ],
    },
    {
      title: "National Advisory Board",
      members: [
        "Dr. Subhash Gulabrai Desai, Member, Board of Directors, Aspire Tech Park",
        "Dr. Sushindra Kumar Gupta, Scientist 'C', National Institute of Hydrology, Roorkee, Uttarakhand",
        "Dr. Amit P. Ganatra, Director R&D, Dean FET, The CVM University",
        "Dr. Rupali Atul Mahajan, Associate Professor, Vishwakarma Institute of Technology, Pune",
        "Dr. Biswadip Basu Mallik, Professor, Institute of Engineering & Management, Kolkata",
        "Dr. Shubham Mahajan, AP-II, Amity University Haryana",
        "Dr. Padmavathi Ganapathi, Former Dean & Professor - Computer Science, Avinashilingam Institute for Home Science and Higher Education for Women",
        "Dr. Amit Joshi, Director @ KCCI Global & India; Independent Director @ Yudiz Solutions, KCCI Global; Yudiz Solutions, Ahmedabad, Gujarat, India",
        "Prof. (Dr.) Anand Nayyar, Professor, Scientist, Vice-Chairman (Research), Director - IoT and Intelligent Systems Lab, Duy Tan University, Da Nang City, Vietnam",
        "Prof(Dr.) Fernando Ortiz-Rodríguez, Researcher / Full Professor / IT-AI Advisor @ INDEX / IIA Director, INDEX / IIA, Tamaulipas, Mexico",
        "Ms. Jyotika (Thapar) Athavale, Leading Silicon Functional Safety, Waymo (an Alphabet company), San Francisco Bay Area, USA",
        "Dr. Rajkumar Buyya, Researcher, Innovator, Entrepreneur, Author, Keynote Speaker, , Greater Melbourne Area, Australia",
        "Dr. Ram Kumar G, Ph.D, CISM, PMP, Cyber Security & Risk Leader, , ",
        "Dr. Parikshit Mahalle, Dean - Academics & Professor, Department of AI&DS, VIT, Pune, Pune, Maharashtra, India",
        "Mr. Sai Kiran (Sai Sharma) Oruganti, , , Greater Patna Area, India",
        "Dr. Rajat Moona, Director, IIT Gandhinagar, Gandhinagar, Gujarat, India",
        "Dr. Pavan Duggal, Senior Advocate; AI & Quantum Law / Cyber Law Expert, , South Delhi, Delhi, India",
        "Mr. Sunil Sharma, Managing Director & Vice President - Sales (India & SAARC), Sophos, South Delhi, Delhi, India",
        "Mr. Abhishek Bansal, CISO / Risk & Cybersecurity Leader, Gurugram, Haryana, India",
        "Mr. Tirthankar Dutta, Director @ ServiceNow; Global CIO & CISO, ServiceNow, Mumbai, Maharashtra, India",
        "Mr. Rama Vedashree, Former CEO, Data Security Council of India, Gurgaon, Haryana, India",
        "Dr. Thompho Tshivhase, Criminologist / Discipline Lead & Lecturer, University of Fort Hare, East London, Eastern Cape, South Africa",
        "Dr. Korhan Cengiz, Associate Professor, UKF / BU, Istanbul, Türkiye",
        "Dr. Farah Jemili, Associate Professor (HDR); Internship Director, ISITCOM, Sousse, Tunisia",
        "Prof. (Dr.) Prasun Chakrabarti, Pro Vice Chancellor (Research & Academics), Sir Padampat Singhania University, Udaipur, Vadodara, Gujarat, India",
        "Dr. Sanju Tiwari, Senior Researcher, TIB Hannover, Germany & UAT Mexico, India",
        "Dr. Megha Bhushan, Department of Computer Languages and Systems, University of Sevilla, Spain, Spain",
        "Dr. Rajendrasinh Jadeja, Provost (Vice-Chancellor), Marwadi University, Rajkot, Gujarat, India",
        "Prof. (Dr.) Chirag N. Paunwala, Professor, E&C Department; Chair IEEE Gujarat Section, SCET; IEEE Gujarat Section, Greater Surat Area, Gujarat, India",
        "Dr. Manik Lal Das, Professor and Dean (Faculty), Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT), Gandhinagar, Gujarat, India",
        "Dr. Sudeep Tanwar, Professor & Dean - FoET (PG Studies), , Rajkot, Gujarat, India",
      ],
    },
    {
      title: "TPM",
      members: [
        "Dr. Rajdipsinh Vaghela, Associate Professor, MBIT, CVM University",
        "Dr. Sameer Jain, Faculty, NICMAR Business School, NICMAR University, Pune",
        "Dr. Sushil Kumar Pradhan, Assistant Professor, Centurion University of Technology and Management, Odisha",
        "Chintan Patel, Academic Associate, Indian Institute of Management, Ahmedabad",
        "Ms. Ramya Sakthivel, Research Scholar, SRM Institute of Science and Technology",
        "Dr. Sana Shawl, Assistant Professor, Department of Management Studies, University of Kashmir",
        "Mr. Vipindas Aravindakshan, Cloud Infrastructure Engineer, Brillius Inc.",
        "Dr. Anwar Basha H, Senior Lecturer, INTI International University, Malaysia",
        "Dr. Pooja Sarin, Assistant Professor, OP Jindal Global University, Sonipat, Haryana",
        "Dr. Vishali Sharma, Assistant Professor, NSIT-IFSCS (Affiliated NFSU), Gandhinagar, Gujarat",
      ],
    },
    {
      title: "TPC Members",
      members: [
        "Dr. Monika Thakur, Associate Professor, RIMT University, Punjab",
        "Dr. Kavita Arora, Associate Professor, Manav Rachna, Faridabad",
        "Dr. Sonia G, Associate Professor, Shoolini University, HP",
        "Dr. Chiranjeevi, Associate Professor, ACE Engineering College, Hyderabad",
        "Dr. Tanmay Kasbe, Associate Professor, Shree Vaishnav Vidyapeeth, Indore",
        "Dr. Rajdipsinh Vaghela, Associate Professor, MBIT, CVM University, Anand",
        "Dr. Biswadip Basu Malik, Professor, Department of Basic Science & Humanities at the Institute of Engineering & Management, University of Engineering and Management, Kolkata",
        "Dr. Shashi Kant Gupta, Founder and CEO, Chinmay Research Education and Publication Private Limited",
        "Dr. Neha Gupta, Associate Professor, Symbiosis University of Applied Sciences",
        "Dr. Sonali Vyas, Associate Professor, JK Lakshmipat University, Jaipur",
        "Dr. Sai Sudha Gadde, Assistant Professor, K.L University, Hyderabad",
        "Dr. Monica Ghalawat, Associate Professor, L J University. Ahmedabad",
        "Dr. Devarshi, Associate Professor, GLS University, Ahmedabad",
        "Dr. Shanti Verma, Director, Lokmanya College of Computer Applications, Ahmedabad",
        "Dr. Abhijitsinh Jadeja, Professor, Shri C.J Patel Insitute of Computer Studies, Sankalchand Patel University, Visnagar",
        "Dr. Perepi Rajrajeshwari, Associate Professor, VIT, Vellore",
        "Dr. Anwar Basha, Associate Professor, Rajalakshmi Institute of Technology, Chennai",
        "Dr. Ashwin Dobariya, Associate Professor, Marwadi University, Rajkot",
        "Dr. Brijesh Jajal, Professor, iAR, Gandhinagar",
        "Dr. Madhuri Patil, Assistant Professor, Shah And Anchor Kutchhi Engineering College",
        "Dr. Poonam Chakravarty, Principal, Diploma, Rai School of Engineering, Rai University",
        "Dr. Yogeshvari Makawana, Monark University, Ahmedabad",
        "Dr. S. Pushpalatha, Director, J.G. College of Computer Applications, Ahmedabad",
        "Dr. Nitish Pathak, Associate Professor, Bhagwan Parshuram Institute Of Technology. New Delhi",
        "Dr. Ravi Sheth, Senior Assistant Professor, Rashtriya Raksha University, Gandhinagar",
        "Dr. Manali Brahmbhatt, Assistant Professor, St. Xaviers College, Ahmedabad",
        "Mr. Vaibhav Gandhi, Assistant Professor, MBIT, CVM University, Anand",
        "Dr. Navtej Bhatt, Assistant Professor, CHARUSAT University, Changa",
        "Dr. Megha Bhushan, Faculty, Department of Computer Languages and Systems, University of Sevilla, Spain",
        "Dr. Arti Jain, Assistant Professor (Sr. Grade), Jaypee Institute of Information Technology, Noida",
        "Dr. Ankit Oza, Assistant Professor, Chandigarh University",
        "Dr. Panem, Assistant Professor, NFSU, Goa",
        "Dr. Harish Morwani, Associate Professor, Sardar Vallabhbhai Global University, Ahmedabad",
        "Dr. Sumegh Tharewal, Associate Professor, DBS Global University, Dehradun",
        "Dr. Rupali Mahajan, Associate Professor, VIIT, Pune",
        "Dr. Kamal Malik, Professor, Maharishi Markandeshwar (Deemed to be University), Haryana",
        "Dr. Rajiv Iyer, Associate Professor, Amity University, Mumbai",
        "Dr. Sridhar Iyer, Professor",
        "Dr. Ramesh Prajapati, Professor, SSIT, Gandhinagar",
        "Dr. Angira Patel, Associate Professor, Gandhinagar University",
        "Dr. Udit Mamodiya, Associate Professor, Poornima University",
        "Dr. Meenu Gupta, Professor, Chandigarh University",
        "Dr. Pushan Kumar Dutta, Associate Professor, Amity University, Kolkatta",
        "Dr. Shubham Mahajan, Assistant Professor, Amity University, Gurugram",
        "Dr. Chetan Dhudagara, Assistant Professor, Anand Agricultural University, Anand",
        "Dr. Saikat, Associate Professor, Symbiosis International University, Pune",
        "Dr. Kamal Kant Hiran, Associate Professor, SPSU, Udaipur",
        "Dr. K.C. Roy, Professor, Indus University, Ahmedabad",
        "Dr. Akash Saxena, Principal, Compucom Institute of Technology and Management (CITM), Jaipur",
        "Dr. Raviraj Vaghela, Assistant Professor, NFSU, Uganda",
        "Dr. Mahipal Jadeja, Assistant Professor, NIT, Jaipur",
        "Dr. Chirag Paunwala, Professor, Sarvajanik University, Surat",
        "Dr. Adarsh Kumar, Professor, UPC, Catalunya, Spain",
        "Dr. Gaurav Gupta, Professor, Shoolini University",
        "Dr. Manju Khari, Professor, JNU, New Delhi",
        "Dr. Pawan Whig, Professor, VIPS, New Delhi",
        "Dr. Vinayak Gupta, Assistant Professor, Lovely Professional University",
        "Dr. Surbhi Mathur, Associate Professor, NFSU, Gandhinagar",
        "Dr. Qasem Abu, Professor, Jordan University of Science and Technology, Jordan",
        "Dr. Khadija Slimani, Associate Professor, ESIEA, Paris, France",
        "Dr. Farah Jemili, Associate Professor, University of Sousse, Tunisia",
        "Dr. Sanju Tiwari, Professor, Sharda University",
        "Dr. Sudeep Tanwar, Professor & Dean, FOET, Marwadi University",
        "Dr. Fernando Otriz Rodriguez, Professor, UAT, Mexico",
        "Dr. Mueen Uddin, Associate Professor, College of Computing and IT, University of Doha for Science and Technology, Qatar",
        "Dr. Korhan Cengiz, Associate Professor, Biruni University",
        "Dr. Kusum Yadav, Associate Professor, University of Hail, Saudi Arabia",
        "Dr. Thittaporn Ganokratnaa, Univeristy Lecturer and Researcher, King Mongkut's University of Technology Thonburi",
        "Dr. Surbhi Bhatia Khan, Professor, University of Salford, United Kingdom",
        "Mr. Ramesh Kumar Poonia, Professor, Christ University",
        "Dr. Saurabh Jain, Professor, UPES, Dehradun",
        "Dr. Jawar Singh, Professor, IIT, Patna",
        "Dr. Keshav Kaushik, Associate Professor, Sharda University",
        "Mr. Amer El Rahwan, Academic and Research Officer, United Nations",
        "Dr. Jaiprakash Verma, Associate Professor, Nirma University",
        "Dr. Zarina Poberezhna, Associate Professor, National Aviation University",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [openMobileIndex, setOpenMobileIndex] = useState(0);
  const active = sections[activeIndex];

  const renderMemberRow = (member, idx, fixedHeight = false) => (
    <div
      key={idx}
      className={`flex items-center gap-2.5 p-2 sm:p-2.5 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors ${
        fixedHeight ? "h-[76px] sm:h-[84px] overflow-hidden" : ""
      }`}
    >
      <span className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 bg-red-800 rounded-full flex items-center justify-center text-white">
        <FaUser className="text-xs sm:text-sm" />
      </span>
      <p
        className={`text-gray-700 text-sm sm:text-base break-words ${
          fixedHeight ? "line-clamp-3" : ""
        }`}
      >
        {member}
      </p>
    </div>
  );

  const renderSectionBody = (section, { multiColumn = false } = {}) =>
    !section.isGrouped ? (
      multiColumn ? (
        (() => {
          const total = section.members.length;
          const columnCount = total > 50 ? 3 : 2;
          const perColumn = Math.ceil(total / columnCount);
          return (
            <div
              className="grid gap-x-4 lg:gap-x-6 gap-y-2 sm:gap-y-2.5"
              style={{
                gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${perColumn}, auto)`,
                gridAutoFlow: "column",
              }}
            >
              {section.members.map((member, idx) =>
                renderMemberRow(member, idx, true),
              )}
            </div>
          );
        })()
      ) : (
        <div className="space-y-2 sm:space-y-2.5">
          {section.members.map((member, idx) => renderMemberRow(member, idx))}
        </div>
      )
    ) : (
      <div className="space-y-6 sm:space-y-8">
        {section.groups.map((group, gIdx) => (
          <div key={gIdx}>
            <h3 className="text-base sm:text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 flex-shrink-0 bg-yellow-400 rounded-full flex items-center justify-center text-red-900 text-xs font-bold">
                {gIdx + 1}
              </span>
              <span className="break-words">{group.groupTitle}</span>
            </h3>
            <div className="space-y-2.5 sm:space-y-3 pl-4 sm:pl-8">
              {group.members.map((member, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <span className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 bg-red-800 rounded-full flex items-center justify-center text-white">
                    <FaUser className="text-xs" />
                  </span>
                  <p className="text-gray-700 text-sm break-words">{member}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-950 via-red-800 to-red-900 text-white py-10">
        {/* Plexus network line pattern overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-55 pointer-events-none mix-blend-screen"
          viewBox="0 0 700 320"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <line
            x1="44.5"
            y1="122.1"
            x2="78.1"
            y2="139.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="603.2"
            y1="184.8"
            x2="554.5"
            y2="135.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="55.9"
            y1="74.5"
            x2="63.6"
            y2="15.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="670.0"
            y1="107.7"
            x2="698.3"
            y2="163.0"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="613.5"
            y1="100.7"
            x2="554.5"
            y2="135.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="580.6"
            y1="197.9"
            x2="603.2"
            y2="184.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="192.5"
            y1="71.4"
            x2="160.3"
            y2="10.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="565.0"
            y1="233.5"
            x2="590.0"
            y2="248.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="259.1"
            y1="67.0"
            x2="220.8"
            y2="85.7"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="692.7"
            y1="204.8"
            x2="697.3"
            y2="169.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="375.4"
            y1="311.4"
            x2="389.9"
            y2="219.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="64.9"
            y1="30.9"
            x2="63.6"
            y2="15.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="454.9"
            y1="174.4"
            x2="458.8"
            y2="126.6"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="159.5"
            y1="92.6"
            x2="185.4"
            y2="78.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="670.0"
            y1="107.7"
            x2="613.5"
            y2="100.7"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="18.6"
            y1="63.6"
            x2="64.9"
            y2="30.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="445.0"
            y1="116.7"
            x2="458.8"
            y2="126.6"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="70.7"
            y1="89.0"
            x2="114.4"
            y2="121.4"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="640.2"
            y1="146.8"
            x2="697.3"
            y2="169.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="295.3"
            y1="9.5"
            x2="259.1"
            y2="67.0"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="670.0"
            y1="107.7"
            x2="640.2"
            y2="146.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="454.9"
            y1="174.4"
            x2="477.2"
            y2="171.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="70.7"
            y1="89.0"
            x2="44.5"
            y2="122.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="565.0"
            y1="233.5"
            x2="580.6"
            y2="197.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="76.8"
            y1="200.8"
            x2="78.1"
            y2="139.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="515.5"
            y1="216.5"
            x2="453.6"
            y2="194.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="692.7"
            y1="204.8"
            x2="698.3"
            y2="163.0"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="154.3"
            y1="188.6"
            x2="186.8"
            y2="205.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="55.9"
            y1="74.5"
            x2="70.7"
            y2="89.0"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="593.2"
            y1="193.2"
            x2="603.2"
            y2="184.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="564.1"
            y1="223.4"
            x2="565.0"
            y2="233.5"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="453.6"
            y1="194.9"
            x2="389.9"
            y2="219.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="192.5"
            y1="71.4"
            x2="159.5"
            y2="92.6"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="458.8"
            y1="126.6"
            x2="477.2"
            y2="171.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="192.5"
            y1="71.4"
            x2="185.4"
            y2="78.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="624.5"
            y1="27.8"
            x2="670.0"
            y2="107.7"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="698.3"
            y1="163.0"
            x2="697.3"
            y2="169.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="295.3"
            y1="9.5"
            x2="238.2"
            y2="49.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="640.2"
            y1="146.8"
            x2="698.3"
            y2="163.0"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="580.6"
            y1="197.9"
            x2="554.5"
            y2="135.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="220.8"
            y1="85.7"
            x2="185.4"
            y2="78.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="238.2"
            y1="49.8"
            x2="259.1"
            y2="67.0"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="603.2"
            y1="184.8"
            x2="640.2"
            y2="146.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="453.6"
            y1="194.9"
            x2="477.2"
            y2="171.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="238.2"
            y1="49.8"
            x2="220.8"
            y2="85.7"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="259.1"
            y1="67.0"
            x2="279.6"
            y2="70.2"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="18.6"
            y1="63.6"
            x2="55.9"
            y2="74.5"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="159.5"
            y1="92.6"
            x2="114.4"
            y2="121.4"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="186.9"
            y1="299.7"
            x2="186.8"
            y2="205.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="613.5"
            y1="100.7"
            x2="640.2"
            y2="146.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="515.5"
            y1="216.5"
            x2="565.0"
            y2="233.5"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="76.8"
            y1="200.8"
            x2="8.0"
            y2="230.6"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="265.0"
            y1="176.7"
            x2="186.8"
            y2="205.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="119.8"
            y1="233.3"
            x2="186.8"
            y2="205.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="692.7"
            y1="204.8"
            x2="679.8"
            y2="275.4"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="580.6"
            y1="197.9"
            x2="590.0"
            y2="248.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="447.6"
            y1="8.0"
            x2="493.2"
            y2="14.7"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="119.8"
            y1="233.3"
            x2="76.8"
            y2="200.8"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="153.0"
            y1="161.7"
            x2="186.8"
            y2="205.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="624.5"
            y1="27.8"
            x2="566.6"
            y2="2.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="593.2"
            y1="193.2"
            x2="580.6"
            y2="197.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="159.5"
            y1="92.6"
            x2="160.3"
            y2="10.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="18.6"
            y1="63.6"
            x2="63.6"
            y2="15.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="564.1"
            y1="223.4"
            x2="593.2"
            y2="193.2"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="515.5"
            y1="216.5"
            x2="564.1"
            y2="223.4"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="564.1"
            y1="223.4"
            x2="590.0"
            y2="248.3"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="447.6"
            y1="8.0"
            x2="393.0"
            y2="84.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="454.9"
            y1="174.4"
            x2="453.6"
            y2="194.9"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="153.0"
            y1="161.7"
            x2="154.3"
            y2="188.6"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="375.4"
            y1="311.4"
            x2="317.6"
            y2="305.2"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <line
            x1="458.8"
            y1="126.6"
            x2="393.0"
            y2="84.1"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <circle cx="447.6" cy="8.0" r="1.2" fill="white" opacity="0.5" />
          <circle cx="192.5" cy="71.4" r="2.8" fill="white" opacity="0.9" />
          <circle cx="515.5" cy="216.5" r="1.2" fill="white" opacity="0.5" />
          <circle cx="624.5" cy="27.8" r="2.8" fill="white" opacity="0.9" />
          <circle cx="295.3" cy="9.5" r="1.2" fill="white" opacity="0.5" />
          <circle cx="153.0" cy="161.7" r="1.2" fill="white" opacity="0.5" />
          <circle cx="18.6" cy="63.6" r="2.8" fill="white" opacity="0.9" />
          <circle cx="454.9" cy="174.4" r="2.8" fill="white" opacity="0.9" />
          <circle cx="154.3" cy="188.6" r="1.2" fill="white" opacity="0.5" />
          <circle cx="566.6" cy="2.1" r="1.2" fill="white" opacity="0.5" />
          <circle cx="564.1" cy="223.4" r="1.2" fill="white" opacity="0.5" />
          <circle cx="238.2" cy="49.8" r="1.2" fill="white" opacity="0.5" />
          <circle cx="670.0" cy="107.7" r="2.8" fill="white" opacity="0.9" />
          <circle cx="64.9" cy="30.9" r="2.8" fill="white" opacity="0.9" />
          <circle cx="593.2" cy="193.2" r="1.2" fill="white" opacity="0.5" />
          <circle cx="565.0" cy="233.5" r="2.8" fill="white" opacity="0.9" />
          <circle cx="375.4" cy="311.4" r="1.2" fill="white" opacity="0.5" />
          <circle cx="265.0" cy="176.7" r="2.2" fill="white" opacity="0.9" />
          <circle cx="580.6" cy="197.9" r="1.2" fill="white" opacity="0.5" />
          <circle cx="603.2" cy="184.8" r="1.2" fill="white" opacity="0.5" />
          <circle cx="493.2" cy="14.7" r="1.2" fill="white" opacity="0.5" />
          <circle cx="159.5" cy="92.6" r="1.2" fill="white" opacity="0.5" />
          <circle cx="55.9" cy="74.5" r="1.2" fill="white" opacity="0.5" />
          <circle cx="70.7" cy="89.0" r="1.2" fill="white" opacity="0.5" />
          <circle cx="445.0" cy="116.7" r="1.2" fill="white" opacity="0.5" />
          <circle cx="259.1" cy="67.0" r="2.8" fill="white" opacity="0.9" />
          <circle cx="186.9" cy="299.7" r="1.2" fill="white" opacity="0.5" />
          <circle cx="453.6" cy="194.9" r="1.2" fill="white" opacity="0.5" />
          <circle cx="119.8" cy="233.3" r="2.2" fill="white" opacity="0.9" />
          <circle cx="114.4" cy="121.4" r="1.2" fill="white" opacity="0.5" />
          <circle cx="692.7" cy="204.8" r="2.8" fill="white" opacity="0.9" />
          <circle cx="389.9" cy="219.1" r="1.2" fill="white" opacity="0.5" />
          <circle cx="590.0" cy="248.3" r="1.2" fill="white" opacity="0.5" />
          <circle cx="160.3" cy="10.3" r="2.2" fill="white" opacity="0.9" />
          <circle cx="220.8" cy="85.7" r="2.8" fill="white" opacity="0.9" />
          <circle cx="147.7" cy="301.7" r="1.2" fill="white" opacity="0.5" />
          <circle cx="613.5" cy="100.7" r="1.2" fill="white" opacity="0.5" />
          <circle cx="458.8" cy="126.6" r="2.8" fill="white" opacity="0.9" />
          <circle cx="640.2" cy="146.8" r="2.8" fill="white" opacity="0.9" />
          <circle cx="185.4" cy="78.9" r="2.2" fill="white" opacity="0.9" />
          <circle cx="393.0" cy="84.1" r="1.2" fill="white" opacity="0.5" />
          <circle cx="409.2" cy="287.3" r="2.8" fill="white" opacity="0.9" />
          <circle cx="279.6" cy="70.2" r="1.2" fill="white" opacity="0.5" />
          <circle cx="698.3" cy="163.0" r="1.2" fill="white" opacity="0.5" />
          <circle cx="63.6" cy="15.1" r="2.2" fill="white" opacity="0.9" />
          <circle cx="76.8" cy="200.8" r="1.2" fill="white" opacity="0.5" />
          <circle cx="554.5" cy="135.1" r="2.2" fill="white" opacity="0.9" />
          <circle cx="44.5" cy="122.1" r="2.8" fill="white" opacity="0.9" />
          <circle cx="697.3" cy="169.3" r="2.2" fill="white" opacity="0.9" />
          <circle cx="679.8" cy="275.4" r="1.2" fill="white" opacity="0.5" />
          <circle cx="8.0" cy="230.6" r="1.2" fill="white" opacity="0.5" />
          <circle cx="477.2" cy="171.8" r="1.2" fill="white" opacity="0.5" />
          <circle cx="186.8" cy="205.1" r="1.2" fill="white" opacity="0.5" />
          <circle cx="78.1" cy="139.1" r="1.2" fill="white" opacity="0.5" />
          <circle cx="317.6" cy="305.2" r="1.2" fill="white" opacity="0.5" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <span className="inline-block text-s font-semibold tracking-widest text-yellow-400 uppercase mb-3">
            ICSISDG 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Committees
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-red-100">
            Meet the organizing committees driving ICSISDG 2026
          </p>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-6 sm:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Mobile: accordion — every committee name is visible up front, tap to expand its members in place */}
          <div className="md:hidden space-y-3">
            {sections.map((section, index) => {
              const isOpen = openMobileIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenMobileIndex(isOpen ? -1 : index)}
                    className={`w-full text-left px-4 py-4 flex items-center justify-between gap-2 transition-colors ${
                      isOpen ? "bg-red-800 text-white" : "text-gray-800"
                    }`}
                  >
                    <span className="font-semibold flex items-center gap-3">
                      <span className="w-1.5 h-6 bg-yellow-400 rounded-full flex-shrink-0"></span>
                      {section.title}
                    </span>
                    <FaChevronRight
                      className={`text-xs flex-shrink-0 transition-transform ${
                        isOpen ? "rotate-90 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 border-t border-gray-100">
                      {renderSectionBody(section)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop: Title tabs on top + member list below */}
          <div className="hidden md:block">
            {/* Title Navigation Row */}
            <div className="bg-white rounded-xl shadow-lg p-3 mb-8 flex flex-wrap justify-center gap-3">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`px-5 py-3 rounded-lg flex items-center gap-2 transition-colors ${
                    activeIndex === index
                      ? "bg-red-800 text-white font-semibold"
                      : "text-gray-700 hover:bg-red-50"
                  }`}
                >
                  <span
                    className={`w-1.5 h-5 rounded-full flex-shrink-0 ${
                      activeIndex === index ? "bg-yellow-400" : "bg-gray-200"
                    }`}
                  ></span>
                  <span>{section.title}</span>
                </button>
              ))}
            </div>

            {/* Member List Below */}
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-yellow-400 rounded-full"></span>
                {active.title}
              </h2>
              {renderSectionBody(active, { multiColumn: true })}
            </div>
          </div>
        </div>
      </section>

      {/* International Advisory Board */}
      {/* <section className="py-8 sm:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800 mb-8 sm:mb-10 flex items-center gap-3">
            <span className="w-2 h-8 bg-yellow-400 rounded-full"></span>
            International Advisory Board
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              "Waiswa Ronald Mirondo, Strategic Coordination Expert, African Union Commission",
              "Frank Funkeye Sapele, Associate Professor & Head of Department, University of Africa, Toru-Orua, Bayelsa State, Nigeria",
              "Farah Jemili, Associate Professor, ISITCom, University of Sousse, Tunisia",
              "Dr. Mueen Uddin, Professor, University of Doha for Science and Technology, Qatar",
              "Prof. (Dr.) Anand Nayyar, Professor, Scientist & Vice-Chairman (Research), Duy Tan University, Da Nang, Vietnam",
            ].map((member, index) => (
              <div
                key={index}
                className="bg-red-50 rounded-xl p-5 sm:p-6 text-center shadow-lg"
              >
                <FaUser className="text-red-700 text-2xl sm:text-3xl mx-auto mb-3 sm:mb-4" />
                <p className="text-gray-700 font-semibold text-sm sm:text-base break-words">
                  {member}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Committees;
