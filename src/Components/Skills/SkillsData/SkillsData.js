import './SkillsData.scss';

const SkillsData = ({ skill }) => {

  const percentage = {
    width: skill.percentage + '%'
  }

  let skillDescription = "";
  switch (true) {
    case skill.percentage >= 90:
      skillDescription = "High, Comfortable";
      break;
    case skill.percentage >= 60 && skill.percentage < 90:
      skillDescription = "Medium, Improving";
      break;
    case skill.percentage < 60:
      skillDescription = "Basic, Begginer";
      break;
    default:
      skillDescription = ":c";
      break;
  }

  return (
    <div className="skills__data">
      <img src={skill.icon} alt={skill.alt} className="skills__data--icon" />
      <span className="skills__data--name">{skill.name}</span>
      <span className="skills__data--percentage">{skillDescription}</span>
      <span className="skills__data--bar" style={percentage}></span>
    </div>
  )
}

export default SkillsData;