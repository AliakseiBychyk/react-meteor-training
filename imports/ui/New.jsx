import React, { Component } from 'react'
import metrics from '../assets/metrics.json'
import grades from '../assets/grades.json'

class New extends Component {
  render() {
    return (
      <div className="row">
        <form className="col s12">
          <h3>Add a new player</h3>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Name" ref="name" type="text" className="validate" />
            </div>
            <div className="input-field col s6">
              <input placeholder="Team" ref="team" type="text" className="validate" />
            </div>
          </div>
          {
            metrics.map(metric => (
              <div className="" key={metric.metricName}>
                <div className="col s6">
                  <h5>{metric.metricText}</h5>
                  <select className="browser-default" ref={metric.metricName}>
                    {
                      grades.map(grade => (
                        <option value={grade.value} key={grade.value}>
                          {`${grade.value} - ${grade.text}`}
                        </option>
                      ))
                    }              
                  </select>
                </div>
              </div>
            ))
          }
          <div className="row">
            <div className="col s6">
              <textarea placeholder="Notes" ref="notes" className="materialize-textarea" />
            </div>
            <div className="col s6">
              <button className="btn waves-effect waves-light" type="submit" name="action">
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default New