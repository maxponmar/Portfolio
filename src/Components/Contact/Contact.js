import './Contact.scss';
import Section from '../../Shared/Section/Section';
import ContactCard from './ContactCard/ContactCard';

const Contact = ({profile}) => {
  return (
    <Section title='Contact' subtitle='Get in touch'>
      <div class="contact__container">
        <ContactCard profile={profile}/>
      </div>
    </Section>

  )
}

export default Contact;