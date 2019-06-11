import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Slide from '@material-ui/core/Slide';

export default class DemandCapture extends React.Component{

  // constructor(props){
  //   super(props);
  //   this.state={
  //
  //   }
  // }
  render(){

    return(
      <div>
        {/* <Button onClick={this.handleClickOpen}>Slide in alert dialog</Button> */}
        <Dialog
          open={this.props.open}
          keepMounted
          onClose={this.props.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          fullScreen
          style={{margin:'40px'}}
        >

          <DialogTitle id="alert-dialog-slide-title" style={{backgroundColor:'#000',padding:'20px'}}>
            <span style={{color:'#FFF'}}>Demand Capture</span>
          </DialogTitle>
          <DialogContent style={{marginTop:'10px'}}>
            <DialogContentText id="alert-dialog-slide-description">
              <Grid container spacing={24}>
                <Grid item xs={8}>
                  <TextField
                    id="search"
                    label="Project Description"
                    type="search"
                    fullWidth
                    multiline
                    rowsMax="2"
                    // className={classes.textField}
                    // margin="normal"

                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <InputLabel>Technology Inventory</InputLabel>
                    <Select
                      // value={this.state.age}
                      // onChange={this.handleChange}
                      // inputProps={{
                      //   name: 'age',
                      //   id: 'age-simple',
                      // }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>ReactJS</MenuItem>
                      <MenuItem value={20}>NodeJS</MenuItem>
                      <MenuItem value={30}>MongoDB</MenuItem>
                      <MenuItem value={40}>ExpessJS</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                {/* <div style={{marginTop:'10px'}}> */}
                  <Grid item xs={8}>
                    <span>Project Timelines : </span>
                  </Grid><br/>

                {/* </div> */}
                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <InputLabel>Tools Inventory</InputLabel>
                    <Select
                      // value={this.state.age}
                      // onChange={this.handleChange}
                      // inputProps={{
                      //   name: 'age',
                      //   id: 'age-simple',
                      // }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Drools</MenuItem>
                      <MenuItem value={20}>RabbitMQ</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={3} style={{marginTop:'-30px'}}>
                  Start Date : <input type='date'/>
                </Grid>
                <Grid item xs={3} style={{marginTop:'-30px'}}>
                  End Date : <input type='date'/>
                </Grid>
                <Grid item xs={12}>
                  <span>Project Contacts : </span>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="search"
                    label="Name"
                    type="search"
                    fullWidth
                     style={{marginTop:'-30px'}}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="search"
                    label="Email ID"
                    type="search"
                    fullWidth
                     style={{marginTop:'-30px'}}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="search"
                    label="Phone No."
                    type="search"
                    fullWidth
                     style={{marginTop:'-30px'}}
                  />
                </Grid>
                <Grid item xs={1}>
                  <Button variant="fab" color="secondary" mini aria-label="Add">
                    <AddIcon />
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <span>Team Composition : </span>
                </Grid>
                <div style={{width:'100%',marginLeft:'20px'}}>
                  <Grid container spacing={24}>
                    <Grid item xs={1}>
                      <span>Role</span>
                    </Grid>
                    <Grid item xs={2}>
                      <span>location</span>
                    </Grid>
                    <Grid item xs={1}>
                      <span>Core/Flex</span>
                    </Grid>
                    <Grid item xs={2}>
                      <span>Distinct Skill</span>
                    </Grid>
                    <Grid item xs={1}>
                      <span>Start Date</span>
                    </Grid>
                    <Grid item xs={1}>
                      <span style={{marginLeft:'15px'}}>End Date</span>
                    </Grid>
                    <Grid item xs={1}>
                      {/* <span>Start Date</span> */}
                    </Grid>
                    <Grid item xs={1}>
                      <span>Priority</span>
                    </Grid>
                    <Grid item xs={2}>
                      <span>Job Description</span>
                    </Grid>
                  </Grid>
                </div>
                <div style={{width:'100%',marginLeft:'20px'}}>
                  <Grid container spacing={24}>
                    <Grid item xs={1}>
                      <FormControl fullWidth>
                        <Select
                          // value={this.state.age}
                          // onChange={this.handleChange}
                          // inputProps={{
                          //   name: 'age',
                          //   id: 'age-simple',
                          // }}
                        >
                          <MenuItem value="">
                            <em>PM</em>
                          </MenuItem>
                          {/* <MenuItem value={10}>ReactJS</MenuItem>
                          <MenuItem value={20}>NodeJS</MenuItem>
                          <MenuItem value={30}>MongoDB</MenuItem>
                          <MenuItem value={40}>ExpessJS</MenuItem> */}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                      <FormControl fullWidth>
                        <Select
                          // value={this.state.age}
                          // onChange={this.handleChange}
                          // inputProps={{
                          //   name: 'age',
                          //   id: 'age-simple',
                          // }}
                        >
                          <MenuItem value="">
                            <em>PM</em>
                          </MenuItem>
                          {/* <MenuItem value={10}>ReactJS</MenuItem>
                          <MenuItem value={20}>NodeJS</MenuItem>
                          <MenuItem value={30}>MongoDB</MenuItem>
                          <MenuItem value={40}>ExpessJS</MenuItem> */}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={1}>
                      <FormControl fullWidth>
                        <Select
                          // value={this.state.age}
                          // onChange={this.handleChange}
                          // inputProps={{
                          //   name: 'age',
                          //   id: 'age-simple',
                          // }}
                        >
                          <MenuItem value="">
                            <em>PM</em>
                          </MenuItem>
                          {/* <MenuItem value={10}>ReactJS</MenuItem>
                          <MenuItem value={20}>NodeJS</MenuItem>
                          <MenuItem value={30}>MongoDB</MenuItem>
                          <MenuItem value={40}>ExpessJS</MenuItem> */}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        id="search"
                        label=""
                        type="search"
                        fullWidth
                         style={{marginTop:'0px'}}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <input type='date' style={{marginTop:'10px'}}/>
                    </Grid>
                    <Grid item xs={1}>
                      <input type='date' style={{marginTop:'10px',marginLeft:'15px'}}/>
                    </Grid>
                    <Grid item xs={1}>
                      {/* <input type='date' style={{marginTop:'10px'}}/> */}
                    </Grid>
                    <Grid item xs={1}>
                      <FormControl fullWidth>
                        <Select
                          // value={this.state.age}
                          // onChange={this.handleChange}
                          // inputProps={{
                          //   name: 'age',
                          //   id: 'age-simple',
                          // }}
                        >
                          <MenuItem value="">
                            <em>PM</em>
                          </MenuItem>
                          {/* <MenuItem value={10}>ReactJS</MenuItem>
                          <MenuItem value={20}>NodeJS</MenuItem>
                          <MenuItem value={30}>MongoDB</MenuItem>
                          <MenuItem value={40}>ExpessJS</MenuItem> */}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                      <Button variant="contained" color="secondary" style={{margin:'3px 10px'}}>
                        Customize
                      </Button>
                    </Grid>
                  </Grid>
                </div>
                <div style={{width:'100%',marginLeft:'20px'}}>
                  <Grid container spacing={24}>
                    <Grid item xs={1}>
                      <FormControl fullWidth>
                        <Select
                          // value={this.state.age}
                          // onChange={this.handleChange}
                          // inputProps={{
                          //   name: 'age',
                          //   id: 'age-simple',
                          // }}
                        >
                          <MenuItem value="">
                            <em>PM</em>
                          </MenuItem>
                          {/* <MenuItem value={10}>ReactJS</MenuItem>
                          <MenuItem value={20}>NodeJS</MenuItem>
                          <MenuItem value={30}>MongoDB</MenuItem>
                          <MenuItem value={40}>ExpessJS</MenuItem> */}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                      <FormControl fullWidth>
                        <Select
                          // value={this.state.age}
                          // onChange={this.handleChange}
                          // inputProps={{
                          //   name: 'age',
                          //   id: 'age-simple',
                          // }}
                        >
                          <MenuItem value="">
                            <em>PM</em>
                          </MenuItem>
                          {/* <MenuItem value={10}>ReactJS</MenuItem>
                          <MenuItem value={20}>NodeJS</MenuItem>
                          <MenuItem value={30}>MongoDB</MenuItem>
                          <MenuItem value={40}>ExpessJS</MenuItem> */}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={1}>
                      <FormControl fullWidth>
                        <Select
                          // value={this.state.age}
                          // onChange={this.handleChange}
                          // inputProps={{
                          //   name: 'age',
                          //   id: 'age-simple',
                          // }}
                        >
                          <MenuItem value="">
                            <em>PM</em>
                          </MenuItem>
                          {/* <MenuItem value={10}>ReactJS</MenuItem>
                          <MenuItem value={20}>NodeJS</MenuItem>
                          <MenuItem value={30}>MongoDB</MenuItem>
                          <MenuItem value={40}>ExpessJS</MenuItem> */}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        id="search"
                        label=""
                        type="search"
                        fullWidth
                         style={{marginTop:'0px'}}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <input type='date' style={{marginTop:'10px'}}/>
                    </Grid>
                    <Grid item xs={1}>
                      <input type='date' style={{marginTop:'10px',marginLeft:'15px'}}/>
                    </Grid>
                    <Grid item xs={1}>
                      {/* <input type='date' style={{marginTop:'10px'}}/> */}
                    </Grid>
                    <Grid item xs={1}>
                      <FormControl fullWidth>
                        <Select
                          // value={this.state.age}
                          // onChange={this.handleChange}
                          // inputProps={{
                          //   name: 'age',
                          //   id: 'age-simple',
                          // }}
                        >
                          <MenuItem value="">
                            <em>PM</em>
                          </MenuItem>
                          {/* <MenuItem value={10}>ReactJS</MenuItem>
                          <MenuItem value={20}>NodeJS</MenuItem>
                          <MenuItem value={30}>MongoDB</MenuItem>
                          <MenuItem value={40}>ExpessJS</MenuItem> */}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                      <Button variant="contained" color="secondary" style={{margin:'3px 10px'}}>
                        Customize
                      </Button>
                    </Grid>
                  </Grid>
                </div>
                <div style={{width:'100%',marginLeft:'20px'}}>
                  <Grid container spacing={24}>
                    <Grid item xs={1}>
                      <FormControl fullWidth>
                        <Select
                          // value={this.state.age}
                          // onChange={this.handleChange}
                          // inputProps={{
                          //   name: 'age',
                          //   id: 'age-simple',
                          // }}
                        >
                          <MenuItem value="">
                            <em>PM</em>
                          </MenuItem>
                          {/* <MenuItem value={10}>ReactJS</MenuItem>
                          <MenuItem value={20}>NodeJS</MenuItem>
                          <MenuItem value={30}>MongoDB</MenuItem>
                          <MenuItem value={40}>ExpessJS</MenuItem> */}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                      <FormControl fullWidth>
                        <Select
                          // value={this.state.age}
                          // onChange={this.handleChange}
                          // inputProps={{
                          //   name: 'age',
                          //   id: 'age-simple',
                          // }}
                        >
                          <MenuItem value="">
                            <em>PM</em>
                          </MenuItem>
                          {/* <MenuItem value={10}>ReactJS</MenuItem>
                          <MenuItem value={20}>NodeJS</MenuItem>
                          <MenuItem value={30}>MongoDB</MenuItem>
                          <MenuItem value={40}>ExpessJS</MenuItem> */}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={1}>
                      <FormControl fullWidth>
                        <Select
                          // value={this.state.age}
                          // onChange={this.handleChange}
                          // inputProps={{
                          //   name: 'age',
                          //   id: 'age-simple',
                          // }}
                        >
                          <MenuItem value="">
                            <em>PM</em>
                          </MenuItem>
                          {/* <MenuItem value={10}>ReactJS</MenuItem>
                          <MenuItem value={20}>NodeJS</MenuItem>
                          <MenuItem value={30}>MongoDB</MenuItem>
                          <MenuItem value={40}>ExpessJS</MenuItem> */}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        id="search"
                        label=""
                        type="search"
                        fullWidth
                         style={{marginTop:'0px'}}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <input type='date' style={{marginTop:'10px'}}/>
                    </Grid>
                    <Grid item xs={1}>
                      <input type='date' style={{marginTop:'10px',marginLeft:'15px'}}/>
                    </Grid>
                    <Grid item xs={1}>
                      {/* <input type='date' style={{marginTop:'10px'}}/> */}
                    </Grid>
                    <Grid item xs={1}>
                      <FormControl fullWidth>
                        <Select
                          // value={this.state.age}
                          // onChange={this.handleChange}
                          // inputProps={{
                          //   name: 'age',
                          //   id: 'age-simple',
                          // }}
                        >
                          <MenuItem value="">
                            <em>PM</em>
                          </MenuItem>
                          {/* <MenuItem value={10}>ReactJS</MenuItem>
                          <MenuItem value={20}>NodeJS</MenuItem>
                          <MenuItem value={30}>MongoDB</MenuItem>
                          <MenuItem value={40}>ExpessJS</MenuItem> */}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                      <Button variant="contained" color="secondary" style={{margin:'3px 10px'}}>
                        Customize
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
