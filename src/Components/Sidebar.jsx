// Sidebar.js
import React from "react";
import Logo from "../assets/SideBarIcons/Logo.png";

function DashBoardIcon()
{
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        fill="none"
        viewBox="0 0 21 20"
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8.833 2.5H3v5.833h5.833V2.5zM18 2.5h-5.834v5.833h5.833V2.5zM18 11.666h-5.834V17.5h5.833v-5.834zM8.833 11.667H3V17.5h5.833v-5.833z"
        ></path>
      </svg>
  )
}

function ClientManagement() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
    >
      <g
        stroke="#E8F9FE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#clip0_84_556)"
      >
        <path d="M14.667 17.5v-1.667a3.333 3.333 0 00-3.333-3.333H4.667a3.333 3.333 0 00-3.333 3.333V17.5M8 9.167A3.333 3.333 0 108 2.5a3.333 3.333 0 000 6.667zM19.666 17.5v-1.667a3.333 3.333 0 00-2.5-3.225M13.834 2.608a3.334 3.334 0 010 6.459"></path>
      </g>
      <defs>
        <clipPath id="clip0_84_556">
          <path fill="#fff" d="M0 0H20V20H0z" transform="translate(.5)"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function Calendar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
    >
      <path
        stroke="#E8F9FE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.333 3.333H4.667C3.747 3.333 3 4.08 3 5v11.667c0 .92.746 1.666 1.667 1.666h11.666c.92 0 1.667-.746 1.667-1.666V5c0-.92-.746-1.667-1.667-1.667zM13.834 1.667V5M7.166 1.667V5M3 8.333h15"
      ></path>
    </svg>
  );
}

function KPITracker() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
    >
      <path
        stroke="#E8F9FE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18.175 13.242A8.335 8.335 0 117.166 2.358M18.833 10A8.333 8.333 0 0010.5 1.667V10h8.333z"
      ></path>
    </svg>
  );
}

function Finance() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        fill="none"
        viewBox="0 0 21 20"
      >
        <path
          stroke="#E8F9FE"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.5 16.667V8.333M10.5 16.667V3.333M5.5 16.667v-5"
        ></path>
      </svg>
    );
  }

function Education() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
    >
      <path
        stroke="#E8F9FE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.833 16.25a2.083 2.083 0 012.083-2.083h11.25M3.833 16.25a2.083 2.083 0 002.083 2.083h11.25V1.667H5.916A2.083 2.083 0 003.833 3.75v12.5z"
      ></path>
    </svg>
  );
}

function CommunityChat() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
    >
      <path
        stroke="#E8F9FE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 9.583a6.983 6.983 0 01-.75 3.167 7.083 7.083 0 01-6.333 3.917 6.984 6.984 0 01-3.167-.75L3 17.5l1.583-4.75a6.984 6.984 0 01-.75-3.167A7.083 7.083 0 017.75 3.25a6.983 6.983 0 013.167-.75h.416A7.067 7.067 0 0118 9.167v.416z"
      ></path>
    </svg>
  );
}

function Billing() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
    >
      <path
        stroke="#E8F9FE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.166 1.667H5.5a1.667 1.667 0 00-1.667 1.666v13.334A1.667 1.667 0 005.5 18.333h10a1.667 1.667 0 001.666-1.666v-10m-5-5l5 5m-5-5v5h5m-3.333 4.166H7.166m6.667 3.334H7.166M8.833 7.5H7.166"
      ></path>
    </svg>
  );
}

function HelpAndSupport() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
    >
      <path
        stroke="#E8F9FE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.5 18.333a8.333 8.333 0 100-16.667 8.333 8.333 0 000 16.667zM10.5 6.667V10M10.5 13.333h.01"
      ></path>
    </svg>
  );
}

function Setting() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
    >
      <g
        stroke="#E8F9FE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#clip0_84_599)"
      >
        <path d="M10.5 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
        <path d="M16.667 12.5a1.375 1.375 0 00.275 1.517l.05.05a1.666 1.666 0 01-1.179 2.847 1.666 1.666 0 01-1.179-.489l-.05-.05a1.374 1.374 0 00-1.517-.275 1.374 1.374 0 00-.833 1.258v.142a1.667 1.667 0 01-3.333 0v-.075a1.375 1.375 0 00-.9-1.258 1.375 1.375 0 00-1.517.275l-.05.05a1.666 1.666 0 11-2.358-2.359l.05-.05a1.375 1.375 0 00.275-1.516 1.375 1.375 0 00-1.259-.834h-.141A1.667 1.667 0 113 8.4h.075a1.375 1.375 0 001.258-.9 1.375 1.375 0 00-.275-1.516l-.05-.05a1.667 1.667 0 112.358-2.359l.05.05a1.375 1.375 0 001.517.275h.067a1.375 1.375 0 00.833-1.258V2.5a1.667 1.667 0 013.333 0v.075a1.375 1.375 0 00.834 1.258 1.375 1.375 0 001.516-.275l.05-.05a1.666 1.666 0 012.72 1.818 1.668 1.668 0 01-.361.54l-.05.05a1.375 1.375 0 00-.275 1.518V7.5a1.375 1.375 0 001.258.834h.142a1.667 1.667 0 010 3.333h-.075a1.376 1.376 0 00-1.259.833v0z"></path>
      </g>
      <defs>
        <clipPath id="clip0_84_599">
          <path fill="#fff" d="M0 0H20V20H0z" transform="translate(.5)"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function MenuItem({ name , img}) {
  return (
    <button
      className={`flex flex-row rounded-xl w-[189px] h-[40px] py-[10px] px-[16px] items-center text-center ${
        name == "Dashboard" ? "bg-activeBtnBG" : ""
      }`}
    >
      {img}
      <p className="text-[#fff] h-[20px] font-[500px] text-[14px]">{name}</p>
    </button>
  );
}

function Sidebar() {
  const sideBarMenuItemsList = [
    {
      title: "Dashboard",
      img : <DashBoardIcon/>
    },
    {
      title: "Client Management",
      img : <ClientManagement/>
    },
    {
      title: "Calendar",
      img : <Calendar/>
    },
    {
      title: "KPI Tracker",
      img : <KPITracker/>
    },
    {
      title: "Finance",
      img : <Finance/>
    },
    {
      title: "Education",
      img : <Education/>
    },
    {
      title: "Community Chat",
      img : <CommunityChat/>
    },
    {
      title: "Billing",
      img : <Billing/>
    },
    {
      title: "Help And Support",
      img : <HelpAndSupport/>
    },
    {
      title: "Setting",
      img : <Setting/>
    }
    
  ];
  const sideBarMenuItems = sideBarMenuItemsList.map((val) => {
    return <MenuItem name={val['title']} img={val['img']} />;
  });

  return (
    <div className="h-full w-[250px] bg-sideBarBG flex items-center flex-col text-center fixed top-0 left-0 py-[32px] px-[20px]">
        <div className="w-[189px] h-[544px]">

      <img src={Logo} alt="" className="w-[151px] h-[34px] mt-16 mb-10" />
      <div className="w-[189px] h-[472px]">{sideBarMenuItems}</div>
        </div>
    </div> 
  );
}

export default Sidebar;
