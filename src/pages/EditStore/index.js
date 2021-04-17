import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import TabPanel from "../../component/TabPanel";
import Header from "../../component/Header";
import MainTab from "./MainTab";
import SettingTab from "./SettingTab";
import LocationTab from "./LocationTab";

const StoreTypes = [
  {
    value: "Restaurant",
    label: "Restaurant",
  },
  {
    value: "Club",
    label: "Club",
  },
];

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    height: "60vh",
    paddingTop: theme.spacing(0),
    padding: theme.spacing(2),
    marginTop: theme.spacing(3),
  },

  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },

  input: {
    width: "20ch",
  },
  avatar: {
    width: "80px",
    height: "80px",
  },
}));

export default function EditStore() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [tabValue, setTabValue] = React.useState(0);
  const [storePic, setStorePic] = React.useState(null);
  const [formValues, setFormValues] = React.useState({
    storeName: "",
    about: "",
    storeType: "Restaurant",
    storeImage: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setStorePic(files[0]);
      console.log(files[0]);
    }
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const deleteStore = () => {
    setFormValues({
      storeName: "",
      about: "",
      storeType: "Restaurant",
      storeImage: "",
    });
    setStorePic(null);
  };

  const saveStore = () => {
    for (var key in formValues) {
      if (formValues[key] === "") {
        return;
      }
    }
    setFormValues({
      storeName: "",
      about: "",
      storeType: "Restaurant",
      storeImage: "",
    });
    setOpen(true);
    setStorePic(null);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Snackbar
        open={open}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success">
          Store successfully saved!
        </Alert>
      </Snackbar>
      <Container maxWidth="sm">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" align="left" style={{ marginTop: "20px" }}>
              Edit Store
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={deleteStore}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={saveStore}
            >
              Save
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="simple tabs example"
                centered
                className={classes.tabs}
              >
                <Tab label="Main" />
                <Tab label="Location" />
                <Tab label="Settings" />
              </Tabs>
              <TabPanel value={tabValue} index={0}>
                <MainTab
                  storePic={storePic}
                  formValues={formValues}
                  StoreTypes={StoreTypes}
                  handleChange={handleChange}
                  classes={classes}
                />
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <LocationTab classes={classes} />
              </TabPanel>
              <TabPanel value={tabValue} index={2}>
                <SettingTab classes={classes} />
              </TabPanel>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
