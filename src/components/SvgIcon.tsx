import React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>; // Тип компонента иконки
  size?: number;
  color?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  icon: Icon,
  size = 24,
  color = "currentColor",
  ...props
}) => {
  return <Icon width={size} height={size} fill={color} {...props} />;
};

export default SvgIcon;
