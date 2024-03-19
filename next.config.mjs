import { withPigment } from '@pigment-css/nextjs-plugin';


/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  }
};

export default withPigment(nextConfig);
