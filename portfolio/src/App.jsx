import { Theme, Card } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

function App() {
  return (
    <Theme accentColor="red" appearance="dark" radius="large">
      <div className="h-screen w-screen flex flex-col overflow-hidden">
        <main className="flex-grow overflow-hidden p-4">
          <div className="h-full">
            {/* Mobile layout - single column with scroll */}
            <div className="md:hidden h-full overflow-y-auto">
              <div className="grid gap-2 grid-cols-1">
                <Card className="bg-red-500 min-h-[200px]" />
                <Card className="bg-green-500 min-h-[300px]" />
                <Card className="bg-blue-500 min-h-[150px]" />
                <Card className="bg-yellow-500 min-h-[250px]" />
                <Card className="bg-purple-500 min-h-[200px]" />
              </div>
            </div>
            
            {/* Desktop layout - two columns */}
            <div 
              className="hidden md:grid h-full gap-4"
              style={{
                gridTemplateColumns: '1fr 1.2fr',
                gridTemplateRows: 'repeat(10, 1fr)',
                gridAutoFlow: 'column'
              }}
            >
              {/* Left column items */}
              <Card style={{ 
                gridRow: 'span 3', 
                backgroundColor: 'var(--gray-1)', 
                opacity: 0.6,
                backdropFilter: 'blur(8px)' }} />
              <Card style={{ 
                gridRow: 'span 2', 
                backgroundColor: 'var(--gray-1)', 
                opacity: 0.6,
                backdropFilter: 'blur(8px)' }} />
              <Card style={{ 
                gridRow: 'span 5', 
                backgroundColor: 'var(--gray-1)', 
                opacity: 0.6,
                backdropFilter: 'blur(8px)' }} />
              
              {/* Right column items */}
              <Card style={{ 
                gridRow: 'span 7', 
                backgroundColor: 'var(--gray-1)', 
                opacity: 0.6,
                backdropFilter: 'blur(8px)' }} />
              <Card style={{ 
                gridRow: 'span 3', 
                backgroundColor: 'var(--gray-1)', 
                opacity: 0.6,
                backdropFilter: 'blur(8px)' }} />
            </div>
          </div>
        </main>
      </div>
    </Theme>
  );
}


export default App;