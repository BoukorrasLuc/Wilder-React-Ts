import "./skills.scss";

interface Props {
  skills: [{ title: string; votes: number }];
}

const Skills = ({ skills }: Props) => {
  return (
    <div className="skills">
      {skills.map((skill, idx) => (
        // return (
        <div className="skillsMap" key={idx}>
          <div className="title">{skill.title}</div>
          <div className="votes">{skill.votes}</div>
        </div>
        // );
      ))}
    </div>
  );
};

export default Skills;
