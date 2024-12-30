const About = (props) => {
    return (
    <section>
        <h2>This is my About Page</h2>
        <h3>I am Studying in {props.college} </h3>
        <h3>Other Colleges: {props.clg1},{props.clg2}</h3>
        </section>
    );
};
export default About;