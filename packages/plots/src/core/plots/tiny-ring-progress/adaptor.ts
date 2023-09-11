import { flow, transformOptions } from '../../utils';
import { mark } from '../../components';
import type { Adaptor } from '../../types';
import type { TinyRingProgressOptions } from './type';

type Params = Adaptor<TinyRingProgressOptions>;

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  /**
   * 图表差异化处理
   */
  const init = (params: Params) => {
    return params;
  };

  /**
   * @description 数据转换
   */
  const transformData = (params: Params) => {
    const { options } = params;
    const { percent, color = [] } = options;
    if (!percent) return params;

    const transformOption = {
      scale: {
        color: { range: color.length ? color : [] },
      },
      data: [1, percent]
    }

    Object.assign(options, { ...transformOption });
    return params
  }

  return flow(init, transformData, transformOptions, mark)(params);
}
