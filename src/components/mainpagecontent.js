import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function MainPageContent(props) {
  return (
    <div className="mainpagecontent">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <img className="hostelimg" alt="HostelImage" src={props.image} />
          </Grid>
          <Grid item xs={12} md={4}>
            <h1 className="contentheading">{props.title} </h1>
            <ul>
              <li>
                <h3 className="contentsubtitle">About the hostel</h3>
              </li>
              <li className="hostelcontent">
                Tired searching for an ideal PG in Velachery, Chennai? Well, we
                offer you more than that! We happily take charge of providing
                you with spacious rooms, homely food, and extremely caring staff
                who are always at your service. Our premium accommodations in
                Chennai caters to the needs of students and working
                professionals. With Zolo Belford located at a walking distance
                from IT companies and top-notch colleges. we ensure to take care
                of all your needs and leave you with all the time in the world
                to pursue your own interests.
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default MainPageContent;
