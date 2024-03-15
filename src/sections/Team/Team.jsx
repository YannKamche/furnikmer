import React from "react";
import Slider from "../../components/Swiper";
import { team } from "../../constants/constants";
import "./Team.css";

const Team = () => {
  return (
    <div className="bg-team" id="team">
      <div className="team-title">
        <section>Our Creative Team</section>
        <h2 className="text-3xl">Meet Our Team</h2>
        <hr />
      </div>
      <Slider images={team} />
    </div>
  );
};

export default Team;
