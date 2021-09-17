import React, { Component } from "react";
import "./ProductStyle.css";

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;

    return (
      <>
        {this.props.loading ? (
          <>
            <h1>Loading...</h1>
          </>
        ) : (
          <>
            {this.props.products.items === undefined ? (
              <h1
                style={{ textAlign: "center", padding: "0.5rem", color: "red" }}
              >
                Loading...
              </h1>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Search by name..."
                  className="data-table-input"
                  onChange={this.handleChange}
                />
                <table className="data-table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Supplier</th>
                      <th scope="col">Unit</th>
                    </tr>
                  </thead>
                  {this.props.products.items
                    .filter((data) => {
                      if (search === "") {
                        return data;
                      } else if (
                        data.name.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return data;
                      }
                    })
                    .map((item, id) => (
                      <tbody>
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.supplier}</td>
                          <td>{item.unit}</td>
                        </tr>
                      </tbody>
                    ))}
                </table>
              </>
            )}
          </>
        )}
      </>
    );
  }
}

export default DataTable;
