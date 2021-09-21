import React from "react";
import "./App.css";

class Table extends React.Component {
  render() {
    let a = this.props.array;
    return (
      <table>
        <tbody>
          {a.map((items, index) => {
            return (
              <tr key={index.toString()}>
                {items.map((subItems, sIndex) => {
                  if (sIndex < items.length - 1) {
                    if (subItems === 1) {
                      return (
                        <td
                          key={index.toString() + sIndex.toString()}
                          bgcolor="red"
                        >
                          {subItems}
                        </td>
                      );
                    } else {
                      return (
                        <td
                          key={index.toString() + sIndex.toString()}
                          bgcolor="#7CFC00"
                        >
                          {subItems}
                        </td>
                      );
                    }
                  } else {
                    return null;
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
