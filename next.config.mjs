import { withPigment } from '@pigment-css/nextjs-plugin';
import { withYak } from 'next-yak/withYak';

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  }
};

export default withYak(withPigment(nextConfig));
