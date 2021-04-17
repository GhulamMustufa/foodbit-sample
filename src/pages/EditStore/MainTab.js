import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const MainTab = (props) => {
  const {
    tabValue,
    formValues,
    StoreTypes,
    handleChange,
    index,
    classes,
    storePic,
    ...other
  } = props;
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={2}>
          <input
            accept="image/*"
            style={{ display: "none" }}
            type="file"
            id="icon-button-file"
            value={formValues.storeImage}
            onChange={handleChange}
            name="storeImage"
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
                {(storePic)?(<Avatar className={classes.avatar} variant="rounded" src={URL.createObjectURL(storePic)}/>):
                (<Avatar className={classes.avatar} variant="rounded">
                <PhotoCamera />
              </Avatar>)}
              
            </IconButton>
          </label>
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            value={formValues.storeName}
            onChange={handleChange}
            name="storeName"
            className={classes.input}
            required
            label="Name"
          />
          <TextField
            value={formValues.storeType}
            onChange={handleChange}
            name="storeType"
            className={classes.input}
            style={{ marginTop: "20px" }}
            select
            label="Type"
          >
            {StoreTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            value={formValues.about}
            onChange={handleChange}
            name="about"
            className={classes.input}
            required
            label="About"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MainTab;
