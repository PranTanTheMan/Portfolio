import { useEffect } from "react";
import {
  Image,
  Text,
  Heading,
  Flex,
  Spacer,
  Stack,
  Badge,
  Wrap,
  Icon,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function projectCard() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const projectDeets = [
    {
      image: "/project(1).png",
      title: "Tech Optimum",
      description: "A non-profit organization that helps CS students in need",
      to: "https://techoptimum.org/",
      github: "https://github.com/TechOptimum/Tech-Optimum-Website",
      tech: ["Next.js", "Chakra UI", "Javascript"],
    },
    {
      image: "/project(2).png",
      title: "Carbonara",
      description: "The best sustainable web app for your carbon footprint",
      to: "https://carbonara.roryjames.repl.co/",
      github: "https://github.com/rjames187/Carbonara",
      tech: ["React", "CSS", "HTML", "JavaScript", "Node.js"],
    },
    {
      image: "/project(3).png",
      title: "Skyline",
      description: "Find the best outfit based on your local weather",
      to: "https://skyline.arnavpandey722.repl.co/",
      github: "https://github.com/siddharthd0/skyline",
      tech: ["Python (Flask)", "Javascript", "HTML", "CSS", "restAPI"],
    },
    {
      image: "/project(4).png",
      title: "School Simplified",
      description: "Non-profit organization that helps students",
      to: "https://schoolsimplified.org/",
      github: "https://github.com/School-Simplified",
      tech: ["Next.js", "Chakra UI", "TypeScript", "Framer-motion"],
    },
    {
      image: "/project(5).png",
      title: "Programming Simplified",
      description: "A platform for students to learn programming",
      to: "https://www.programmingsimplified.org/",
      github: "https://github.com/School-Simplified",
      tech: ["Next.js", "Chakra UI", "TypeScript", "Framer-motion"],
    },
    {
      image: "/project(6).png",
      title: "Resumate",
      description: "Resume generator and resume feedback",
      to: "https://www.resumate.tech/",
      github: "https://github.com/siddharthd0/ResumeBuilder/tree/main",
      tech: ["Next.js", "Chakra UI", "TypeScript", "NLP", "Firebase"],
    },
  ];
  return (
    <>
      <Wrap spacing={30} justify={"center"} pl={{ base: "10px", md: "0px" }}>
        {projectDeets.map((project, i) => (
          <Flex
            alignItems={"left"}
            justifyContent={"center"}
            flexDirection={"column"}
            width={"400px"}
            key={i}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={i * 150}
          >
            <Image
              src={project.image}
              loading={"lazy"}
              width={"96%"}
              height={"205px"}
              borderRadius={"10px"}
              my={"15px"}
              transition={"all 0.4s ease-in-out"}
              className={"project-image"}
            />
            <Flex justifyContent={"center"}>
              <Heading
                pt={"10px"}
                pl={"15px"}
                fontSize={"24px"}
                textColor={"textColorHover"}
              >
                {project.title}
              </Heading>
              <Spacer />
              <Stack direction={"row"} gap={"7px"} mt={"10px"}>
                <Icon
                  aria-label="website"
                  as={ExternalLinkIcon}
                  className={"project-icon"}
                  onClick={() => window.open(project.to, "_blank")}
                  color="#ffed29"
                  transition={"all 0.2s ease-in-out"}
                />
                <Icon
                  aria-label="github"
                  as={FaGithub}
                  className={"project-icon"}
                  onClick={() => window.open(project.github, "_blank")}
                  color="#ffed29"
                  transition={"all 0.2s ease-in-out"}
                />
              </Stack>
            </Flex>
            <Text
              width={"380px"}
              pl={"15px"}
              fontSize={"18px"}
              fontWeight={"400"}
              color={"textColorMed"}
            >
              {project.description}
            </Text>
            <Flex pt={"7px"} pl={"15px"} gap={"14px"}>
              {project.tech.map((tech, i) => (
                <Badge
                  colorScheme={"yellow"}
                  variant={"subtle"}
                  maxWidth={"110px"}
                  key={i}
                >
                  {tech}
                </Badge>
              ))}
            </Flex>
          </Flex>
        ))}
      </Wrap>
    </>
  );
}
