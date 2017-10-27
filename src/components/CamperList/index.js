import React, { Component } from 'react'
import { Header, Image, Table } from 'semantic-ui-react'

class CamperList extends Component {
  state = { camperList: [], sortBy: 'username', asc: 1 }
  async componentDidMount() {
    const myFetch = await fetch(
      'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
    )
    const camperList = await myFetch.json()
    this.setState({
      camperList: camperList
        .sort((camperA, camperB) => {
          return camperA.alltime > camperB.alltime ? -1 : +1
        })
        .reverse(),
    })
    console.log({ camperList })
  }

  handleHeader = sortby => {
    this.setState({ asc: this.state.asc * -1 })
  }

  /* sample results
  alltime : 525
  img : "https://avatars1.githubusercontent.com/u/4724513?v=3"
  lastUpdate : "2017-10-08T17:18:57.885Z"
  recent : 98
  username : "0x0936"
   */

  render() {
    const { changeSortBy, sortBy, asc } = this.props
    const { camperList } = this.state
    return (
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell onClick={() => changeSortBy('username')}>
              Employee
            </Table.HeaderCell>
            <Table.HeaderCell onClick={() => changeSortBy('alltime')}>
              Correct Guesses
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {camperList
            .sort((camperA, camperB) => {
              return camperA[sortBy] > camperB[sortBy] ? -1 * asc : 1 * asc
            })
            .map(camper => {
              return (
                <Table.Row key={camper.username}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Image src={camper.img} shape="rounded" size="mini" />
                      <Header.Content>{camper.username}</Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{camper.alltime}</Table.Cell>
                </Table.Row>
              )
            })}
        </Table.Body>
      </Table>
    )
  }
}

export default CamperList
