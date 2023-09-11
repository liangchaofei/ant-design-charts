import { Plot } from '../../base';
import type { Adaptor } from '../../types';
import { adaptor } from './adaptor';
import { TinyRingProgressOptions } from './type';

export type { TinyRingProgressOptions };

export class TinyRingProgress extends Plot<TinyRingProgressOptions> {
  /** 图表类型 */
  public type = 'TinyRingProgress';

  /**
   * 获取 环形进度图 默认配置项
   * 供外部使用
   */
  static getDefaultOptions(): Partial<TinyRingProgressOptions> {
    return {
      type: 'view',
      data: [],
      children: [
        {
          interaction: { tooltip: false },
          coordinate: { type: "theta", innerRadius: 0.7 },
          type: 'interval',
          axis: false,
          legend: false,
          encode: { y: (d) => d, color: (d, idx) => idx },
        }
      ],
    };
  }

  /**
   * 获取 环形进度图 默认配置
   */
  protected getDefaultOptions() {
    return TinyRingProgress.getDefaultOptions();
  }

  /**
   * 迷你折线图适配器
   */
  protected getSchemaAdaptor(): (params: Adaptor<TinyRingProgressOptions>) => void {
    return adaptor;
  }
}
