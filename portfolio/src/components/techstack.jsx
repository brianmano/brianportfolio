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
    color: 'black',
    textAlign: 'center',
    width: '100%',          
    paddingBottom: '0.75rem', 
    };

  const badgeStyle = {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: 300,
    fontSize: 'clamp(0.3rem, 0.7vw, 3rem)',
    color: 'var(--red-12)',
    backgroundColor: 'var(--red-4)',
  };

  return (
    <div
      className="grid gap-2 w-full h-full p-3"
      style={{
        gridTemplateColumns: '2.5fr 5fr 5fr 5fr',
        gridTemplateRows: '1fr',
        overflow: 'hidden',
        display: 'grid',
      }}
    >
      {/* Tech Stack Title */}
      <div className="flex items-center justify-start pl-4">
        <Text
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(1.5rem, 2vw, 3rem)',
            fontWeight: 600,
            background: 'linear-gradient(135deg, var(--red-5) 0%, var(--red-9) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          as="div"
        >
          Tech Stack
        </Text>
      </div>

      {/* Column 2: Technological Skills */}
        <div style={{ borderLeft: '1px solid #ccc', paddingLeft: '1rem' }}>
        <Text as="div" style={sharedTitleStyle}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <GearIcon />
            Technological Skills
        </div>
        </Text>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(0.1rem, 0.3rem, 1rem)' }}>
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
            <Badge key={idx} style={badgeStyle} variant="soft">
                {tech}
            </Badge>
            ))}
        </div>
        </div>

      {/* Column 3: Programming Languages */}
      <div style={{ borderLeft: '1px solid #ccc', paddingLeft: '1rem' }}>
        <Text as="div" style={sharedTitleStyle}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <CodeIcon />
            Languages
        </div>
        </Text>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(0.1rem, 0.3rem, 1rem)' }}>
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
          <Badge key={idx} style={badgeStyle} variant="soft" className="mr-1 mb-1">
            {lang}
          </Badge>
        ))}
      </div>
      </div>

      {/* Column 4: Tools and Platforms */}
      <div style={{ borderLeft: '1px solid #ccc', paddingLeft: '1rem' }}>
        <Text as="div" style={sharedTitleStyle}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <CubeIcon />
            Tools and Platforms
        </div>
        </Text>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(0.1rem, 0.3rem, 1rem)' }}>
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
          <Badge key={idx} style={badgeStyle} variant="soft" className="mr-1 mb-1">
            {tool}
          </Badge>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TechStack;
