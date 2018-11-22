// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'ProMy',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],

  ],
  history: 'hash',
  theme: {
    'primary-color': '#1DA57A',
  },
};
