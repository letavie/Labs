import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import "./Navbar.css";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Navbar({ theme }) {
  const [value, setValue] = React.useState(0);
  const tabTextColor = theme ? "white" : "black"; // Chọn màu chữ dựa trên theme
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          className="tabname"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            className="tab-text"
            label="INDEX"
            style={{ color: tabTextColor }}
            {...a11yProps(0)}
            component={Link}
            to="/"
          />
          <Tab
            className="tab-text"
            label="DETAIL"
            style={{ color: tabTextColor }}
            {...a11yProps(1)}
            component={Link}
            to="/detail"
          />
          <Tab
            className="tab-text"
            label="ABOUT"
            style={{ color: tabTextColor }}
            {...a11yProps(2)}
            component={Link}
            to="/about"
          />
          <Tab
            className="tab-text"
            label="NEWS"
            style={{ color: tabTextColor }}
            {...a11yProps(3)}
            component={Link}
            to="/new"
          />
          <Tab
            className="tab-text"
            label="CONTACT"
            style={{ color: tabTextColor }}
            {...a11yProps(4)}
            component={Link}
            to="/contact"
          />
        </Tabs>
      </Box>
      {/* <CustomTabPanel value={value} index={0}>
        INDEX
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        DETAIL
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        ABOUT
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        NEWS
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        CONTACT
      </CustomTabPanel> */}
    </Box>
  );
}
Navbar.propTypes = {
  theme: PropTypes.bool.isRequired,
};

export default Navbar;
