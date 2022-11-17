import React from "react";

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const productName = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );
    return (
      <tr>
        <td>{productName}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductCategory extends React.Component {
  render() {
    return (
      <tr>
        <th>{this.props.category}</th>
      </tr>
    );
  }
}

class SearchBar extends React.Component {
  handleFilterChange = (e) => {
    this.props.handleChangeFilterText(e.target.value);
  };

  handleInStockChange = (e) => {
    this.props.handleChangeCheckbox(e.target.checked);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.props.filterText}
          onChange={this.handleFilterChange}
          placeholder="Search..."
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.isInStockOnly}
            onChange={this.handleInStockChange}
          />
          Only show product in stock
        </p>
      </form>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const row = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        row.push(
          <ProductCategory category={product.category} key={product.category} />
        );
      }

      row.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: "", isStockReady: false };
  }

  handleChangeFilterText = (filterText) => {
    this.setState({ filterText: filterText });
  };

  handleChangeCheckbox = (isInStockOnly) => {
    this.setState({ isStockReady: isInStockOnly });
  };

  render() {
    let result = [];
    if (this.state.isStockReady) {
      PRODUCTS.forEach((product) => {
        if (product.stocked) result.push(product);
      });
    } else result = PRODUCTS;

    return (
      <div style={{ width: "250px" }}>
        <SearchBar
          filterText={this.state.filterText}
          isStockReady={this.state.isStockReady}
          handleChangeFilterText={this.handleChangeFilterText}
          handleChangeCheckbox={this.handleChangeCheckbox}
        />
        <ProductTable products={result} />
      </div>
    );
  }
}

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

export { FilterableProductTable };
