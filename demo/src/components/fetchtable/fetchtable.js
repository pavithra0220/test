import React, { Component } from "react";

class Fetchtable extends Component {
  constructor() {
    super()
    this.state = {
      atheticdata: []
    }
  }
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json")
      .then(res => res.json().then(resp => {
        console.log("resp");
        this.setState({ atheticdata: resp })
      }))
  }
  render() {
    const { atheticdata } = this.state


    return (
      <>
        <table>
          <tr>
            <th>age</th>
            <th>country</th>
          </tr>
          {atheticdata.map((alt, index) => {
            return <tr key={index}>
              <td>{alt.age}</td>
              <td>{alt.country}</td>
            </tr>
          }
          )}
        </table>
      </>
    )
  }
}

export default Fetchtable;
