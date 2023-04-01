import { Header, Segment, Grid, Input } from 'semantic-ui-react'

function Home() {

  return (
    <>
      <Segment inverted color='orange'>
        <Header textAlign='center' as='h1'>Tune Forge</Header>
      </Segment>
      <Grid>
        <Grid.Row style={{backgroundColor: 'black'}} columns={4}>
          <Grid.Column width={4}>
            <Input fluid placeholder='Genre...' />
          </Grid.Column>
          <Grid.Column width={4}>
            <Input fluid placeholder='Theme...' />
          </Grid.Column>
          <Grid.Column width={4}>
            <Input fluid placeholder='Syle...' />
          </Grid.Column>
          <Grid.Column width={4}>
            <Input fluid placeholder='Mood...' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default Home;