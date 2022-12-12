import Script from 'next/script';
import Banner from '../components/Banner';

export default function App() {
  return (
    <div>
      <Banner />
      <div>
        <div>
          <Script src="/chatwoot.js" />
        </div>
      </div>
    </div>
  );
}
