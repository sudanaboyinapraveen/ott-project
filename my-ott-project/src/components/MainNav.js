import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#00050e",
    zIndex: 100,
   
  },

});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
const activeIconColor = "#FFA10A"; // Change 
  useEffect(() => {
    
    if (value === 0) {
      navigate("/");
    } else if (value ===1) {
      navigate("/Movies");
    } else if (value === 2) {
      navigate("/Series");
    } else if (value === 3) {
      navigate("/Search");
    }

    
  }, [value, navigate]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        
        setValue(newValue);
      }}
      showLabels
      className={classes.root}

      
    >
      <BottomNavigationAction
          style={{ color: value === 0 ? activeIconColor : "white" }}
        label="Trending"
        icon={<WhatshotIcon />}
        
      />
      <BottomNavigationAction
          style={{ color: value === 1 ? activeIconColor : "white" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
         style={{ color: value === 2 ? activeIconColor : "white" }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
         style={{ color: value === 3 ? activeIconColor : "white" }}
        label="Search"
        icon={<SearchIcon />}
      />
     
    </BottomNavigation>
   
  );
}







