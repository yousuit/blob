import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    const contentful = require('contentful')

    const client = contentful.createClient({
      space: 'h65mfv2bq0je',
      environment: 'master', // defaults to 'master' if not set
      accessToken: 'j-kEZS572WeWPeAC84lst38CFEivPHsdvbcfo1j_55M'
    })
    client.getEntries()
      .then((response: any) => setProducts(response.items))
      .catch(console.error)
  }, [])
  const [products, setProducts] = React.useState<any>([])
  console.log(products);

  return (
    <div className="container mt-3">
      <Link to="/about">Go about</Link>
      <Link to="/form-page">Go form page</Link>
      <h2>Product List</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Product name</th>
            <th>Description</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {
            products.length > 0 && products.map((item: any, index: number) => {
              return (<tr key={index}>
                <td>{item.fields.productName}</td>
                {/* <td>{item.fields.description.content[0].content[0].value}</td> */}
                <td>{item.fields.quantity}</td>
              </tr>)
            })
          }

        </tbody>
      </table>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
