import React, { Component, useState, CSSProperties, ReactHTML, ReactNode } from "react";
import "./Tooltip.css";
import cl from "classnames";
type PropsType = {
  children: ReactNode
  content: string,
  position: "top"| "right"| "bottom"| "left"
  style?: CSSProperties
}
const Tooltip:React.FC<PropsType> =(props)=>{
  const [visible, setVisible] = useState(false)
  const show = ():void => {
    setVisible(true);
  };
  const hide = ():void => {
    setVisible(false);
  };
  
  
  const { children, content, style, position } = props;
  const classes = cl("tooltip", position);
  return (
    <span className="tooltipWrapper">
      {visible && (
        <span style={style} className={classes}>
          {content}
        </span>
      )}
      <span
        className="targetElement"
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        {children}
      </span>
    </span>
  );
}
// class Tooltip extends Component {
//   // static propTypes = {
//   //   children: PropTypes.node.isRequired,
//   //   content: PropTypes.string,
//   //   position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
//   //   style: PropTypes.objectOf(PropTypes.string),
//   // };
//   // static defaultProps = {
//   //   content: "Tooltip content",
//   //   style: {},
//   //   position: "top",
//   // };
//   state = {
//     visible: false,
//   };
//   show = () => {
//     this.setVisibility(true);
//   };
//   hide = () => {
//     this.setVisibility(false);
//   };
//   setVisibility = (visible) => {
//     this.setState({
//       visible,
//     });
//   };
//   render() {
//     const { visible } = this.state;
//     const { children, content, style, position } = this.props;
//     const classes = cl("tooltip", position);
//     return (
//       <span className="tooltipWrapper">
//         {visible && (
//           <span style={style} className={classes}>
//             {content}
//           </span>
//         )}
//         <span
//           className="targetElement"
//           onMouseEnter={this.show}
//           onMouseLeave={this.hide}
//         >
//           {children}
//         </span>
//       </span>
//     );
//   }
// }
export default Tooltip;
