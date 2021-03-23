import './Skills.scss';
import Section from '../../Shared/Section/Section';
import SkillsCategory from './SkillsCategory/SkillsCategory';


import { frontendSkills, backendSkills, databaseSkills } from '../../Data/userData';

const Skills = () => {

  return (
    <Section title='Skills' subtitle='Why Choose Me'>
      <div className="skills__container">
        <SkillsCategory key='Frontend' title='Frontend' skills={frontendSkills}/>
        <SkillsCategory key='Backend' title='Backend' skills={backendSkills}/>
        <SkillsCategory key='Database' title='Databases' skills={databaseSkills}/>
      </div>
    </Section>
  )
}

export default Skills;