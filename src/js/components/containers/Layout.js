import React, { Component } from "react";
import FormContainer from "./FormContainer";

export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="row mt-5">
        <div class="col-md-4 offset-md-1">
            <p>Create a new article now..</p>
            <div id="create-article-form">
              <form id="article-form">
                <FormContainer />
              </form>
            </div>
        </div>
    </div>
    );
  }
}
