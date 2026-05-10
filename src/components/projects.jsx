import { Text, Button, AlertDialog, Flex, Badge } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import oilstainlabsimg from '../assets/oilstainlabscfd.png';
import fsae from '../assets/fsae1.png';
import lyriq from '../assets/lyriq1.png';
import lyriqcool from '../assets/lyriqcool.png';
import lyriqcals from '../assets/lyriqcals.png';
import scalar from '../assets/scalar1.png';
import leetbuddy from '../assets/leetbuddy.png';
import heatsink from '../assets/heatsink.png';
import pacemaker from '../assets/pacemaker.png';
import ecolift from '../assets/ecolift1.png';
import { DoubleArrowRightIcon, LayersIcon } from '@radix-ui/react-icons';


const sharedBackground = 'linear-gradient(135deg, var(--red-5), var(--red-9))';
const sharedTextColor = 'white';

const projects = [
  
{
  title: 'HF-11 Underbody Aero Design',
  image: oilstainlabsimg,
  description: 'Designed and optimized underbody aerodynamics of the HF-11 Hypercar with venturi channels/flaps using CFD and wind tunnel validation.',
  tag: 'Rhino, Ansys Fluent, CFD, Aerodynamic Design',
  link: 'https://drive.google.com/file/d/1BtjN2IYbhY-BlZYUS-iY8AX5fj5Cyl-W/view?usp=sharing', 
},
    {
    title: 'SCR1 Race Telemetry Platform',
    image: scalar,
    description:
      'Developed a real-time telemetry platform, including streaming processing pipelines, cloud storage, customizable dashboards, and plug-n-play hardware & wiring harnesses.',
    tag: 'Python, Kafka, Kubernetes, CANBus, Docker, Azure SQL, MQTT, Quix',
    link: 'https://drive.google.com/file/d/1Awff38ZsXIIIJX95C6_uSioEuL-ADvmQ/view?usp=sharing/'
  },
  {
    title: 'Cadillac Lyriq Aero Package',
    image: lyriq,
    description:
      'Designed aero components and validated drag reduction through CFD. Developed automation scripts to increase efficiency in the CFD workflow.',
    tag: 'Siemens NX, Ansys Fluent, CFD, Python, Aerodynamic Design',
    link: 'https://www.macecocar.ca/'
  },
  {
    title: 'Formula Student Aero Genetic Algorithm',
    image: fsae,
    description:
      'Developing genetic algorithms to automate and optimize aero component setups, including AoA, position, and scale.',
    tag: 'OpenFOAM, Python, CFD, Genetic Programming',
    link: 'https://github.com/brianmano/openfoamautomation'
  },
    {
    title: 'Cadillac Lyriq Internal Thermal System',
    image: lyriqcool,
    description:
      'Designed and integrated an internal thermal system, decreasing ambient temperatures of rear computer modules. Validated through thermal fluid studies.',
    tag: 'Siemens NX, Thermal Fluids',
    link: 'https://drive.google.com/file/d/1MycHKIV_fjeRdH1LXnZ22IIs5Ie6UfUq/view?usp=sharing'
  },

        {
    title: 'EcoLift Robotic Spotter',
    image: ecolift,
    description:
      'An automatic robotic spotter that integrates software, electrical, and mechanical components to detect exercising failures and provide safety assistance to the user.',
    tag: 'SolidWorks, FEA, Manufacturing, Python, React, WebSocket',
    link: 'https://github.com/luciancheng/EcoLift'
  },

        {
    title: 'CPU Heatsink Design',
    image: heatsink,
    description:
      'Designed a custom CPU Heatsink using natural convection to reduce maximum temperatures compared to a factory design by 33%.',
    tag: 'Fusion360, Thermal Analysis, Material Design, Manufacturing',
    link: 'https://drive.google.com/file/d/1i6HKiGWrDh3BUJud11zgsxfElHyp_LHL/view?usp=sharing', 
  },
    {
    title: 'LeetBuddy',
    image: leetbuddy,
    description:
      'Developed a Google Chrome Extension (3000+ active users) leveraging Generative AI to provide real-time, context-aware support for LeetCode problems to personalize software interview preparation.',
    tag: 'React, Tailwind, Express.js, Generative AI, Redis, Docker',
    link: 'https://chromewebstore.google.com/detail/leetbuddy-your-ai-powered/nlemdecocfoaimdbfgpilfgdmcllhphn'
  },
        {
    title: 'Cadillac Lyriq Control System Validation & Fault Analysis',
    image: lyriqcals,
    description:
      'Contributed towards a root-cause analysis for low RPM torque bogging of an EV motor using a data-driven process to prove control system accuracy and isolated third-part defects.',
    tag: 'Matlab Simulink, CANApe, AVL',
    link: 'https://www.macecocar.ca/'
  },
      {
    title: 'Pacemaker Project',
    image: pacemaker,
    description:
      'Engineered a modern pacemaker, using Simulink code logic with a user-friendly GUI, and using an NXP FRDM K64F for serial communication.',
    tag: 'Python, Simulink, Serial Communication, NXP FRDM K64F Board',
    link: 'https://github.com/brianmano/Pacemaker_Project', 
  },

];

const Projects = () => {
  return (
    <div
      className="grid gap-4 w-full h-full p-3"
      style={{
        gridTemplateRows: '0.1fr 1fr',
        display: 'grid',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Copyright Notice */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          color: 'gray',
          fontSize: '0.75rem',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: 400,
          zIndex: 10,
        }}
      >
        © 2026 Brian Manomaisupat. All rights reserved.
      </div>

      {/* Title */}
      <div className="flex items-center justify-start pl-4">
        <Text
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: 'clamp(1.5rem, 2vw, 3rem)',
            fontWeight: 600,
            background: sharedBackground,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          as="div"
        >
          Projects
        </Text>
      </div>

      {/* Scrollable Grid Container */}
      <div
        className="custom-scroll projects-grid"
        style={{
          overflowY: 'auto',
          paddingRight: '0.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem',
          maxHeight: '80vh',
          justifyItems: 'center',
        }}
      >
        {projects.map((project, index) => (
          <AlertDialog.Root key={index}>
            <AlertDialog.Trigger asChild>
                <div
                className="hover-scale project-card-mobile"
                style={{
                    position: 'relative',
                    background: sharedBackground,
                    color: sharedTextColor,
                    borderRadius: '1rem',
                    cursor: 'pointer',
                    display: 'grid',
                    gridTemplateRows: 'auto auto auto', // Allow rows to auto size
                    width: '100%',
                    minHeight: '240px', // Increased minHeight
                    padding: '1rem',
                    gap: '0.5rem',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    boxSizing: 'border-box',
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                >
                {/* Top Row: Image + Title & Description */}
                <div
                  className="project-top-row"
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                >
                    <div
                    className="project-card-image"
                    style={{
                        width: '40%',
                        aspectRatio: '1.4',
                        borderRadius: '0.75rem',
                        overflow: 'hidden',
                        flexShrink: 0,
                    }}
                    >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>

                  <div
                    style={{
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                <Text
                className="project-title project-overlay-content"
                as="div"
                style={{
                    fontSize: 'clamp(0.3rem, 0.8vw, 1.25rem)', // Reasonable clamp
                    fontWeight: 700,
                    lineHeight: 1.4, // More breathing room
                    overflowWrap: 'break-word',
                    wordBreak: 'break-word',
                }}
                >
                {project.title}
                </Text>

                <Text
                className="project-description"
                as="div"
                style={{
                    fontSize: 'clamp(0.4rem, 0.6vw, 1rem)', // Adjusted clamp
                    opacity: 0.85,
                    marginTop: '0.25rem',
                    lineHeight: 1.5,
                    wordBreak: 'break-word',
                }}
                >
                {project.description}
                </Text>

                  </div>
                </div>

                {/* Bottom Row: Tags */}
                <div
                  className="project-overlay-content"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginTop: '0.3srem',
                  }}
                >
                  {project.tag.split(',').map((tagItem, tagIndex) => (
                    <Badge
                    key={tagIndex}
                    className="project-tag-badge"
                    color="ruby"
                    variant="soft"
                    style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: 'clamp(0.4rem, 0.6vw, 2rem)',
                        color: 'var(--red-11)',
                        fontWeight: 300,
                    }}
                    >
                    {tagItem.trim()}
                    </Badge>
                  ))}
                </div>

                {/* View More Button (absolute position) */}
                <div
                className="project-overlay-content"
                style={{
                    alignSelf: 'flex-end',
                    backgroundColor: 'rgba(17, 17, 17, 0.3)',
                    padding: '0.3rem 0.6rem',
                    borderRadius: '0.4rem',
                    fontSize: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 500,
                }}
                >
                View <DoubleArrowRightIcon />
                </div>
              </div>
            </AlertDialog.Trigger>

            {/* AlertDialog Content */}
                <AlertDialog.Content
                className="project-popup"
                style={{
                    maxWidth: 800,
                    width: '90vw',
                    maxHeight: '95vh',
                    padding: '0',
                    borderRadius: '1rem',
                    backgroundColor: '#eeeeee',
                    color: '#000',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                }}
                >
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 1,
                }}></div>

                <div style={{
                    position: 'relative',
                    zIndex: 2,
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    color: 'white',
                }}>
                <AlertDialog.Title
                    style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 700,
                    fontSize: '2rem',
                    marginBottom: '1rem',
                    }}
                >
                    {project.title}
                </AlertDialog.Title>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {project.tag.split(',').map((tagItem, tagIndex) => (
                    <Badge style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        fontSize: '0.9rem',
                        padding: '0.4rem 0.8rem',
                    }} key={tagIndex} color="gray" variant="soft">
                        {tagItem.trim()}
                    </Badge>
                    ))}
                </div>

                <Text
                    style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    marginBottom: '2rem',
                    flexGrow: 1,
                    }}
                >
                    {project.description}
                </Text>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                        textDecoration: 'none',
                        }}
                    >
                        <Button
                        className="project-details-button"
                        style={{
                            background: 'linear-gradient(135deg, #92400e, #78350f)',
                            color: 'white',
                            display: 'flex',
                            gap: '0.5rem',
                            padding: '1rem 2rem',
                            fontSize: '1.1rem',
                            alignItems: 'center',
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontWeight: 600,
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            border: 'none',
                            borderRadius: '0.75rem',
                            boxShadow: '0 0 20px rgba(146, 64, 14, 0.5), 0 0 40px rgba(146, 64, 14, 0.3)',
                        }}
                        >
                        <LayersIcon />
                            Click Here For Project Details
                        </Button>
                    </a>

                    <AlertDialog.Cancel>
                    <Button
                        className="close-button"
                        style={{
                        background: 'linear-gradient(135deg, #7f1d1d, #991b1b)',
                        color: 'white',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        border: 'none',
                        borderRadius: '0.75rem',
                        padding: '1rem 2rem',
                        fontSize: '1.1rem',
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontWeight: 600,
                        boxShadow: '0 0 20px rgba(127, 29, 29, 0.5), 0 0 40px rgba(127, 29, 29, 0.3)',
                        }}
                    >
                        Close
                    </Button>
                    </AlertDialog.Cancel>
                </div>
                </div>
                </AlertDialog.Content>

                        </AlertDialog.Root>
                        ))}
      </div>

      {/* Enhanced CSS with Button Hover Effects */}
        <style>{`
        .hover-scale {
            transition: transform 0.3s ease;
        }
        .hover-scale:hover {
            transform: scale(1.03);
        }

        /* Desktop override to remove background image */
        @media (min-width: 769px) {
            .project-card-mobile {
                background-image: none !important;
                background: linear-gradient(135deg, var(--red-5), var(--red-9)) !important;
            }
        }

        /* Project Details Button Hover Effect */
        .project-details-button:hover {
            background: linear-gradient(135deg, #a16207, #92400e) !important;
            transform: translateY(-3px);
            box-shadow: 0 0 30px rgba(146, 64, 14, 0.8), 0 0 60px rgba(146, 64, 14, 0.5), 0 0 90px rgba(146, 64, 14, 0.3) !important;
        }

        .project-details-button:active {
            transform: translateY(0px);
            box-shadow: 0 0 20px rgba(146, 64, 14, 0.5), 0 0 40px rgba(146, 64, 14, 0.3) !important;
        }

        /* Close Button Hover Effect */
        .close-button:hover {
            background: linear-gradient(135deg, #991b1b, #b91c1c) !important;
            transform: translateY(-3px);
            box-shadow: 0 0 30px rgba(127, 29, 29, 0.8), 0 0 60px rgba(127, 29, 29, 0.5), 0 0 90px rgba(127, 29, 29, 0.3) !important;
        }

        .close-button:active {
            transform: translateY(0px);
            box-shadow: 0 0 20px rgba(127, 29, 29, 0.5), 0 0 40px rgba(127, 29, 29, 0.3) !important;
        }

        /* Project Popup Desktop Enhancements */
        @media (min-width: 769px) {
            .project-popup {
                max-width: 1000px !important;
                width: 80vw !important;
                max-height: 98vh !important;
            }
        }

        /* Additional subtle animations for icons */
        .project-details-button:hover svg {
            transform: translateX(2px);
            transition: transform 0.2s ease;
        }

        /* Mobile-only project adjustments */
        @media (max-width: 768px) {
            .projects-grid {
                grid-template-columns: 1fr !important;
            }
            .project-card-mobile {
                background-size: cover !important;
                background-position: center !important;
                background-repeat: no-repeat !important;
                position: relative !important;
                min-height: 300px !important;
                padding: 0 !important;
                display: block !important;
            }
            .project-card-mobile::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                border-radius: 1rem;
            }
            .project-card-mobile .project-card-image {
                display: none !important;
            }
            .project-card-mobile .project-description {
                display: none !important;
            }
            .project-card-mobile .project-top-row {
                position: static !important;
            }
            .project-card-mobile .project-overlay-content {
                position: absolute !important;
                color: white !important;
                z-index: 1;
            }
            .project-card-mobile .project-title {
                top: 20px !important;
                bottom: auto !important;
                left: 1rem !important;
                right: 1rem !important;
                font-size: 1.2rem !important;
                line-height: 1.4 !important;
                margin: 0 !important;
            }
            .project-card-mobile .project-overlay-content:nth-child(2) {
                bottom: 60px !important;
                left: 1rem !important;
                right: 1rem !important;
            }
            .project-card-mobile .project-overlay-content:nth-child(3) {
                bottom: 10px !important;
                right: 1rem !important;
                left: auto !important;
                background-color: rgba(255, 255, 255, 0.2) !important;
            }
            .project-card-mobile .project-tag-badge {
                font-size: 0.7rem !important;
                padding: 0.25rem 0.4rem !important;
                background: rgba(255, 255, 255, 0.1) !important;
                border: 1px solid rgba(255, 255, 255, 0.3) !important;
            }
        }
        `}</style>
    </div>
  );
};

export default Projects;
