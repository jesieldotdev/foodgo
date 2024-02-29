// next.config.mjs
import withPlugins from 'next-compose-plugins';
import withSvgr from '@svgr/webpack';

const nextConfig = {
 reactStrictMode: true,
 compiler: {
    styledComponents: true,
 },
 images: {
    domains: ["avatars.githubusercontent.com", "i.pinimg.com"],
 },
};

export default withPlugins([
 [withSvgr, {
    svgoConfig: {
      plugins: [
        { removeViewBox: false },
      ],
    },
 }],
 nextConfig,
]);
