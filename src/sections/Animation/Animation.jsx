import React, { useEffect } from "react";
import "./Animation.css";
import { animation } from "../../constants/constants";
import { pause, play } from "../../assets";

const Animation = () => {
  useEffect(() => {
    let links = document.querySelector(".link_a");
    let overs = document.querySelector(".bg-show .overlay");
    let exit = document.querySelector(".cancel");
    let player = document.querySelector(".player");
    let videos = document.getElementById("video");

    const handleLinkClick = (event) => {
      event.preventDefault();
      overs.style.display = "block";
    };

    const handleExitClick = () => {
      overs.style.display = "none";
    };

    const handlePlayerClick = () => {
      if (videos.paused) {
        videos.play();
        player.src = pause;
      } else {
        videos.pause();
        player.src = play;
      }
    };

    // Attach event listeners
    links.addEventListener("click", handleLinkClick);
    exit.addEventListener("click", handleExitClick);
    player.addEventListener("click", handlePlayerClick);

    // Clean up event listeners
    return () => {
      links.removeEventListener("click", handleLinkClick);
      exit.removeEventListener("click", handleExitClick);
      player.removeEventListener("click", handlePlayerClick);
    };
  }, []);

  return (
    <div className="bg-show">
      <div className="link">
        <a href="" className="link_a">
          play
          <img src={animation.right_chevron} alt="" />
        </a>
        <div className="overlay">
          <div className="image">
            <img src={animation.x} alt="" className="cancel" />
            <video src={animation.video} id="video"></video>
            <div className="bg-player">
              <img src={animation.play} alt="" className="player" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
