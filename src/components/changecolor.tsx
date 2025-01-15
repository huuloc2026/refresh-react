import React, { useState } from "react";

interface ColorButtonProps {
  color: string;
  onClick: () => void;
}

const ColorButton: React.FC<ColorButtonProps> = ({ color, onClick }) => {
  const buttonStyle = {
    backgroundColor: color,
    padding: "10px 20px",
    borderRadius: "5px",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {color}
    </button>
  );
};

const listColors = ["#FF0000", "#082F21", "#232011"];

const ChangeColor = () => {
  const [color, setColor] = useState<string>(listColors[0]);

  return (
    <div>
      <div style={{ background: color, width: "200px", height: "300px" }} />
      <div>
        {listColors.map((c, index) => (
          <ColorButton key={index} color={c} onClick={() => setColor(c)} />
        ))}
      </div>
    </div>
  );
};

export default ChangeColor;
