import React from 'react';
import { Grid, Popup, Image, Header } from 'semantic-ui-react';
import '../App.css';
import chords from './chords.json';

function ListPopup(props) {
    if(props.value!=='' && (props.value.startsWith(">") || props.value.startsWith("["))){
        return (<pre>{props.value.replace('>','')}</pre>);
    }else {
        var arr = props.value.split('.');
        return (<pre>
            {arr.map((a) => (
                <Popup trigger={
                        <b>{a}</b>
                    }>
                    <Popup.Header style={{ textAlign: 'center' }}>{a}</Popup.Header>
                    <Popup.Content>
                        <Image src={chords[a.replace(/\s/g, '')]} className='chord'/>
                    </Popup.Content>
                </Popup>)
              )}
        </pre>)
    }
}

function MyPopupChords(props) {
    const items = props.chords.map((item) =>
      <ListPopup value={item} />
    );

    return (
      <div>
        {items}
      </div>
    );
  }

function Chord (props) {
    const music = props.text.split("\n");

    const x = music.shift().replace('Key: ','');

    return (<div>
        <Header size='medium'>Tom: {x}</Header>
        <MyPopupChords chords={music}></MyPopupChords>
      </div>)
}

function Lyric(props) {
  return (
    <>
      <Grid.Row>
        <Grid.Column>
          <Chord text={props.text}></Chord>
        </Grid.Column> 
      </Grid.Row>
    </>
  );
}

export default Lyric;