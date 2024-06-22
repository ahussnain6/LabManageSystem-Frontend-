import { Diseasedetail } from "../assets/Diseasedetail";
import "./styles/Disease.css";
const Disease = () => {
  return (
    <>
      <h1 className="center head-89">Lab Test Description</h1>
      <div className="dis-1">
        <div className="lis-1">
          {" "}
          {Diseasedetail.map((curElem) => {
            return (
              <>
                <div className="part">
                  <div className="part1">
                    <h1 className="head-11">{curElem.Head}</h1>
                    <p className="para-11">{curElem.Para}</p>
                  </div>
                  <div className="part2">
                    <img src={curElem.Img} alt="" className="img-h" />
                  </div>
                </div>
                <hr className="line-1" />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Disease;
