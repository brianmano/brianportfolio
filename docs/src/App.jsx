import { Theme, Box } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { motion } from 'framer-motion';
import Intro from './components/intro';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import TechStack from './components/techstack';

const MotionBox = motion(Box);

function App() {
  return (
    <Theme accentColor="red" appearance="dark" radius="large">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="h-screen w-screen flex flex-col overflow-hidden"
      >
        <main className="flex-grow overflow-hidden p-4">
          <div className="h-full">
            {/* Mobile layout - single column with scroll */}
            <div className="md:hidden h-full overflow-y-auto">
              <div className="grid gap-4 grid-cols-1 p-2">
                <MotionBox
                  className="rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  style={{
                    minHeight: '200px',
                    backgroundColor: '#eeeeee',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Intro />
                </MotionBox>

                <MotionBox
                  className="rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  style={{
                    minHeight: '100px',
                    backgroundColor: '#eeeeee',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Education />
                </MotionBox>

                <MotionBox
                  className="rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  style={{
                    minHeight: '150px',
                    backgroundColor: '#eeeeee',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Experience />
                </MotionBox>

                <MotionBox
                  className="rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  style={{
                    minHeight: '150px',
                    maxHeight: '600px',
                    backgroundColor: '#eeeeee',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Projects />
                </MotionBox>

                <MotionBox
                  className="rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  style={{
                    minHeight: '300px',
                    backgroundColor: '#eeeeee',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <TechStack />
                </MotionBox>
              </div>
            </div>

            {/* Desktop layout - two columns */}
            <div
              className="hidden md:grid h-full gap-4"
              style={{
                gridTemplateColumns: '1fr 1.2fr',
                gridTemplateRows: 'repeat(16, 1fr)',
                gridAutoFlow: 'column',
              }}
            >
              <MotionBox
                className="rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                style={{
                  gridRow: 'span 5',
                  backgroundColor: '#eeeeee',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Intro />
              </MotionBox>

              <MotionBox
                className="rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{
                  gridRow: 'span 3',
                  backgroundColor: '#eeeeee',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Education />
              </MotionBox>

              <MotionBox
                className="rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{
                  gridRow: 'span 8',
                  backgroundColor: '#eeeeee',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Experience />
              </MotionBox>

              <MotionBox
                className="rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                style={{
                  gridRow: 'span 10',
                  backgroundColor: '#eeeeee',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Projects />
              </MotionBox>

              <MotionBox
                className="rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{
                  gridRow: 'span 6',
                  backgroundColor: '#eeeeee',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <TechStack />
              </MotionBox>
            </div>
          </div>
        </main>
      </motion.div>
    </Theme>
  );
}

export default App;
