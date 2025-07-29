import { Theme, Card, Grid, Badge, Text, Button, Tooltip, Avatar } from '@radix-ui/themes';
import { SunIcon, GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon, RocketIcon } from "@radix-ui/react-icons"
import '@radix-ui/themes/styles.css';
import brianImage from '../assets/brian.png';

const Intro = () => {
  return (
    <div
      className="grid gap-2 w-full h-full"
      style={{
        gridTemplateColumns: '1.3fr 1.3fr 1fr 1fr 1fr 1fr',
        gridTemplateRows: '2fr 1fr',
        overflow: 'hidden',
      }}
    >
      {/* Box 1: spans 2 cols × 2 rows */}
            <div
            className="rounded-lg"
            style={{
                gridColumn: 'span 2',
                gridRow: 'span 2',
                background: 'linear-gradient(135deg, var(--red-5) 0%, var(--red-9) 100%)',
                boxShadow: '8px 8px 32px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
            <img 
            src={brianImage} 
            alt="Brian"
            style={{
                width: '10vw',
                height: 'auto',
                maxWidth: '90%',
                objectFit: 'contain',
                zIndex: 2
            }}
            />
            </div>

      {/* Box 2: spans 4 cols × 1 row */}
        <div
        className="lg flex flex-col justify-between p-6"
        style={{
          gridColumn: '3 / span 4',
          gridRow: '1',
          position: 'relative',
        }}
        >
            <div 
                style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%', 
                height: '1px',
                backgroundColor: 'rgba(204, 204, 204, 1)',
                }}
            />
                {/* Top: Tag */}
                <Badge 
                    color="amber" 
                    size="2"
                    style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    backgroundColor: 'var(--amber-9)',
                    color: 'var(--amber-1)',
                    alignSelf: 'flex-start'
                    }}
                >
                    <RocketIcon />
                    <Text 
                    style={{ 
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: 'clamp(0.65rem, 0.9vw, 1rem)',
                        fontWeight: 500,
                        color: 'var(--amber-1)'
                    }}
                    as="span"
                    wrap="pretty"
                    >
                    Breaking Into Motorsport
                    </Text>
                </Badge>

                {/* Bottom: Text */}
                <Text
                style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: 'clamp(1rem, 2.3vw, 3rem)',
                    fontWeight: 600,
                    background: 'var(--red-8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginTop: '0.4rem',
                }}
                as="div"
                >
                Brian Manomaisupat
                </Text>
                <Text
                    style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: 'clamp(0.8rem, 0.9vw, 1.25rem)',
                        fontWeight: 300,
                        color: 'var(--gray-8)',
                        marginTop: '-0.06rem',
                        marginBottom: '-0.4rem',
                    }}
                    as="div"
                    >
                    Aerodynamics Design Intern @ Oilstainlabs
                </Text>
        </div>


      {/* Box 3 */}
        <div
        className="rounded-lg"
        style={{
            gridColumn: '3',
            gridRow: '2',
            backgroundColor: 'transparent',
        }}
        > 
        <Tooltip content="LinkedIn">
            <Button
            asChild
            variant="ghost"
            size="4"
            style={{
                width: '2.6vw',
                height: '2.6vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                transition: 'all 0.2s ease'
            }}
            >
            <a 
                href="https://www.linkedin.com/in/brian-mano/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                textDecoration: 'none'
                }}
            >
                <LinkedInLogoIcon 
                style={{ 
                    width: '2.6vw',
                    height: '2.6vw',
                    color: 'var(--red-10)',
                    transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                }}
                />
            </a>
            </Button>
        </Tooltip>
        </div>

      {/* Box 4 */}
        <div
        className="rounded-lg"
        style={{
            gridColumn: '4',
            gridRow: '2',
            backgroundColor: 'transparent',
        }}
        > 
        <Tooltip 
            content="Github"
        >
            <Button
            asChild
            variant="ghost"
            size="4"
            style={{
                width: '2.6vw',
                height: '2.6vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                transition: 'all 0.2s ease'
            }}
            >
            <a 
                href="https://github.com/brianmano" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                textDecoration: 'none'
                }}
            >
                <GitHubLogoIcon 
                style={{ 
                    width: '2.6vw',
                    height: '2.6vw',
                    color: 'var(--red-10)',
                    transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                }}
                />
            </a>
            </Button>
        </Tooltip>
        </div>

      {/* Box 6 */}
        <div
        className="rounded-lg"
        style={{
            gridColumn: '5',
            gridRow: '2',
            backgroundColor: 'transparent',
        }}
        > 
        <Tooltip content="Email">
            <Button
            asChild
            variant="ghost"
            size="4"
            style={{
                width: '2.6vw',
                height: '2.6vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                transition: 'all 0.2s ease'
            }}
            >
            <a 
                href="mailto:brian.manomaisupat@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                textDecoration: 'none'
                }}
            >
                <EnvelopeClosedIcon 
                style={{ 
                    width: '2.6vw',
                    height: '2.6vw',
                    color: 'var(--red-10)',
                    transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                }}
                />
            </a>
            </Button>
        </Tooltip>
        </div>
    </div>
  );
};

export default Intro;
