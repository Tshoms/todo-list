import React from "react";
import reducer from "./store/reducer" // importetr le reducer.
import { connect } from "react-redux"; // pour connecter notre store avec notre app.

function Main() {
  return (
    <div className="row">
      <div className="section_taches">
        
      </div>
    </div>
  );
}

const mapStateToProps =  () => {

  return {
    
  };
};

export default connect(mapStateToProps)(Main);

