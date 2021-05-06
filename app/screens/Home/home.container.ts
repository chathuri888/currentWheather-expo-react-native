import { connect } from "react-redux";

import HomeComponent from "./home.component";

const mapStateToProps = ({
  commonReducerS: { wheatherList, selectedFVID },
}) => ({
  locationList: wheatherList || [],
  fvIDList: selectedFVID || [],
});

export default connect(mapStateToProps)(HomeComponent);
