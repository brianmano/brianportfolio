import { Text, Badge } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import {
  GearIcon,
  CodeIcon,
  CubeIcon,
} from '@radix-ui/react-icons';

const TechStack = () => {
  const sharedTitleStyle = {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: 'clamp(0.4rem, 1vw, 4rem)',
    fontWeight: 700,
    background: 'linear-gradient(135deg, var(--red-5) 0%, var(--red-9) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    width: '100%',
    paddingBottom: '0.75rem',
  };

  const badgeStyle = {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: 500,
    fontSize: 'clamp(0.3rem, 0.6vw, 6rem)',
    color: 'black',
    background: 'rgba(212, 212, 212, 0.06)', // soft glassy background
    border: '1px solid rgba(255, 255, 255, 0.2)', // subtle border
    borderRadius: '12px',
    padding: '0.35rem 0.75rem',
    backdropFilter: 'blur(10px)', // frosted glass effect
    WebkitBackdropFilter: 'blur(10px)', // Safari support
    boxShadow: '0 1px 2px rgba(255, 255, 255, 0.15), 0 4px 8px rgba(0, 0, 0, 0.4)',
    textAlign: 'center',
    display: 'inline-block',
  };

  const listStyle = {
    listStyleType: 'none',      
    paddingLeft: '0',           
    marginTop: '0.1rem',
    display: 'flex',            
    flexWrap: 'wrap',           
    gap: '0.25rem',              
  };

  const badgeFixedWidth = {
    width: 'clamp(3rem, 7vw, 12rem)', 
    display: 'inline-block',
    textAlign: 'center',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
  };

  return (
    <div
      className="grid gap-2 w-full h-full p-3"
      style={{
        gridTemplateColumns: '2fr 2fr 2fr',
        gridTemplateRows: '1fr',
        overflow: 'hidden',
        display: 'grid',
      }}
    >
      {/* Column 1: Technological Skills */}
      <div style={{ paddingLeft: 'clamp(0.1rem, 1vw, 2rem)' }}>
        <Text as="div" style={sharedTitleStyle}>
          <div
            style={{
              color: 'red',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            <GearIcon />
            Technological Skills
          </div>
        </Text>
        <ul style={listStyle}>
          {[
            'Ansys Fluent', 'OpenFOAM', 'Altair HyperMesh', 'Altair MotionView',
            'Siemens NX', 'Rhino', 'CATIA', 'Paraview', 'Fusion 360', 'Inventor', 'SolidWorks',
          ].map((tech, idx) => (
            // The 'gap' property on <ul> now handles spacing, so marginBottom is removed.
            <li key={idx}>
              <Badge style={{ ...badgeStyle, ...badgeFixedWidth }} variant="soft">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 2: Programming Languages */}
      <div style={{ borderLeft: '1px solid #ccc', paddingLeft: 'clamp(0.1rem, 1vw, 2rem)' }}>
        <Text as="div" style={sharedTitleStyle}>
          <div
            style={{
              color: 'red',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            <CodeIcon />
            Languages
          </div>
        </Text>
        <ul style={listStyle}>
          {[
            'Python', 'C', 'C#', 'C++', 'Java', 'CSS', 'HTML', 'JavaScript',
            'TypeScript', 'SQL', 'Matlab', 'VBA',
          ].map((lang, idx) => (
            <li key={idx}>
              <Badge style={{ ...badgeStyle, ...badgeFixedWidth }} variant="soft">
                {lang}
              </Badge>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Tools and Platforms */}
      <div style={{ borderLeft: '1px solid #ccc', paddingLeft: 'clamp(0.1rem, 1vw, 2rem)' }}>
        <Text as="div" style={sharedTitleStyle}>
          <div
            style={{
              color: 'red',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            <CubeIcon />
            Tools and Platforms
          </div>
        </Text>
        <ul style={listStyle}>
          {[
            'AVL', 'CANape', '.NET', 'Matlab Simulink', 'Apache Kafka', 'AWS (S3)',
            'Azure', 'CANBus', 'Docker', 'Git', 'Kubernetes', 'Linux', 'WPF',
          ].map((tool, idx) => (
            <li key={idx}>
              <Badge style={{ ...badgeStyle, ...badgeFixedWidth }} variant="soft">
                {tool}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechStack;