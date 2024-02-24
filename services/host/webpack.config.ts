
import path from 'path';
import webpack from 'webpack';
import { BuildMode, BuildPaths, BuildPlatform, buildWebpack } from '@packages/build-config'
import packageJson from './package.json';


interface EnvVariables {
    mode: BuildMode;
    port: number;
    platform: BuildPlatform;
    SHOP_REMOTE_URL?: string;
    ADMIN_REMOTE_URL?: string;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        puplic: path.resolve(__dirname, 'public'),
    }
    const isDev = env.mode === 'development';
    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        platform: env.platform ?? 'desktop',

        paths
    });
    const SHOP_REMOTE_URL = env.SHOP_REMOTE_URL ?? 'http://localhost:3001'
    const ADMIN_REMOTE_URL = env.ADMIN_REMOTE_URL ?? 'http://localhost:3002'
    config?.plugins?.push(new webpack.container.ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',
        remotes: {
            shop: `shop@${SHOP_REMOTE_URL}/remoteEntry.js`,
            admin: `admin@${ADMIN_REMOTE_URL}/remoteEntry.js`,
        },
        shared: {
            ...packageJson.dependencies,
            react: {
                eager: true
            },
            'react-router-dom': {
                eager: true
            },
            'react-dom': {
                eager: true
            },
        }
    }));
    return config;
}