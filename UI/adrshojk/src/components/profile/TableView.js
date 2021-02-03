import React,{useState,useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);




const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function TableView() {
  const classes = useStyles();
    const [rows,setRow]=useState([])


    const[page,setPage]=useState(1)

    useEffect(() => {
        let offset;
        if(page===1){
            offset=0;
        }else{
            offset=(page-1)*5
        }
        fetch(`https://mockend.com/troisinfotech/TalentHub/posts?limit=5&offset=${offset}`).then(res=>res.text()).then(data=>{
        let rows = [...JSON.parse(data)]
        setRow(rows)
    })
    }, [page])

    const handlePageChange = (event, value) => {
        setPage(value);
      };
    
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>id</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">Published</StyledTableCell>
            <StyledTableCell align="right">Views</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right">{row.published?'Yes':'No'}</StyledTableCell>
              <StyledTableCell align="right">{row.views}</StyledTableCell>
              <StyledTableCell align="right">{new Date(row.createdAt).toDateString() }</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination count={20} onChange={handlePageChange}/>
    </TableContainer>
  );
}

