import { makeStyles } from "@material-ui/core";
import theme from "../../styles/theme";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: theme.palette.surface.black,
    width: "100%",
    height: 80,
    marginBottom: 160,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    paddingLeft: theme.spacing(2),
  },
  title: {
    color: theme.palette.surface.white,
    fontSize: theme.typography.h2.fontSize,
  },
}));

export default useStyles;
