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
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import Forward from '@material-ui/icons/Forward';
export default class DemandCapture extends React.Component{

  constructor(props){
    super(props);
    this.state={
      core_flex : '',
      priority: ''
    }
  }
  // componentWillMount(){
  //   this.setState({
  //     data : this.props.data[this.props.index],
  //     index : this.props.index
  //   })
  // }
  // handleChange(){
  //   this.se
  // }

  // handleChange(event) {
  //   this.setState({ tech: event.target.value });
  // };
  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  };



  render(){
    console.log("---> ",this.state.tech);
    var arr = [" ", " ", " "]
    var team_composition = arr.map((row,i)=>{
      return(
        <div style={{width:'100%',marginLeft:'20px'}}>
          <Grid container spacing={24}>
            <Grid item xs={1}>
              <TextField
                id="search"
                fullWidth
                // label="Tools Inventory"
                // value={row.role}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="search"
                fullWidth
                // label="Tools Inventory"
                // value={row.location}
                fullWidth
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                id="search"
                fullWidth
                // label="Tools Inventory"
                // value={row.number}
                fullWidth
              />
            </Grid>
            <Grid item xs={1}>
              <FormControl fullWidth>
                <Select
                  // value={row.core_flex}
                  // onChange={this.handleChange.bind(this)}
                  // name= "core_flex"
                  // value={this.state.core_flex}
                  // inputProps={{
                  //   name: 'age',
                  //   id: 'age-simple',
                  // }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                   <MenuItem value={'Core'}>Core</MenuItem>
                   <MenuItem value={'Flex'}>Flex</MenuItem>
                  {/*<MenuItem value={30}>MongoDB</MenuItem>
                  <MenuItem value={40}>ExpessJS</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="search"
                label=""
                // value={row.demand}
                type="search"
                fullWidth
                style={{marginTop:'0px'}}
              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                id="date"
                // type="date"
                // defaultValue={row.start}
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                style={{width:'80px'}}

              />
            </Grid>
            <Grid item xs={1}>
              <TextField
                id="date"
                // type="date"
                // defaultValue={row.end}
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                style={{marginLeft:'17px',width:'80px'}}
              />
            </Grid>
            {/* <Grid item xs={1}> */}
              {/* <input type='date' style={{marginTop:'10px'}}/> */}
            {/* </Grid> */}
            <Grid item xs={1}>
              <FormControl fullWidth>
                <Select
                  // name= "priority"
                  // value={this.state.priority}
                  // onChange={this.handleChange.bind(this)}
                  // inputProps={{
                  //   name: 'age',
                  //   id: 'age-simple',
                  // }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                   <MenuItem value={'High'}>High</MenuItem>
                  <MenuItem value={'Low'}>Low</MenuItem>
                  {/*<MenuItem value={30}>MongoDB</MenuItem>
                  <MenuItem value={40}>ExpessJS</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="search"
                fullWidth
                // label="Tools Inventory"
                // value={row.location}
                fullWidth
              />
            </Grid>
          </Grid>
        </div>
      )
    })

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
            {/* <Button variant="fab" mini aria-label="Add" > */}
              <ClearIcon style={{float:'right',color:'#FFF',cursor:'pointer'}} onClick={this.props.handleClose}/>
            {/* </Button> */}
            {/* <Button variant="fab" color="secondary" style={{position:'absolute',right:'70px',top:'35px',zIndex:'9'}} onClick={this.handleNext.bind(this)}>
              <Forward  />
            </Button> */}
          </DialogTitle>
          <DialogContent style={{marginTop:'10px'}}>
            <DialogContentText id="alert-dialog-slide-description">
              <Grid container spacing={24}>
                <Grid item xs={8}>
                  <TextField
                    id="search"
                    // defaultValue= {this.props.data.project_description}
                    // defaultValue="foo"
                    multiline
                    rowsMax="2"
                    label="Project Description"
                    // type="search"
                    // value={this.state.data.project_description}
                    fullWidth
                    // onChange={this.handleChange.bind(this)}
                    // className={classes.textField}
                    // margin="normal"
                  />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                      id="search"
                      // defaultValue= {this.props.data.project_description}
                      // defaultValue="foo"
                      fullWidth
                      label="Technology Inventory"
                      // type="search"
                      // value={this.state.data.technology_inventory}
                      fullWidth
                      // onChange={this.handleChange.bind(this)}
                      // className={classes.textField}
                      // margin="normal"
                    />
                </Grid>
                {/* <div style={{marginTop:'10px'}}> */}
                  <Grid item xs={8}>
                    <span>Project Timelines : </span>
                  </Grid><br/>

                {/* </div> */}
                <Grid item xs={4}>
                  <TextField
                    id="search"
                    fullWidth
                    label="Tools Inventory"
                    // value={this.state.data.tool_inventory}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={3} style={{marginTop:'-50px'}}>
                  <TextField
                    id="date"
                    label="Start date"
                    // defaultValue={this.state.data.start_date}
                    // className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={3} style={{marginTop:'-50px'}}>
                  <TextField
                    id="date"
                    label="End date"
                    // defaultValue={this.state.data.end_date}
                    // className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
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
                    // value={this.state.data.name}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="search"
                    label="Email ID"
                    type="search"
                    fullWidth
                    style={{marginTop:'-30px'}}
                    // value={this.state.data.email}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="search"
                    label="Phone No."
                    type="search"
                    fullWidth
                    style={{marginTop:'-30px'}}
                    // value={this.state.data.phone}
                  />
                </Grid>
                {/* <Grid item xs={1}>
                  <Button variant="fab" color="secondary" mini aria-label="Add">
                    <AddIcon />
                  </Button>
                </Grid> */}
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
                      <span>Demand</span>
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
                    {/* <Grid item xs={1}> */}
                      {/* <span>Start Date</span> */}
                    {/* </Grid> */}
                    <Grid item xs={1}>
                      <span>Priority</span>
                    </Grid>
                    <Grid item xs={2}>
                      <span>Job Description</span>
                    </Grid>
                  </Grid>
                </div>
                {team_composition}
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
