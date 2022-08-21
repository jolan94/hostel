import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function BottomBar(props) {
  return (
    <div className="bottombar">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={4} lg={4}>
            <div>
              <h2 className="bottomHeading">Zoom Hostel</h2>
              <ul>
                <li>Corporate Office No. 1190,</li>
                <li>22nd Cross,</li>
                <li>HSR Layout,</li>
                <li>Sector 3 Bangalore,</li>
                <li>Karnataka India - 560102</li>
              </ul>
            </div>
          </Grid>
          <Grid item sm={12} md={4} lg={4}>
            <div>
              <h2 className="bottomHeading">More Information</h2>
              <ul>
                <li>Careers</li>
                <li>Site Map</li>
                <li>FAQs</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Blog</li>
              </ul>
            </div>
          </Grid>
          <Grid item sm={12} md={4} lg={4}>
            <div>
              <h2 className="bottomHeading">Contact</h2>
              <ul>
                <li>Mobile 9876543210</li>
                <li>Email about@zoomhostel.com</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default BottomBar;
