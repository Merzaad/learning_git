import * as tf from "@tensorflow/tfjs";

export default async function predict(number) {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

  model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

  const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
  const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

  await model.fit(xs, ys, { epochs: 100 });
  const output = model.predict(tf.tensor2d([number], [1, 1]));
  return output.dataSync()[0];
}
