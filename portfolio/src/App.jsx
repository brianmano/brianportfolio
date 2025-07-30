import { Theme, Box } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Intro from './components/intro';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import TechStack from './components/techstack';

function App() {
  return (
    <Theme accentColor="red" appearance="dark" radius="large">
      <div className="h-screen w-screen flex flex-col overflow-hidden">
        <main className="flex-grow overflow-hidden p-4">
          <div className="h-full">
            {/* Mobile layout - single column with scroll */}
          {/* Mobile layout - single column with scroll */}
          <div className="md:hidden h-full overflow-y-auto">
            <div className="grid gap-4 grid-cols-1 p-2">
              <Box
                className="rounded-lg"
                style={{
                  minHeight: '200px',
                  backgroundColor: '#eeeeee',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Intro />
              </Box>
              <Box
                className="rounded-lg"
                style={{
                  minHeight: '100px',
                  backgroundColor: '#eeeeee',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Education />
              </Box>
              <Box
                className="rounded-lg"
                style={{
                  minHeight: '150px',
                  backgroundColor: '#eeeeee',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Experience />
              </Box>
              <Box
                className="rounded-lg"
                style={{
                  minHeight: '150px',
                  maxHeight: '600px',
                  backgroundColor: '#eeeeee',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Projects />
              </Box>
              <Box
                className="rounded-lg"
                style={{
                  minHeight: '200px',
                  backgroundColor: '#eeeeee',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <TechStack />
              </Box>
            </div>
          </div>


            {/* Desktop layout - two columns */}
            <div
              className="hidden md:grid h-full gap-4"
              style={{
                gridTemplateColumns: '1fr 1.2fr',
                gridTemplateRows: 'repeat(10, 1fr)',
                gridAutoFlow: 'column',
              }}
            >
              {/* Left column items */}
              <Box
                className="rounded-lg"
                style={{
                  gridRow: 'span 3',
                  backgroundColor: '#eeeeee',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Intro />
              </Box>
              <Box
                className="rounded-lg"
                style={{
                  gridRow: 'span 2',
                  backgroundColor: '#eeeeee',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Education/>
              </Box>
              <Box
                className="rounded-lg"
                style={{
                  gridRow: 'span 5',
                  backgroundColor: '#eeeeee',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Experience/>
                </Box>

              {/* Right column items */}
              <Box
                className="rounded-lg"
                style={{
                  gridRow: 'span 7',
                  backgroundColor: '#eeeeee',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Projects/>
                </Box>
              <Box
                className="rounded-lg"
                style={{
                  gridRow: 'span 3',
                  backgroundColor: '#eeeeee',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <TechStack/>
              </Box>
            </div>
          </div>
        </main>
      </div>
    </Theme>
  );
}

export default App;
