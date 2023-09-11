import React from 'react';
import { TinyRingProgressOptions } from '../../../core';
import { CommonConfig } from '../../../interface';
import { BaseChart } from '../../base';

export type TinyRingProgressConfig = CommonConfig<TinyRingProgressOptions>;

const TinyRingProgressChart = (props: TinyRingProgressOptions) => <BaseChart {...props} chartType="TinyRingProgress" />;

export default TinyRingProgressChart;
