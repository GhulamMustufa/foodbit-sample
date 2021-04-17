import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import TabPanel from "../../component/TabPanel";

const MainTab = (props) => {
  const { ...other } = props;

  return (
    <>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox color="secondary" name="saveAddress" value="yes" />
          }
          label="Use global Settings"
        />
      </Grid>
      <Typography variant="body2">
        {"If this is checked, the store will inherit "}
        <Link color="primary" href="https://material-ui.com/">
          settings globally
        </Link>{" "}
      </Typography>
    </>
  );
};

export default MainTab;
