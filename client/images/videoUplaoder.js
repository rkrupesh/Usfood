import React, { Component } from 'react';


//importing semantic-ui elements
import { Grid, TextArea, Form, Input, Button  } from 'semantic-ui-react';

export default class VideoUploader extends Component {

  constructor(props){
    super(props);

    this.state = {
      fileName:''
    }
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleFileChange(e){
    this.setState({fileName:e.target.files[0].name});
  }

  render(){
    return(
      <div>
        <br/>
        <h1 className="uploadImageTitle">Upload Video</h1>
        <br/>

      <br/>
        <Grid>

          <Grid.Row>
            <Grid.Column width={6}>
              <center>
              <label for="file-upload" class="custom-file-upload">
                  <i class="fa fa-cloud-upload"></i> Choose a File
              </label>
              <Input id="file-upload" type="file" onChange={this.handleFileChange}/>
            </center>
            </Grid.Column>
            <Grid.Column width={10}>
              <div className="imageName">
                {this.state.fileName}
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={6}>
              <center><h2 className="subHeaders">Description</h2></center>
            </Grid.Column>
            <Grid.Column width={10}>
              <Form>
                <TextArea autoHeight placeholder='Description' />
              </Form>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={6}>
              <center><h2 className="subHeaders">Keywords</h2></center>
            </Grid.Column>
            <Grid.Column width={10}>
              <Form>
                <TextArea autoHeight placeholder='Keywords' />
              </Form>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={6}>
              <center><h2 className="subHeaders">Links</h2></center>
            </Grid.Column>
            <Grid.Column width={10}>
              <Form>
                <TextArea autoHeight placeholder='Links' />
              </Form>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
              <center><Button primary style={{backgroundColor:"#3b5998"}}>Submit</Button></center>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
