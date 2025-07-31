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
    listStyleType: 'disc',
    paddingLeft: '1rem',
    marginTop: '0.5rem',
    columnCount: 2,      // 2 vertical columns
    columnGap: '1.1rem',   // gap between columns
  };

  const badgeFixedWidth = {
    width: 'clamp(0.8rem, 7vw, 10rem)',       // fixed width for uniform badges
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
            'Ansys Fluent',
            'OpenFOAM',
            'Altair HyperMesh',
            'Altair MotionView',
            'Siemens NX',
            'Rhino',
            'CATIA',
            'Paraview',
            'Fusion 360',
            'Inventor',
            'SolidWorks',
          ].map((tech, idx) => (
            <li key={idx} style={{ marginBottom: 'clamp(0.1rem, 0.2vw, 4rem)' }}>
              <Badge
                style={{ ...badgeStyle, ...badgeFixedWidth }}
                variant="soft"
              >
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
            'Python',
            'C',
            'C#',
            'C++',
            'Java',
            'CSS',
            'HTML',
            'JavaScript',
            'TypeScript',
            'SQL',
            'Matlab',
            'VBA',
          ].map((lang, idx) => (
            <li key={idx} style={{ marginBottom: 'clamp(0.1rem, 0.2vw, 4rem)' }}>
              <Badge
                style={{ ...badgeStyle, ...badgeFixedWidth }}
                variant="soft"
              >
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
            'AVL',
            'CANape',
            '.NET',
            'Matlab Simulink',
            'Apache Kafka',
            'AWS (S3)',
            'Azure',
            'CANBus',
            'Docker',
            'Git',
            'Kubernetes',
            'Linux',
            'WPF',
          ].map((tool, idx) => (
            <li key={idx} style={{ marginBottom: 'clamp(0.1rem, 0.2vw, 4rem)' }}>
              <Badge
                style={{ ...badgeStyle, ...badgeFixedWidth }}
                variant="soft"
              >
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
