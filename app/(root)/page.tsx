import React from "react";
import { Button } from "@/components/ui/button";
import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/components/db/sample-data";
export default function HomePage() {
  return (
    <div className="wrapper">
      <ProductList data={sampleData.products}></ProductList>
    </div>
  );
}