import React from "react";
import {
    FaAndroid,
    FaAngular,
    FaBitbucket,
    FaBootstrap,
    FaCss3Alt,
    FaGitSquare,
    FaHtml5,
    FaJsSquare,
    FaLaravel,
    FaNode,
    FaPhp,
    FaReact,
    FaSourcetree,
    FaSwift,
    FaJava
  } from "react-icons/fa";

const Skills = () => {
    const [state] = React.useState([
        {
          icon: <FaAngular className="commonIcons" />,
          heading: "Angular"
        },
        {
          icon: <FaAndroid className="commonIcons" />,
          heading: "Android"
        },
        {
          icon: <FaBitbucket className="commonIcons" />,
          heading: "Bitbucket"
        },
        {
          icon: <FaBootstrap className="commonIcons" />,
          heading: "Bootstrap"
        },
        {
          icon: <FaCss3Alt className="commonIcons" />,
          heading: "Css"
        },
        {
            icon: <FaGitSquare className="commonIcons" />,
            heading: "Git"
        },
        {
            icon: <FaHtml5 className="commonIcons" />,
            heading: "Html5"
        },
        {
            icon: <FaJsSquare className="commonIcons" />,
            heading: "JavaScript"
        },
        {
            icon: <FaLaravel className="commonIcons" />,
            heading: "Laravel"
        },
        {
            icon: <FaNode className="commonIcons" />,
            heading: "Node.JS"
        },
        {
            icon: <FaPhp className="commonIcons" />,
            heading: "Php"
        },
        {
            icon: <FaReact className="commonIcons" />,
            heading: "React Js"
        },
        {
            icon: <FaSourcetree className="commonIcons" />,
            heading: "Sourcetree"
        },
        {
            icon: <FaSwift className="commonIcons" />,
            heading: "Swift"
        },
        {
            icon: <FaJava className="commonIcons" />,
            heading: "Java"
        },
      ]);
    return (
        <div className="skills">
            <div className="container">
                <div className="common">
                    <h1 className="mainHeader">Skills</h1>
                    <p className="mainContent">Algunas habilidades y tecnologias con las que he trabajado y tenido experiencia en mi desempeño laboral y propio.</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row bgMain">
                    {state.map((info,i) => (
                    <div className="bgMain-skills" key={i}>
                        <div className="skills__box">
                            {info.icon}
                            <div className="skills__box-header">{info.heading}</div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;