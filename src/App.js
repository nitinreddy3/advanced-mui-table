import React from "react";
import {
  makeStyles,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
  withStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  head: {
    backgroundColor: "#fff",
    minWidth: "50px",
  },
  tableContainer: {
    maxHeight: "400px",
  },
  cell: {
    minWidth: "100px",
  },
}));

const StickyTableCell = withStyles((theme) => ({
  head: {
    // backgroundColor: 'grey',
    color: theme.palette.common.white,
    left: 0,
    position: "sticky",
    zIndex: theme.zIndex.appBar + 2,
  },
  body: {
    backgroundColor: "#ddd",
    minWidth: "50px",
    left: 0,
    position: "sticky",
    zIndex: theme.zIndex.appBar + 1,
  },
}))(TableCell);

const StyledTableCell = withStyles((theme) => ({
  head: {
    // backgroundColor: 'grey',
    color: "#000",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const App = () => {
  let id = 0;
  function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
  }

  const data = [
    createData("Frozen yoghurt", 6.0, 24, 4.0),
    createData("Ice cream sandwich", 9.0, 37, 4.3),
    createData("Eclair", 16.0, 24, 6.0),
    createData("Cupcake", 3.7, 67, 4.3),
    createData("Gingerbread", 16.0, 49, 3.9),
    createData("Frozen yoghurt", 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 16.0, 24, 6.0),
    createData("Cupcake", 3.7, 67, 4.3),
    createData("Gingerbread", 16.0, 49, 3.9),
    createData("Frozen yoghurt", 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 16.0, 24, 6.0),
    createData("Cupcake", 3.7, 67, 4.3),
    createData("Gingerbread", 16.0, 49, 3.9),
    createData("Frozen yoghurt", 6.0, 24, 4.0),
    createData("Ice cream sandwich", 9.0, 37, 4.3),
    createData("Eclair", 16.0, 24, 6.0),
    createData("Cupcake", 3.7, 67, 4.3),
    createData("Gingerbread", 16.0, 49, 3.9),
  ];

  const classes = useStyles();

  return (
    <div>
      <TableContainer className={classes.tableContainer}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StickyTableCell className={classes.head}>
                {/* Dessert (100g serving) */}
              </StickyTableCell>
              <StyledTableCell className={classes.head} numeric>
                Calories
              </StyledTableCell>
              <StyledTableCell className={classes.head} numeric>
                Fat (g)
              </StyledTableCell>
              <StyledTableCell className={classes.head} numeric>
                Carbs (g)
              </StyledTableCell>
              <StyledTableCell className={classes.head} numeric>
                Protein (g)
              </StyledTableCell>
              <StyledTableCell className={classes.head} numeric>
                Protein (g)
              </StyledTableCell>
              <StyledTableCell className={classes.head} numeric>
                Protein (g)
              </StyledTableCell>
              <StyledTableCell className={classes.head} numeric>
                Protein (g)
              </StyledTableCell>
              <StyledTableCell className={classes.head} numeric>
                Protein (g)
              </StyledTableCell>
              <StyledTableCell className={classes.head} numeric>
                Protein (g)
              </StyledTableCell>
              <StyledTableCell className={classes.head} numeric>
                Protein (g)
              </StyledTableCell>
              <StyledTableCell className={classes.head} numeric>
                Protein (g)
              </StyledTableCell>
              <StyledTableCell className={classes.head} numeric>
                Protein (g)
              </StyledTableCell>
              <StyledTableCell className={classes.head} numeric>
                Protein (g)
              </StyledTableCell>
              <StyledTableCell className={classes.head} numeric>
                Protein (g)
              </StyledTableCell>
              <StyledTableCell className={classes.head} numeric>
                Protein (g)
              </StyledTableCell>
              <StyledTableCell className={classes.head} numeric>
                Protein (g)
              </StyledTableCell>
              <StyledTableCell className={classes.head} numeric>
                Protein (g)
              </StyledTableCell>
              <StyledTableCell className={classes.head} numeric>
                Protein (g)
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((n) => {
              return (
                <StyledTableRow key={n.id}>
                  <StickyTableCell>{n.name}</StickyTableCell>
                  <StyledTableCell
                    numeric
                    align="center"
                    className={classes.cell}
                  >
                    {n.fat}
                  </StyledTableCell>
                  <StyledTableCell
                    numeric
                    align="center"
                    className={classes.cell}
                  >
                    {n.carbs}
                  </StyledTableCell>
                  <StyledTableCell
                    numeric
                    align="center"
                    className={classes.cell}
                  >
                    {n.protein}
                  </StyledTableCell>
                  <StyledTableCell
                    numeric
                    align="center"
                    className={classes.cell}
                  >
                    {n.calories}
                  </StyledTableCell>
                  <StyledTableCell
                    numeric
                    align="center"
                    className={classes.cell}
                  >
                    {n.fat}
                  </StyledTableCell>
                  <StyledTableCell
                    numeric
                    align="center"
                    className={classes.cell}
                  >
                    {n.carbs}
                  </StyledTableCell>
                  <StyledTableCell
                    numeric
                    align="center"
                    className={classes.cell}
                  >
                    {n.protein}
                  </StyledTableCell>
                  <StyledTableCell
                    numeric
                    align="center"
                    className={classes.cell}
                  >
                    {n.calories}
                  </StyledTableCell>
                  <StyledTableCell
                    numeric
                    align="center"
                    className={classes.cell}
                  >
                    {n.fat}
                  </StyledTableCell>
                  <StyledTableCell
                    numeric
                    align="center"
                    className={classes.cell}
                  >
                    {n.carbs}
                  </StyledTableCell>
                  <StyledTableCell
                    numeric
                    align="center"
                    className={classes.cell}
                  >
                    {n.protein}
                  </StyledTableCell>
                  <StyledTableCell
                    numeric
                    align="center"
                    className={classes.cell}
                  >
                    {n.carbs}
                  </StyledTableCell>
                  <StyledTableCell
                    numeric
                    align="center"
                    className={classes.cell}
                  >
                    {n.protein}
                  </StyledTableCell>
                  <StyledTableCell
                    numeric
                    align="center"
                    className={classes.cell}
                  >
                    {n.calories}
                  </StyledTableCell>
                  <StyledTableCell
                    numeric
                    align="center"
                    className={classes.cell}
                  >
                    {n.fat}
                  </StyledTableCell>
                  <StyledTableCell
                    numeric
                    align="center"
                    className={classes.cell}
                  >
                    {n.carbs}
                  </StyledTableCell>
                  <StyledTableCell
                    numeric
                    align="center"
                    className={classes.cell}
                  >
                    {n.protein}
                  </StyledTableCell>
                  <StyledTableCell
                    numeric
                    align="center"
                    className={classes.cell}
                  >
                    {n.protein}
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default App;
