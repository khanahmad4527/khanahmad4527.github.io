import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import "./calender.css";

function Calender() {
  // const selectLastHalfYear = (contributions) => {
  //   const startTimestamp = new Date("2022-09-04").getTime();
  //   const endTimestamp = new Date().getTime();

  //   return contributions.filter((day) => {
  //     const contributionTimestamp = new Date(day.date).getTime();

  //     return (
  //       contributionTimestamp >= startTimestamp &&
  //       contributionTimestamp <= endTimestamp
  //     );
  //   });
  // };
  return (
    <div className="github-main">
      <h1 className="github-heading">GitHub</h1>
      <div className="github-calender">
        <GitHubCalendar
          username="khanahmad4527"
          color={"#005685"}
          blockSize={20}
          fontSize={20}
          hideColorLegend
          hideTotalCount
          className="react-activity-calendar"
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
      </div>
      <div className="github-stats">
        <div>
          <img
            src="https://streak-stats.demolab.com?user=khanahmad4527&theme=sea&hide_border=true&border_radius=10&date_format=j%20M%5B%20Y%5D&background=005685"
            alt="Ahmad Stats"
            id="github-streak-stats"
          />
        </div>
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=khanahmad4527&title_color=005685&text_color=005685&icon_color=005685&bg_color=ffffff&border_radius=10&border_color=005685"
            alt="Ahmad Language"
            id="github-top-langs"
          />
        </div>
        <div>
          <img
            src="https://github-readme-stats.vercel.app/api?username=khanahmad4527&show_icons=true&title_color=005685&text_color=005685&icon_color=005685&bg_color=ffffff&border_radius=10&border_color=005685"
            alt="Ahmad Stats"
            id="github-stats-card"
          />
        </div>
      </div>
    </div>
  );
}

export default Calender;
