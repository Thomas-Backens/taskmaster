import { makeStyles } from "@material-ui/core";
import theme from "../../styles/theme";

const useStyles = makeStyles(() => ({
  root: {
    width: 250,
    height: "calc(100vh - 80px)",
  },
  background: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    height: "100%",
  },
  button: {
    paddingLeft: theme.spacing(3),
    fontWeight: 600,
    fontSize: theme.typography.h4.fontSize,
    color: theme.palette.surface.white,
    justifyContent: "flex-start",
    textTransform: "none",
    width: "100%",
    height: 80,
    boxShadow: "0px 2px 0px 0px #2A2A2A",
    borderRadius: 0,
  },
  lowerButton: {
    boxShadow: "0px -2px 0px 0px #2A2A2A",
  },
}));

export default useStyles;
