import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { canTryTruthQuestion } from "../stores/CanTryTruthQuestion";

const _canTryTruthQuestion = false;

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button component={RouterLink} to="/">
          <ListItemText primary="ストーリー" />
        </ListItem>
        <ListItem button component={RouterLink} to="/answer">
          <ListItemText primary="回答ページ" />
        </ListItem>
        {canTryTruthQuestion() &&
          <ListItem button component={RouterLink} to="/truthanswer">
            <ListItemText primary="シークレット" />
          </ListItem>
        }
      </List>
    </Drawer>
  );
};

export default Sidebar;
