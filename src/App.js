import './App.css';
import {Button, ButtonGroup,Form, Container,FormGroup,FormInput,Grid,GridColumn,GridRow,Header,Icon,Segment,Statistic, StatisticValue} from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <Header as ='h1'>Budget</Header>
      <Statistic size='small'>
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>2,500.34</Statistic.Value>
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
        <GridRow>
          <GridColumn>
            <Statistic size='tiny' color='geen'>
              <Statistic.Label style={{textAlign:'left'}}>
                Incomming:
              </Statistic.Label>
              <StatisticValue>1045.60</StatisticValue>  
            </Statistic>
          </GridColumn>
          <GridColumn>
          <Statistic size='tiny' color='red'>
            <Statistic.Label style={{textAlign:'left'}}>
              Expenses:
            </Statistic.Label>
            <StatisticValue>630.60</StatisticValue>  
          </Statistic>
          </GridColumn>
        </GridRow>  
        </Grid>
      </Segment>

      <Segment>
        <Header as ='h3'>History</Header>
        <Segment color='red'></Segment>
        <Grid columns={3} textAlign='left'>
          <GridRow>
            <GridColumn width={10} textAlign='left'>Something</GridColumn>
            <GridColumn width={3} textAlign='right'>10.54</GridColumn>
            <GridColumn width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' bordered/>
              </GridColumn>
          </GridRow>
          <GridRow>

              <GridColumn width={10} textAlign='left'>AMC</GridColumn>
            <GridColumn width={3} textAlign='right'>12.54</GridColumn>
            <GridColumn width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' bordered/>
              </GridColumn>
          </GridRow>
          <GridRow>
              <GridColumn width={10} textAlign='left'>Bill</GridColumn>
            <GridColumn width={3} textAlign='right'>20.54</GridColumn>
            <GridColumn width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' bordered/>
              </GridColumn>
          </GridRow>  
        </Grid>
      </Segment>

      <Header as='h3'>Add New Transaction</Header>
      <Form unstackable>
        <FormGroup>
          <FormInput
            icon='tags'
            width={12}
            label='Description'
            placeholder='New shinny things'/>
          
          <FormInput

            width={4}
            label='Value'
            placeholder='100.00'
            icon='dollar'
            iconPosition='left'/>
            
        </FormGroup>
        <ButtonGroup style={{marginTop:20}}>
          <Button>Cancel</Button>
          <Button.Or/>

          <Button primary>OK</Button>
        </ButtonGroup>


      </Form>


    </Container>
  );
}

export default App;
