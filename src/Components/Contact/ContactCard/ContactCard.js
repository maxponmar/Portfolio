import './ContactCard.scss';
import envelopeIcon from '../../../Assets/SVG/envelop.svg';

const ContactCard = ({ profile }) => {
  return (
    <div class="contact__card">
      <img src={profile.image} />
      <h3>{profile.name}</h3>
      <p>{profile.email}</p>
      <a
        href={'mailto:' + profile.email + '?subject=Contact from portfolio&body=Hello, ' + profile.name}
        class="button">
        <img src={envelopeIcon} class="contact__card--icon" />
            Send Email
      </a>
    </div>
  )
}

export default ContactCard;