import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <span style={{ color: 'var(--secondary)', position: 'absolute', bottom: 0, right: 0, fontSize: 12, paddingRight: 12 }}>Made with love by Abhinav Joshi</span>
    </div>
  );
}

export default App;
