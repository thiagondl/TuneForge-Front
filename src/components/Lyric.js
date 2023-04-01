import { Grid } from 'semantic-ui-react'

function Lyric(props) {
  return (
    <>
      <Grid.Row>
        <Grid.Column>{props.genre}</Grid.Column> 
      </Grid.Row>
    </>
  );
}

export default Lyric;