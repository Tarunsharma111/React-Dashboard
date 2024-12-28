import React from "react";
import "./featured.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import ChangingProgressProvider from "./ChangingProgressProvider";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <FontAwesomeIcon icon={faEllipsisVertical} className="icon" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <ChangingProgressProvider
            values={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          >
            {(percentage) => (
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  pathTransitionDuration: 0.95,
                  trailColor: "#c98c84",
                  pathColor: "#210876",
                  textColor: "#210876",
                })}
              />
            )}
          </ChangingProgressProvider>
        </div>

        <p className="title">Total sales Today</p>
        <p className="amount">$2003.22K</p>
        <p className="desc">Previous transactions</p>

        <div className="summary">
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult negative">
                      <FontAwesomeIcon icon={faChevronDown} fontSize='small' />
                      <div className="resultAmount">$19.4k</div>
                </div>
            </div>

            <div className="item">
                <div className="itemTitle">Last Week</div>
                <div className="itemResult positive">
                      <FontAwesomeIcon icon={faChevronDown} fontSize='small' />
                      <div className="resultAmount">$50.4k</div>
                </div>
            </div>

            <div className="item">
                <div className="itemTitle">Last Month</div>
                <div className="itemResult negative">
                      <FontAwesomeIcon icon={faChevronDown} fontSize='small' />
                      <div className="resultAmount">$97.4k</div>
                </div>
            </div>  
        </div>
      </div>
    </div>
  );
};

export default Featured;
