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
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        fill={color}
        {...props}
      />
    </div>
  );
};

export default SvgIcon;
