import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

//? note, createStyles doesnt really "Do anything" but used for TS
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    //! sideList
    navSliderContainer: {
      width: "52vw",

      [theme.breakpoints.up("sm")]: {
        width: "30vw",
      },
      // width: theme.spacing(30),
      //todo COLOR

      background: "#cc9191",
    //   height: "auto",
    },
    avatar: {
      height: theme.spacing(6),
      [theme.breakpoints.up("sm")]: {
        height: theme.spacing(7),
      },
    },

    closeNavBtn : {
        // position: 'absolute',
        // top: '2rem',
        // right: '2rem'
    },
    listItem: {
      //todo COLOR
      // color: "#b18a65"
      color: "#192f4b",
    },





    //!component container

    menuButton: {
      // marginRight: theme.spacing(2),
    },

    subContWidth: {
      maxWidth: "190rem",
    },
    toolBarTheme: {
        margin: "0",
        padding: "0"
    
    },

    title: {
        fontWeight: 'bold',
        letterSpacing: '6px'
    },

    hamburger: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },

    mobileSliderWrapper: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },

    navLinks: {
      display: "flex",
      gap: '2.5rem',
      "& > a": {
        // [theme.breakpoints.up("md")]: {
        //   margin: theme.spacing(0, 2),
        //   "&:last-child": {
        //     marginRight: theme.spacing(0),
        //   },
        // },
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
    },
    decNone: {
      textDecoration: "none",

    },
    textDec: {
      transition: "all .3s ease",
      "&:hover": {
        //todo COLOR
        color: "#192f4bb2",
      },
    },
    drawerHeader: {
        //? only need "...theme.mixins.toolbar" if just using spacing
        //? if want typography below/within navbar component, rest can be uncommented
        // display: 'flex',
        // alignItems: 'center',
        // padding: theme.spacing(0, 1),
        //? necessary for content to be below app bar
        ...theme.mixins.toolbar,
        // justifyContent: 'flex-start',
      },
  })
);

export default useStyles;
