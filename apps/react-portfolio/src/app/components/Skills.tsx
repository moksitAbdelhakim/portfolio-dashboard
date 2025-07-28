import aws from '../../assets/icons/skills/aws.svg';
import azure from '../../assets/icons/skills/azure.svg';
import terraform from '../../assets/icons/skills/terraform.svg';
import grafana from '../../assets/icons/skills/grafana.svg';
import prometheus from '../../assets/icons/skills/prometheus.svg';
import java from '../../assets/icons/skills/java.svg';
import c from '../../assets/icons/skills/c.svg';
import javascript from '../../assets/icons/skills/javascript.svg';
import typescript from '../../assets/icons/skills/typescript.svg';
import python from '../../assets/icons/skills/python.svg';
import react from '../../assets/icons/skills/react.svg';
import springBoot from '../../assets/icons/skills/spring-boot.svg';
import express from '../../assets/icons/skills/express.svg';
import threejs from '../../assets/icons/skills/threejs.svg';
import tailwind from '../../assets/icons/skills/tailwindcss.svg';
import arduino from '../../assets/icons/skills/arduino.svg';
import raspberryPi from '../../assets/icons/skills/raspberry-pi.svg';
import linux from '../../assets/icons/skills/linux.svg';
import docker from '../../assets/icons/skills/docker.svg';
import kubernetes from '../../assets/icons/skills/kubernetes.svg';
import git from '../../assets/icons/skills/git.svg';
import github from '../../assets/icons/skills/github.svg';
import gitlab from '../../assets/icons/skills/gitlab.svg';
import bash from '../../assets/icons/skills/bash.svg';
import sql from '../../assets/icons/skills/sql.svg';

const Skills = () => {
  const skills = [
    { name: 'AWS', icon: aws },
    { name: 'Azure', icon: azure },
    { name: 'Terraform', icon: terraform },
    { name: 'Grafana', icon: grafana },
    { name: 'Prometheus', icon: prometheus },
    { name: 'Java', icon: java },
    { name: 'C', icon: c },
    { name: 'JavaScript', icon: javascript },
    { name: 'TypeScript', icon: typescript },
    { name: 'Python', icon: python },
    { name: 'React.js', icon: react },
    { name: 'Spring Boot', icon: springBoot },
    { name: 'Express.js', icon: express },
    { name: 'three.js', icon: threejs },
    { name: 'Tailwind CSS', icon: tailwind },
    { name: 'Arduino', icon: arduino },
    { name: 'Raspberry Pi', icon: raspberryPi },
    { name: 'Linux', icon: linux },
    { name: 'Docker', icon: docker },
    { name: 'Kubernetes', icon: kubernetes },
    { name: 'Git', icon: git },
    { name: 'GitHub', icon: github },
    { name: 'GitLab', icon: gitlab },
    { name: 'Bash', icon: bash },
    { name: 'SQL', icon: sql },
  ];
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-3 mt-12">Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-center p-4 bg-secondary rounded-lg h-14 hover:bg-secondary/60 transition-colors"
          >
            <img src={skill.icon} alt={skill.name} className="h-6 w-6" />
            <span className="ml-3">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
