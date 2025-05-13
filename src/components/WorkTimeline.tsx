import React from "react";
import { Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

const WorkTimeline: React.FC = () => {
  return (
    <div>
      <Typography variant="h6" sx={{ mt: 4 }}>Work Experience</Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <p><b>Projects:</b> KUBLR website, KUBLR application, AI-DRIVEN website, EastBanc Technologies  website, Standup AI application, International Responder Systems (IRS) </p>
            <p><b>Responsibilities:</b><br />
              Implementation of frontend for various international projects<br />
              Collaboration with designers and implementation of mockups<br />
              Proficient in JavaScript, React, Angular, Hugo, and TypeScript<br />
              <b>Tools:</b> Photoshop, Avocode, Figma<br />
              Pixel Perfect layout<br />
              <b>CI/CD:</b> Jenkins, SonarQube<br />
              <b>Build tools:</b> Bazel<br />
              <b>Styling frameworks:</b> Tailwind CSS, Bootstrap, Material-UI
            </p>
        </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent><b>EastBanc Technologies (2022–2025) (US) <br /> Frontend Developer</b></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <p><b>Projects:</b> Art of Riesling, Simple wine website, All about champagne </p>
            <p><b>Responsibilities:</b><br />
              Implementation of frontend for various international projects<br />
              Collaboration with designers and implementation of mockups<br />
              Work on Bitrix<br />
              <b>Tools:</b> Photoshop, Figma<br />
              Pixel Perfect layout<br />
              Layout of promotional landing pages<br />
              Blog article layout for the company<br />
              Handling a large number of tasks
            </p>
        </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent><b>Simple Wine (2022) <br /> Frontend Developer</b></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <p><b>Projects:</b> Action website, planning and creating email newsletters </p>
            <p><b>Responsibilities:</b><br />
              Planning and manually coding email newsletters<br />
              Collaborating with editorial teams and overseeing content preparation for emails<br />
              Posting various information on websites (articles, promotions, webinars)<br />
              Creating landing pages and HTML5 banners<br />
              Animating icons and other graphical interface elements<br />
              Layout of promotional landing pages<br />
              Working with Adobe Dreamweaver<br />
              Creating content plans<br />
              Analyzing results and maintaining reports<br />
              Identifying channels and segments for email campaigns<br />
              Managing email databases of 150,000+ addresses<br />
              Creating and editing triggered email sequences
            </p>
        </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent><b>Media Group "Action-MCFER" (2021-2022) <br /> Frontend Developer / Lead Email Marketer</b></TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <p><b>Projects:</b> Aquaphor website</p>
            <p><b>Responsibilities:</b><br />
              Implementation of frontend for the main website<br />
              Collaboration with designers and implementation of mockups<br />
              Basic knowledge of PHP<br />
              Proficient in using Git and working with GitHub<br />
              JavaScript<br />
              Confident in using Photoshop and Figma<br />
              Pixel Perfect layout<br />
              Experience with WordPress<br />
              Work with WooCommerce<br />
              Experience with WordPress plugins and their configuration<br />
              Familiar with Slack, Jira, and Zendesk
            </p>
        </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent><b>Aquaphor (2020-2022) <br /> Frontend Developer</b></TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default WorkTimeline;