declare interface BaseBehavior<T extends WxComponent = WxComponent> extends ComponentLifetimes {
  /** 组件的对外属性，是属性名到属性设置的映射表 */
  properties?: {
    [propertyName: string]: PropertyOption;
  };
  /** 组件的内部数据，和 `properties` 一同用于组件的模板渲染 */
  data?: IAnyObject;
  /** object组件的方法，包括事件响应函数和任意的自定义方法，关于事件响应函数的使用，参见 [组件事件](events.md) */
  methods?: {
    [methodName: string]: (this: T, ...args: any[]) => any;
  };
  /** 类似于mixins和traits的组件间代码复用机制，参见 [behaviors](behaviors.md) */
  behaviors?: string[];
}

declare function Behavior<T extends WxComponent = WxComponent>(options: BaseBehavior<T>): string;