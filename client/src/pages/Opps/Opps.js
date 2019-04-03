import React from 'react';
// import '../Opportunities/Opportunities.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });
  
  let id = 0;
  function createData(companyName, email, employees, carbs, protein) {
    id += 1;
    return { id, companyName, email, employees, carbs, protein };
  }
  
  const rows = [
    createData('White Sox', 'john.doe@aol.com', 25, 24, 4.0),
    createData('Cubs', 'john.doe@aol.com', 25, 37, 4.3),
    createData('Twins', 'john.doe@aol.com', 25, 24, 6.0),
    createData('Indians', 'john.doe@aol.com', 25, 67, 4.3),
    createData('Brewers', 'john.doe@aol.com', 25, 49, 3.9),
  ];
  
  function Opps(props) {
    const { classes } = props;
  
    return (
        
            
        
      <Paper className={classes.root}>
      <h6>Current Opportunities</h6>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Employees</TableCell>
              <TableCell align="right">Revenue</TableCell>
              <TableCell align="right">Revenue Potential</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.companyName}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.employees}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
  
  Opps.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Opps);
