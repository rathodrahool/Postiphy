import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';
import { Toaster } from 'react-hot-toast';

config.autoAddCss = false;

export const metadata = {
  title: 'Postiphy - Hook Generator',
  description: 'Simple yet powerful hook generator that generates the best hooks so far',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}