import React from "react";
import { graphql, Link } from "gatsby";

const About = ({ data: { prismicAboutpage } }) => (
    <React.Fragment>
        <h1>{prismicAboutpage.data.title.text}</h1>
        <div
            dangerouslySetInnerHTML={{
                __html: prismicAboutpage.data.content.html
            }}
        />
    </React.Fragment>
);

export default About;

export const pageQuery = graphql`
    query {
        prismicAboutpage {
            data {
                title {
                    text
                }
                content {
                    html
                }
            }
        }
    }
`;
