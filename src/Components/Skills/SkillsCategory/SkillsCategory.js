import SkillsData from '../SkillsData/SkillsData';
import './SkillsCategory.scss';

const SkillsCategory = ({category, skills}) => {  
  return (
    <div className="skills__category">
          <h3 className="skills__category--title">{category}</h3>
          {
            skills.map(skill => {
              return <SkillsData skill={skill}/>
            })
          }
        </div>
  );
}

export default SkillsCategory;