import React from "react";

import './styles/app.sass';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="outer-container">
        <div className="container">
          <section className="sidebar">
            <div>
              <form>
                <label>City:</label>
                <input
                  type="text"
                  value={this.state.city}
                  onChange={this.cityChange}
                  placeholder="Städtenamen eingeben"
                />
                <input type="submit" />
              </form>
            </div>
          </section>

          <div>
            {this.state.weather == "error" ? (
              <span>Error, input not valid</span>
            ) : (
                <OpenWeatherMap {...this.state.weather} />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}
