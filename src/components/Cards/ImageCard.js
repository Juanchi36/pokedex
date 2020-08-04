import React, { useContext, useEffect, useState } from 'react';
import pokeBall from '../../assets/pokeball.svg';
import './ImageCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ImageContext from '../../contexts/ImageContext';
import PokeContext from '../../contexts/PokeContext';
import LanguageContext from '../../contexts/LanguageContext';
import axios from 'axios';

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

function ImageCard() {
  const classes = useStyles();
  const { image } = useContext(ImageContext);
  const { currentPokemon } = useContext(PokeContext);
  const { language } = useContext(LanguageContext);
  const [description, setDescription] = useState([]);
  useEffect(() => {
    if (currentPokemon.id) {
      getEntries();
    }
    // eslint-disable-next-line
  }, [currentPokemon.id]);

  const getEntries = async () => {
    let entries = [];
    await axios.get(`https://pokeapi.co/api/v2/ability/${currentPokemon.id}/`).then(result => {
      entries = result.data.effect_entries;
    });
    setDescription(entries); console.log(entries)
  };
  return (
    <Card className={classes.root} variant="outlined">
      {!currentPokemon.id ? (
        <div className="Container">
          <img src={!image ? pokeBall : image} className={!image ? "Pokeball" : "Pokemon"} alt="pokeball" />
        </div>
      ) : (
          <div>
            <CardHeader className={classes.title} title={currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.slice(1)} />
            <div>
              <img className="Image" src={`https://pokeres.bastionbot.org/images/pokemon/${currentPokemon.id}.png`} alt="pokeball" />
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {currentPokemon.types.map((type, index) => {
                  return (
                    <li key={index} style={{ color: 'white' }}>{type.type.name}</li>
                  )
                })}
              </ul>
              {language && description[1] ? (
                <p style={{color: 'white', padding: 5}}>{description[1].effect}</p>
              ) : !language && description[0] ? (
                <p style={{color: 'white', padding: 5}}>{description[0].effect}</p>
              ) : null}
            </div>
          </div>
        )}
    </Card>
  );
};

export default ImageCard;