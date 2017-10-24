import React, { Component } from 'react'
import { Button, Container, Divider, Grid, Header, Icon, Image, Table, List, Menu, Segment, Visibility } from 'semantic-ui-react'


class CamperList extends Component {
  state = { camperList: [], sortBy: 'username', desc:1}
  async componentDidMount () {
    const myFetch = await fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    const camperList = await myFetch.json()
    this.setState({camperList: camperList.sort((camperA, camperB) => {
      return camperA.alltime > camperB.alltime ? -1 : +1
    }).reverse()})
    console.log({camperList})
  }

   handleHeader = (sortby) =>{
    this.setState({desc:this.state.desc*-1})

  }

  /* sample results
  alltime : 525
  img : "https://avatars1.githubusercontent.com/u/4724513?v=3"
  lastUpdate : "2017-10-08T17:18:57.885Z"
  recent : 98
  username : "0x0936"
   */

  render() {
    const { camperList, sortBy, desc } = this.state
    return  (
      <Table basic='very' celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell onClick = {()=> this.handleHeader('username')}>Employee</Table.HeaderCell>
            <Table.HeaderCell onClick = {()=> this.setState({ sortBy:'alltime', desc:desc*-1})}>Correct Guesses</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          { camperList.sort((camperA, camperB) => {
            return camperA[sortBy] > camperB[sortBy] ? -1*desc : 1*desc
          }).map((camper) => {
           return (
             <Table.Row key={camper.username}>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={camper.img} shape='rounded' size='mini' />
                  <Header.Content>
                    {camper.username}
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                {camper.alltime}
              </Table.Cell>
            </Table.Row>
           )
          })}



        </Table.Body>
      </Table>
    )
  }
}

export default CamperList












