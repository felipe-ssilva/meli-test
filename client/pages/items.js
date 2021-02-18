import React, { Fragment } from "react";
import Head from "next/head";

import Breadcrumbs from "../src/components/organisms/Breadcrumbs";
import Content from "../src/components/atoms/Content";
import ResultsList from "../src/components/organisms/ResultsList";
import ProductDetails from "../src/components/organisms/ProductDetails";
import { searchResultsAction } from "../src/redux/actions/resultsActions";
import { getProductAction } from "../src/redux/actions/productActions";

function Page({ id, search, results, product }) {
  function _renderResultsOrProductDetails() {
    if (id)
      return (
        <Fragment>
          <Breadcrumbs links={product.categories} />
          <ProductDetails {...product.item} />
        </Fragment>
      );
    return (
      <Fragment>
        <Breadcrumbs links={results.categories} />
        <ResultsList list={results.items} />
      </Fragment>
    );
  }
  return (
    <Content as="main">
      <Head>
        <title>Results</title>
      </Head>
      {_renderResultsOrProductDetails()}
    </Content>
  );
}

Page.getInitialProps = async ({ store, query }) => {
  const { id, search } = query;

  if (search) {
    await store.dispatch(searchResultsAction(search));
    const { results } = store.getState();
    return { search, results };
  }

  if (id) {
    await store.dispatch(getProductAction(id));
    const { product } = store.getState();
    return { id, product};
  }

  return {
    id,
    search
  };
};

export default Page;
