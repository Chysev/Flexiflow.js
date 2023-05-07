module.exports = (api) => {
  api.cache(true);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ];

  const plugins = [
    "react-require",
    [
      "inline-import-data-uri",
      {
        extensions: [".png", ".jpg", ".css"],
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
