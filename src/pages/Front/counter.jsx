import Minus from "./minus.jsx";
import Plus from "./plus.jsx";
import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import styles from "./main.module.css";

export default function Counters() {
  const [itemCount, setItemCount] = React.useState(1);

  return (
    <div style={{ display: "block", padding: 30 }}>
      
      <ButtonGroup>
        <Button
          onClick={() => {
            setItemCount(Math.max(itemCount - 1, 0));
          }}
        >
          {" "}
          <i className = {styles.removeIcon}>
          <RemoveIcon fontSize="small" />
          </i>
        </Button>
        <div className ={styles.badgeContainer}>
        <Badge color="default" badgeContent={itemCount}>
        {" "}
      </Badge>
      </div>
     
        <Button
          onClick={() => {
            setItemCount(itemCount + 1);
          }}
        >
          {" "}
         
         <i className= {styles.addIcon}>
          <AddIcon   fontSize="small" />
          </i>
          
        </Button>
        
      </ButtonGroup>
    </div>
  
);
}
