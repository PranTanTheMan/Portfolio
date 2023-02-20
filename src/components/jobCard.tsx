import React from "react";
import { Box, Flex, Spacer, Heading, Text, Divider } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function jobCard() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const jobs = [
    {
      Title: "Tech Optimum",
      Role: "Chief Technology Officer ",
      Location: "Remote",
      Time: "May 2022 - Present",
      items: [
        "Hosted a virtual Hackathon with 300+ members and raised $41,750 in prize money",
        "Managing, initiating, and building projects with volunteers",
        "Built an educative platform for underrepresented and minority groups to learn about Computer Science",
      ],
    },
    {
      Title: "IAM",
      Role: "Technology Intern",
      Location: "Minneapolis, MN",
      Time: "Nov 2021 - Present",
      items: [
        "Using Joomla, a CMS, Developed new components and pages to maintain the website.",
        "Created Youtube content and moderated live events with 200+ concurrent viewers",
        "Assisted in managing Indiafest with running the entertainment programs, the largest twin cities cultural event.",
      ],
    },
    {
      Title: "FIRST Robotics",
      Role: "Lead Mechanical Engineer",
      Location: "Wayzata High School, MN",
      Time: "Sep 2019 - Present",
      items: [
        "Work with Machinery to create components and items",
        "Design and build a robot for the FIRST Robotics Competition",
        "Lead a team of 20+ students to build a robot",
        "Mentor and teach students about the engineering process",
      ],
    },
  ];
  return (
    <>
      {jobs.map((job, i) => (
        <>
          <Box
            key={i}
            width={{ base: "370px", md: "700px" }}
            borderRadius={"1px"}
            py={"10px"}
            px={"15px"}
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay={i * 100}
          >
            <Flex alignItems={"center"}>
              <Flex flexDirection={"column"} textAlign={"left"}>
                <Heading fontSize={"26px"} fontWeight={"700"}>
                  {job.Title}
                </Heading>
                <Text pl={"3px"} fontSize={"16px"}>
                  {job.Role}
                </Text>
              </Flex>
              <Spacer />
              <Flex flexDirection={"column"} textAlign={"right"}>
                <Heading fontSize={"20px"} fontWeight={"700"}>
                  {job.Location}
                </Heading>
                <Text fontSize={"16px"}>{job.Time}</Text>
              </Flex>
            </Flex>
            <ul className="responsibility-list">
              {job.items.map((items) => (
                <li key={i}>{items}</li>
              ))}
            </ul>
          </Box>
          <Divider width={{ base: "370px", md: "700px" }} />
        </>
      ))}
    </>
  );
}
