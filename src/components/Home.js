import { Header, Segment, Grid, Input, Divider, Button, Select } from 'semantic-ui-react'
import React, { useEffect, useState } from 'react';
import Lyric from './Lyric';

function Home() {

  const [displayLyric, setDisplayLyric] = useState(false);
  const [text, setText] = useState("");
  const [genre, setGenre] = useState("");
  const [theme, setTheme] = useState("");
  const [style, setStyle] = useState("");
  const [mood, setMood] = useState("");
  const [key, setKey] = useState("");
  const [language, setLanguage] = useState("");
  const [URL, setURL] = useState("");

  useEffect(() => {

    if (URL !== "") {
      const sse = new EventSource(URL);
      sse.onmessage = e => setText(prevText => prevText + JSON.parse(e.data).text);
      sse.onerror = e => {
        console.log('Deu erro!!')
        sse.close()
      };

      return () => {
        sse.close();
      };
    }

  }, [URL])

  function makeRequest() {

    setText("");

    const params = new URLSearchParams({
        genre: genre,
        theme: theme,
        style: style,
        mood: mood,
        lang: language,
        key: key
    });

    const URL = "http://localhost:5001/generate?" + params.toString();
    setURL(URL);

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

  function updateKey(event) {
    setKey(event.target.value)
  }

  function updateLanguage(_, { value }) {
    setLanguage(value)
  }

  const optionsLanguage = [
    { key: 'e', text: 'English', value: 'en' },
    { key: 'p', text: 'Portuguese', value: 'pt-br' },
  ]

  return (
    <>
      <Segment basic inverted color='orange' style={{padding: '1.5%'}}>
        <Header textAlign='center' as='h1'>Tune Forge</Header>
      </Segment>
      <Grid style={{margin: '0% 5%'}}>
        <Grid.Row textAlign='left' columns={4}>
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
        </Grid.Row>
        <Grid.Row textAlign='left' columns={3}>
          <Grid.Column>
            Key:
            <Input fluid onChange={updateKey} placeholder='Ex: C#' />
          </Grid.Column>
          <Grid.Column>
            Language:
            <Select fluid onChange={updateLanguage} options={optionsLanguage} placeholder='English' />
          </Grid.Column>
          <Grid.Column>
            <div style={{visibility: 'hidden'}}>-</div>
            <Button primary onClick={makeRequest}>Submit</Button>
          </Grid.Column>
        </Grid.Row>
        <Divider/>
        {displayLyric ? <Lyric text={text} ></Lyric>: <></>}
      </Grid>
    </>
  );
}

export default Home;