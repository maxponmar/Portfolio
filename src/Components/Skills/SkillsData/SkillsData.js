import './SkillsData.scss';

const SkillsData = ({skill}) => {

  const percentage = {
    width: skill.percentage + '%'
  }
  
  return (
    <div className="skills__data">
      <img src={skill.icon} alt={skill.alt} className="skills__data--icon" />
      <span className="skills__data--name">{skill.name}</span>
      <span className="skills__data--percentage">{skill.percentage}%</span>
      <span className="skills__data--bar" style={percentage}></span>
    </div>
  )
}

export default SkillsData;