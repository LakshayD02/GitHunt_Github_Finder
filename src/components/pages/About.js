import React from "react";
import { Segment, Header } from "semantic-ui-react";

function About() {
  return (
    <Segment style={styles.segment}>
      <Header as="h4" style={styles.header} content="GitHunt: Github Profile Finder" />
      <p style={styles.paragraph}>Tech Stack Used: Reactjs, Github API, and Semantic UI</p>
      <p style={styles.paragraph}>Developed By: Lakshay Dhoundiyal</p>
      <p style={styles.link}>
       My Portfolio Website: <a href="https://lakshaydhoundiyalportfolio.netlify.app" target="_blank" rel="noopener noreferrer">Click Here</a>
      </p>
    </Segment>
  );
}

export default About;

const styles = {
  segment: {
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: 'auto',
    marginTop: '3rem',
    textAlign: 'center',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    color: '#666',
  },
  link: {
    fontSize: '1.2rem',
    color: '#007bff',
  }
};
