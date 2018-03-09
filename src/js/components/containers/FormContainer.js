import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Input from "../presentational/Input";
import { setCurrentSoln } from "../../actions/actions_solution";

class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      seo_title: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ seo_title: event.target.value });
  }

  render() {
    const { seo_title } = this.state;
    return (
      <div>
        <form id="article-form">
          <Input
            text="SEO title"
            label="seo_title"
            type="text"
            id="seo_title"
            value={seo_title}
            handleChange={this.handleChange}
          />
        </form>
        <br/>
        {seo_title && <h2>You have entered {seo_title}</h2>}
        <hr/>
        <h3>Select a solution:</h3>
        <ul>
          {this.props.solns.map((x)=>
            <li key={x.id}>
                <button onClick={()=>this.props.setCurrentSoln(x)}>{x.name}</button>
            </li>
          )}
          <li><b>CURRENT SELECTED SOLN: {this.props.currentSoln && this.props.currentSoln.name}</b></li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    solns: state.solutions,
    currentSoln: state.currentSoln
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({setCurrentSoln: setCurrentSoln}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FormContainer);
