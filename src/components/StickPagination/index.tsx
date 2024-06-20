import { Select, SelectProps } from 'antd';

type CompoundedComponent = React.FC<SelectProps> & {
  Option: typeof Select.Option;
};
// 原生的 pagination 组件 的 select 不能自动变更位置 在这替换为 始终在右上角
const SelectTopRight: CompoundedComponent = (props) => {
  // console.log('props',props)
  return <Select {...props} placement="topRight" size='small' />;
}
SelectTopRight.Option = Select.Option;

export { SelectTopRight };
