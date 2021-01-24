module.exports = [
  {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  },
  {
    test: /\.(js|ts)x?$/,
    loader: require.resolve("babel-loader"),
    exclude: /node_modules/,
  },
];
