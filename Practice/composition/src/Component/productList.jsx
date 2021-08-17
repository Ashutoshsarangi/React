import './filterProduct';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 450,
    },
  });
function ProductList(props){
    const classes = useStyles();
    const category = props.category;
    const rows = props.rows;
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name&nbsp;(g)</TableCell>
              <TableCell align="right">Price&nbsp;(g)</TableCell>
              <TableCell align="right">Available Stock&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell align="left"  colSpan={3}>{category}</TableCell>
              </TableRow>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{String(row.stocked)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  
}

export default ProductList;