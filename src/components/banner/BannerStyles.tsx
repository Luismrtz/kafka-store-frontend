import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
    wrapper: {
        minHeight: '70vh',
        // height: 'auto',
        backgroundColor: '#43ce6d',
        color: 'white'
    }


}));

export default useStyles;