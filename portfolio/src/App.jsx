import { Theme, Box } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Intro from './components/intro';

function App() {
  return (
    <Theme accentColor="red" appearance="dark" radius="large">
      <div className="h-screen w-screen flex flex-col overflow-hidden">
        <main className="flex-grow overflow-hidden p-4">
          <div className="h-full">
            {/* Mobile layout - single column with scroll */}
            <div className="md:hidden h-full overflow-y-auto">
              <div className="grid gap-2 grid-cols-1">
                <Box className="min-h-[200px] bg-red-500 rounded-lg" />
                <Box className="min-h-[300px] bg-green-500 rounded-lg" />
                <Box className="min-h-[150px] bg-blue-500 rounded-lg" />
                <Box className="min-h-[250px] bg-yellow-500 rounded-lg" />
                <Box className="min-h-[200px] bg-purple-500 rounded-lg" />
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
              />
              <Box
                className="rounded-lg"
                style={{
                  gridRow: 'span 5',
                  backgroundColor: '#eeeeee',
                  backdropFilter: 'blur(8px)',
                }}
              />

              {/* Right column items */}
              <Box
                className="rounded-lg"
                style={{
                  gridRow: 'span 7',
                  backgroundColor: '#eeeeee',
                  backdropFilter: 'blur(8px)',
                }}
              />
              <Box
                className="rounded-lg"
                style={{
                  gridRow: 'span 3',
                  backgroundColor: '#eeeeee',
                  backdropFilter: 'blur(8px)',
                }}
              />
            </div>
          </div>
        </main>
      </div>
    </Theme>
  );
}

export default App;
