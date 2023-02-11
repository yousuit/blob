import React from 'react';
import { graphql, Link } from 'gatsby';

const AboutUsPage = (props: any) => {
  const { data } = props;
  if (data?.allContentfulAbout?.nodes) {
    let obj = JSON.parse(data?.allContentfulAbout?.nodes?.[0]?.about?.raw)
    console.log(obj);

    return (<React.Fragment>
      <div>About page</div>
      <h2>{data?.allContentfulAbout?.nodes?.[0]?.title}</h2>
      <span>{data?.allContentfulAbout?.nodes?.[0]?.updatedAt}</span>
      <p>{data?.allContentfulAbout?.nodes?.[0]?.date}</p>
      {obj?.content?.map((item: any) => {
        return item.content.map((subitem: any) => {
          return <p>{subitem.value}</p>
        })
      })}
      <Link to="/">Back to home</Link>
    </React.Fragment>)
  }
}
export default AboutUsPage;

export const query = graphql`query MyQuery {
  allContentfulAbout {
    nodes {
      about {
        raw
      }
      date
      spaceId
      image {
        url
      }
      title
      updatedAt
    }
  }
}`


