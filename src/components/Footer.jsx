import React from "react";
import './css/Footer.css'
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import styled from '@emotion/styled';



export default function Footer() {

  return (
    <div className="footer_section">
      <div className="site_logo">
        FooDonate
      </div>
      <div className="copyright_heading">
        @CopyRights 2023
      </div>
      <div className="social_links">
          {/* <div className="github_logo">{GitHubIcon}</div>
          <div className="github_logo">{FacebookIcon}</div>
          <div className="github_logo">{InstagramIcon}</div> */}
      </div>
    </div>
  )                                 
}
