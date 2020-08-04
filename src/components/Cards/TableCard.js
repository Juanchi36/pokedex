import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import PokeTable from '../Tables/PokeTable';
import axios from 'axios';
import UrlContext from '../../contexts/UrlContext';
import LanguageContext from '../../contexts/LanguageContext';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: '70vh',
    backgroundColor: '#282c34',
    borderColor: '#282c34',
    boxShadow: '5px 5px 5px #131518',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: 'white',
    marginTop: 15,
  },
  pos: {
    marginBottom: 12,
  },
});

function TableCard() {
  const [render, setRender] = useState(false);
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    getPokemonList();
    // eslint-disable-next-line
  }, [render]);

  const classes = useStyles();
  const { nextUrl, setNextUrl, setPrevUrl } = useContext(UrlContext);
  const [pokemonList, setPokemonList] = useState([]);

  const getPokemonList = async () => {
    let list;
    axios.get(nextUrl).then(response => {
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);
      const pokemons = response.data.results;
      const promises = pokemons.map(result => {
        return axios.get(result.url);
      })
      Promise.all(promises).then(response => {
        list = response;
        setPokemonList(list);
      })
    });
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader className={classes.title} title={!language ? 'Verfügbare Pokémons' : 'Available Pokémons'} />
      <PokeTable data={pokemonList} render={render} setRender={setRender} />
    </Card>
  );
};

export default TableCard;