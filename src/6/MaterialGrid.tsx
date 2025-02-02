import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function MaterialGrid() {
  return (
    <Grid container spacing={2}>
      <Grid component="div" sx={{ flexBasis: "50%" }}>
        <Button variant="contained" fullWidth>
          1
        </Button>
      </Grid>
      <Grid component="div" sx={{ flexBasis: "20%" }}>
        <Button variant="contained" fullWidth>
          2
        </Button>
      </Grid>
      <Grid component="div" sx={{ flexBasis: "30%" }}>
        <Button variant="contained" fullWidth>
          3
        </Button>
      </Grid>
      <Grid component="div" sx={{ flexBasis: "10%" }}>
        <Button variant="contained" fullWidth>
          4
        </Button>
      </Grid>
    </Grid>
  );
}
