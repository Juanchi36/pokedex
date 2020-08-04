import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import LanguageContext from '../../contexts/LanguageContext';

const RedSwitch = withStyles({
  switchBase: {
    color: red[300],
    '&$checked': {
      color: red[400],
    },
    '&$checked + $track': {
      backgroundColor: 'gray',
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function LanguageSwitch() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setLanguage(!language);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
      <Typography component="div" style={{ color: 'white' }}>
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <span role="img" aria-label="Spain flag">🇩🇪</span>
          </Grid>
          <Grid item>
            <RedSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />
          </Grid>
          <Grid item>
            <span role="img" aria-label="UK flag">🇬🇧</span>
          </Grid>
        </Grid>
      </Typography>
    </FormGroup>
  );
}