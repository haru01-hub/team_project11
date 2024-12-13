// import ProductList from 'src/components/shared/product/product-list'
// import sampleData from 'src/lib/sample-data'

// export default function Home() {
//   return (
//     <div className="space-y-8">
//       <h2 className="h3-bold">전자책 구매</h2>
//       <ProductList data={sampleData.products} />
//     </div>
//   )
// }

import ProductList from 'src/components/shared/product/product-list'
import sampleData from 'src/lib/sample-data'

export default function Home() {
  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Latest Products</h2>
      <ProductList data={sampleData.products} />
    </div>
  )
}
