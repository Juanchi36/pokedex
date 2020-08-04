import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import ImageContext from '../../contexts/ImageContext';
import UrlContext from '../../contexts/UrlContext';
import PokeContext from '../../contexts/PokeContext';

const useStyles = makeStyles({
  table: {
    minWidth: 350,
    backgroundColor: '#282c34',
    borderColor: '#282c34',
    width: '90%',
    marginTop: 10,
  },
  cell: {
    color: 'white',
    padding: '10px 5px',
  },
  pagination: {
    color: 'white',
  },
});

function PokeTable({ data, render, setRender }) {
  useEffect(() => {
    if (data) {
      let rowsTemp = [];
      data.map(pokemon => {
        rowsTemp.push({
          number: pokemon.data.id,
          name: pokemon.data.name,
          experience: pokemon.data.base_experience,
          image: ''
        });
        return true;
      });
      setRows(rowsTemp);
    }
  }, [data]);
  const classes = useStyles();
  const { nextUrl, prevUrl, setNextUrl } = useContext(UrlContext);
  const { setImage } = useContext(ImageContext);
  const { setCurrentPokemon } = useContext(PokeContext);

  const [rows, setRows] = useState([]);

  const handleOnMouseEnter = (id) => {
    setImage(`https://pokeres.bastionbot.org/images/pokemon/${id}.png`);
  };
  const handleOnMouseLeave = () => {
    setImage('');
  };
  const handleClick = (id) => {
    data.map(pokemon => {
      if (pokemon.data.id === id) {
        setCurrentPokemon(pokemon.data);
        setTimeout(() => {
          setCurrentPokemon({});
        }, 8000);
      }
      return true;
    })
  };

  const handleChangePage = (event, newPage) => {
    if (newPage < 0) {
      setNextUrl(prevUrl);
    }
    setRender(!render);
  };

  return (
    <div>
      <TableContainer component={Paper} style={{ backgroundColor: '#282c34', boxShadow: 'none' }}>
        <Table className={classes.table} aria-label="simple table" >
          <TableHead>
            <TableRow>
              <TableCell className={classes.cell} align="justify" >Order</TableCell>
              <TableCell className={classes.cell} align="justify" >Name</TableCell>
              <TableCell className={classes.cell} align="center">Experience</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.number}
                onMouseEnter={() => handleOnMouseEnter(row.number)}
                onMouseLeave={handleOnMouseLeave}
                onClick={() => handleClick(row.number)}
                style={{ cursor: 'pointer' }}
              >
                <TableCell className={classes.cell} align="justify">{row.number}
                </TableCell>
                <TableCell className={classes.cell} align="justify">{row.name}</TableCell>
                <TableCell className={classes.cell} align="center">{row.experience}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          className={classes.pagination}
          component="div"
          count={rows.length}
          rowsPerPage={[]}
          page={[]}
          rowsPerPageOptions={[]}
          labelDisplayedRows={() => { }}
          onChangePage={handleChangePage}
          backIconButtonProps={!prevUrl ? { disabled: true } : null}
          nextIconButtonProps={!nextUrl ? { disabled: true } : null}
        />
      </TableContainer>
    </div>
  );
};

export default PokeTable;