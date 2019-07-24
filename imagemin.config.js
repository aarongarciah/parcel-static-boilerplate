// See https://github.com/DeMoorJasper/parcel-plugin-imagemin and each of the individual plugins for available options

module.exports = {
  gifsicle: { optimizationLevel: 2 },
  mozjpeg: { progressive: true, quality: 85 },
  pngquant: { quality: [0.8, 0.9] },
  svgo: {
    plugins: [{ removeViewBox: false }],
  },
  webp: { quality: 90 },
};
