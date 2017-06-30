import React, { Component } from "react";

class NotificationDropdown extends Component {
  render() {
    const update = [
      {
        thumbnail:
          "https://art-s.nflximg.net/cfb70/84fbc17c1436ca5db99975a44c8db4a635fcfb70.jpg",
        type: "New Arrival",
        description: "Doctor Strange",
        date: "1 month ago"
      },
      {
        thumbnail:
          "https://art-s.nflximg.net/5f0eb/bc04c1836d651965390e2c17fa3eba0348d5f0eb.jpg",
        type: "Now Available",
        description: "Season 5",
        date: "1 month ago"
      },
      {
        thumbnail:
          "https://art-s.nflximg.net/81616/2b72902d8d2e675553f0122ada72764814781616.jpg",
        type: "Now Available",
        description: "Season 2",
        date: "1 month ago"
      }
    ];
    return (
      <div className="notif-options">
        {update.map(item => {
          return (
            <div className="update" key={item.thumbnail}>
              <img src={item.thumbnail} alt="thumbnail" />
              <div>
                <div className="update-type">
                  {item.type}
                </div>
                <div className="update-description">
                  {item.description}
                </div>
                <div className="update-date">
                  {item.date}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NotificationDropdown;
