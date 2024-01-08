import { makeStyles } from "@material-ui/core";

 const styleClass =  {
    mtop: {
      marginTop: 20
    },
    mbot: {
      marginBottom: 10
    },
    mboth: {
      marginTop: 20,
      marginBottom: 20
    },
    contain: { 
      color: "grey",
      padding:20,
      display:"block",
      width: '100%'
    },
    btn: {
      display: "block",
      marginTop: 20
    }
  }


  export const useStyles = makeStyles(styleClass);