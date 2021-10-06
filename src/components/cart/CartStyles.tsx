import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        // position: 'relative',
        // minHeight: '50rem',
        // padding: '7rem 5rem 4rem 5rem',
        padding: '5rem 2rem',
        backgroundColor: '#438bce',
        color: 'white',
    },
    wrapper : {
        margin: 'auto',
        maxWidth: '120rem',
        // position: 'relative',
        // height: '100%',
        // display: 'flex',
        gap: '3rem',
        display: 'grid',
        justifyItems: 'center',
        // justifyContent: 'space-evenly',
        // alignContent: 'center',
        // alignItems: 'center',
        gridTemplateColumns: 'repeat(4, 1fr)',

        [theme.breakpoints.down("md")]: {
            display: 'grid',
            justifyItems: 'center',
            gridTemplateColumns: 'repeat(3, 1fr)',

        },
        [theme.breakpoints.down("sm")]: {
   
            gridTemplateColumns: 'repeat(2, 1fr)',

        },
        [theme.breakpoints.down("xs")]: {

            gridTemplateColumns: 'repeat(1, 1fr)',

        },
    }


}));

export default useStyles;