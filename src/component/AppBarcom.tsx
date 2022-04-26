import { AppBar, Toolbar, Typography } from "@material-ui/core";
const AppBarComponent=()=>{

    return(<>
    <AppBar position="static">
        <Toolbar >
          <Typography variant="h4" align="center" >
            Device Dashboard 
          </Typography>
        </Toolbar>
      </AppBar>
    </>)
}

export default AppBarComponent;