import { Header, Segment, Grid, Input, Divider, Button } from 'semantic-ui-react'
import React, { useState } from 'react';
import Lyric from './Lyric';

function Home() {

  const [displayLyric, setDisplayLyric] = useState(false);
  const [genre, setGenre] = useState("");
  const [theme, setTheme] = useState("");
  const [style, setStyle] = useState("");
  const [mood, setMood] = useState("");

  function updateDisplay() {
    setDisplayLyric(true)
  }

  function updateGenre(event) {
    setGenre(event.target.value)
  }

  function updateTheme(event) {
    setTheme(event.target.value)
  }

  function updateStyle(event) {
    setStyle(event.target.value)
  }

  function updateMood(event) {
    setMood(event.target.value)
  }

  return (
    <>
      <Segment basic inverted color='orange' style={{padding: '1.5%'}}>
        <Header textAlign='center' as='h1'>Tune Forge</Header>
      </Segment>
      <Grid style={{margin: '0% 5%'}}>
        <Grid.Row textAlign='left' columns={5}>
          <Grid.Column>
            Genre:
            <Input fluid onChange={updateGenre} placeholder='Ex: Rock' />
          </Grid.Column>
          <Grid.Column>
            Theme:
            <Input fluid onChange={updateTheme} placeholder='Ex: Love & Hate' />
          </Grid.Column>
          <Grid.Column>
            Style:
            <Input fluid onChange={updateStyle} placeholder='Ex: Metallica' />
          </Grid.Column>
          <Grid.Column>
            Mood:
            <Input fluid onChange={updateMood} placeholder='Ex: Happy' />
          </Grid.Column>
          <Grid.Column>
            <div style={{visibility: 'hidden'}}>-</div>
            <Button primary onClick={updateDisplay}>Submit</Button>
          </Grid.Column>
        </Grid.Row>
        <Divider/>
        {displayLyric ? <Lyric genre={genre} theme={theme} style={style} mood={mood}></Lyric>: <></>}
      </Grid>
    </>
  );
}

export default Home;