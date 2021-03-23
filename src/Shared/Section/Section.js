import './Section.scss';

const SectionTitle = (title, subtitle) => {
  if (title && subtitle) {
    return (
      <div>
        <span className="section__subtitle">{subtitle}</span>
        <h2 className="section__title">{title}</h2>
      </div>
    );  
  }
  return (<div></div>);
}

const Section = (props) => {  
  const name = props.title.toLowerCase();
  return (
    <section className={name + " section"} id={name}>
      {SectionTitle(props.title, props.subtitle)}
      {props.children}
    </section>
  )
}

export default Section;