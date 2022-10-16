import jimp from 'jimp';

export default async function resizeImg(
  imgName: string,
  width: number,
  height: number
): Promise<void> {
  const img = await jimp.read(`./src/images/${imgName}.jpg`);
  img.resize(width, height);
  await img.writeAsync(`images_out/${imgName}_${width}_${height}.png`);
}
