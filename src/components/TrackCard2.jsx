import "../styles/TrackCard2.css";
import { useState } from "react";
function TrackCard2() {
  const [click, setClick] = useState(false);
  return (
    <div className="expand-tracks">
      <div className="expand track-heading">
        Artificial Intelligence and Machine Learning
      </div>
      <i
        class={click ? "fa fa-angle-up" : "fa fa-angle-down"}
        onClick={() => setClick(!click)}
      ></i>
      <ul className={click ? "track-list two expand" : "track-list two"}>
        <li> Soft Computing</li>
        <li>Deep Learning</li>
        <li> Image Processing</li>
        <li> Machine Intelligence</li>
        <li>Natural Language Processing Image Processing</li>
        <li> Fuzzy Logic and Systems</li>
        <li> Neural Network</li>
      </ul>
    </div>
  );
}
export default TrackCard2;
