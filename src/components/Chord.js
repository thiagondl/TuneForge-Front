import React from 'react';
import { Popup, Image, Header } from 'semantic-ui-react';
import '../App.css';
import chords from './chords.json';

function ListPopup(props) {
    if(props.value!='' && (props.value.startsWith(">") || props.value.startsWith("["))){
        return (<pre>{props.value.replace('>','')}</pre>);
    }else {
        var arr = props.value.split(',');
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

function Chord () {
    const a = {
        "music": [
            "Key: E",
            "",
            "[Intro]",
            "E, B, C#m, A ",
            "",
            "[Verse 1]",
            "E,                                        B",
            ">Got a taste of fame, now I can't slow down",
            "C#m,                                       A",
            ">Every move I make, they follow me around",
            "E,                                               B",
            ">Can't even go to lunch without a crowd ",
            "C#m,                                         A",
            ">Every single moment, they're screaming out loud",
            "",
            "[Chorus]",
            "E,                                       B",
            ">Here I am, the one they all love to hate ",
            "C#m,                                          A",
            ">Can't escape, can't get away ",
            "E,                                             B",
            ">Living my life just like a runaway ",
            "C#m,                                          A",
            ">Lost in the fame, can't find my way ",
            "",
            "[Verse 2]",
            "E,                                                B",
            ">Feeling like a puppet, they pull my strings ",
            "C#m,                                          A",
            ">Always in the spotlight, never off the scene ",
            "E,                                                   B",
            ">Can't take a step without a flash machine ",
            "C#m,                                                A",
            ">Every move I make, it's like I'm in a dream ",
            "",
            "[Chorus]",
            "E,                                       B",
            ">Here I am, the one they all love to hate ",
            "C#m,                                          A",
            ">Can't escape, can't get away ",
            "E,                                             B",
            ">Living my life just like a runaway ",
            "C#m,                                          A",
            ">Lost in the fame, can't find my way ",
            "",
            "[Bridge]",
            "C#m,                B,                 A,              E",
            ">Picture perfect, but it's not what it seems ",
            "C#m,                 B,                    A,             E",
            ">Living in the moment, just like a machine ",
            "C#m,               B,                  A,                E",
            ">But somewhere deep inside I'm just like you ",
            "C#m,                 B,                     A,                  E",
            ">Lost in the fame, trying to find the truth ",
            "",
            "[Chorus]",
            "E,                                       B",
            ">Here I am, the one they all love to hate ",
            "C#m,                                          A",
            ">Can't escape, can't get away ",
            "E,                                             B",
            ">Living my life just like a runaway ",
            "C#m,                                          A",
            ">Lost in the fame, can't find my way ",
            "",
            "[Outro]",
            "E, B, C#m, A"
        ]
    }
    const music = a.music;
    const x = music.shift().replace('Key: ','');
    console.log(x);

    return (<div>
        <Header size='medium'>Tom: {x}</Header>
        <MyPopupChords chords={music}></MyPopupChords>
      </div>)
}

export default Chord;