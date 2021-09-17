import axios from "axios";
import React, { Component } from "react";
import DataTable from "./DataTable";
import "./ProductStyle.css";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      search: "",
      loading: false,
      currentPage: 1,
      postPerPage: 10,
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (number = 1) => {
    const url = "https://face.ox-sys.com/variations";
    axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        params: {
          page: number,
        },
      })
      .then((response) => {
        this.setState({ products: response.data });
        this.setState({ loading: false });
        // console.log(response.data);
        console.log("products => ", this.state.products);
      })
      .catch((err) => console.log(err));
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { products, search, currentPage, postPerPage } = this.state;
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    // const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <>
        <div className="product-container">
          <DataTable
            products={this.state.products}
            loading={this.state.loading}
          />
        </div>
      </>
    );
  }
}

export default Product;
