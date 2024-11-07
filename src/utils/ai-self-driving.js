/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * ...
 */
import * as tf from '@tensorflow/tfjs';

/**
 * 사용자가 예제 Tensor를 추가할 수 있는 웹캠 컨트롤용 데이터셋 클래스입니다.
 * 이 클래스는 각 라벨(위, 아래, 왼쪽, 오른쪽)에 대해 수집된 데이터를 저장합니다.
 * x: 입력 이미지의 활성화 값들
 * y: 해당하는 라벨 정보 (예: 0은 위쪽, 1은 아래쪽 등)
 */
export class ControllerDataset {
  constructor(numClasses) {
    this.numClasses = numClasses; // 예측할 클래스 수 (위, 아래, 왼쪽, 오른쪽: 총 4개)
  }

  /**
   * 컨트롤러 데이터셋에 예제를 추가합니다.
   * @param {Tensor} example - 예제 이미지 또는 활성화를 나타내는 텐서입니다.
   * @param {number} label - 예제의 레이블입니다. 예를 들어, 위쪽은 0, 아래쪽은 1 등입니다.
   */
  addExample(example, label) {
    const y = tf.tidy(() => tf.oneHot(tf.tensor1d([label]).toInt(), this.numClasses));

    if (this.xs == null) {
      this.xs = tf.keep(example);
      this.ys = tf.keep(y);
    } else {
      const oldX = this.xs;
      this.xs = tf.keep(oldX.concat(example, 0)); 

      const oldY = this.ys;
      this.ys = tf.keep(oldY.concat(y, 0)); 

      oldX.dispose();
      oldY.dispose();
      y.dispose();
    }
  }
}
