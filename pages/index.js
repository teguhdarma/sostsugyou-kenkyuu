import Script from 'next/script';
import Gridlisr from '../components/Gridlisr';

export default function App() {
  return (
    <div>
      <Gridlisr />
      <div>
        <div>
          <Script src="/chatwoot.js" />
        </div>
      </div>
    </div>
  );
}
