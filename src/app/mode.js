const sources = {
  shalat: './src/data/dzikir-setelah-shalat.json',
  pagi: './src/data/dzikir-pagi.json',
  petang: './src/data/dzikir-petang.json'
};

const subtitles = {
  shalat: '🕌 Dzikir Setelah Shalat',
  pagi: '🌅 Dzikir Pagi',
  petang: '🌙 Dzikir Petang'
};

export async function loadMode(mode) {
  const res = await fetch(sources[mode]);
  const data = await res.json();

  document.querySelector('.subtitle').textContent =
    subtitles[mode];

  return data;
}