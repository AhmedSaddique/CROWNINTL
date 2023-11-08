"use client";
import React from "react";
import { Anchor, Tabs } from "antd";
import { useTheme } from "next-themes";
import { HeadingH3, HeadingH6 } from "../Heading";
import { Para16 } from "../Paragraph";

import Container from "../Container";
import { policydata } from "../constants";

const { TabPane } = Tabs;

const { Link } = Anchor;
const Privacyinfo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className={`flex flex-wrap md:flex-nowrap gap-3 p-1 pt-5 md:pt-40 `}>
        <div
          className={`shadow-lg rounded-md backdrop-blur-3xl w-full md:w-3/12 p-3 h-fit  `}
          
        >
          <HeadingH6
            className={`${
              theme === "dark" ? "text-primary-black" : "text-primary-white"
            } p-2`}
            title={"Table of contents"}
          />
          {policydata.map((array, index) => (
            <>
              <Anchor key={index}
                affix={false}
                className={theme === "dark" ? "dark-theme" : "light-theme"}
              >
                <Link href={array.href} title={array.title} />
              </Anchor>
            </>
          ))}
        </div>

        <Container className={"w-full md:w-9/12"}>
          <div
            className={`p-3 space-y-10 ${
              theme === "dark" ? "text-primary-black" : "text-primary-white"
            }`}
          >
          {policydata.map((array, index) => (

         <div id={array.hrefid} className="mt-5" key={index}>
              <HeadingH3
                className={"text-primary-blue100"}
                title={array.title}
              />
              <Para16 title={array.text} />
            </div> 
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Privacyinfo;
