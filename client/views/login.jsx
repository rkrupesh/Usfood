import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
// import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

export default class LoginPage extends Component{
  render(){
    return(
      <div style={styles.container}>
        <Paper style={styles.centerBox}>

          <div style={styles.login}>

            <div>
              <center>


                <img style={styles.img} src="./client/images/geftco_logo.jpg" />

                <img style={styles.img} src="./client/images/wipro.png" />
              </center>
            </div>

            <h1 style={styles.loginHeading}>Login</h1>

              <div style={styles.feilds}>
                <h3 style={styles.fieldHeading}>Email</h3>
                <TextField id="search" InputLabelProps={{
                    style: {
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      width: '100%',
                      color: 'red'


                    } }}  color="red" label="deepak.agarwal5@wipro.com" type="search"  margin="normal" style={{width:'70%',marginTop:'-5px',color:'red'}}/>


                <br/>
                <br/>
                <h3 style={styles.fieldHeading}>Password</h3>
                <TextField id="search" InputLabelProps={{
                    style: {
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      width: '100%',
                      color: 'red'
                    } }}  label="*******" type="search"  margin="normal" style={{width:'70%',marginTop:'-5px'}}/>

              <br/>
              <br/>
              <Link to='/dashboard'>
              <Button variant="contained" color="secondary" style={{marginLeft:200}}>
                Login
              </Button>
            </Link>

            </div>

          </div>

        </Paper>
      </div>
    );
  }
}

const styles = {
  container:{
    // overflow: 'hidden',
    // backgroundImage:"url('https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg')",
    width:window.innerWidth,
    height:window.innerHeight,
    backgroundSize:'cover',
  },
  centerBox:{
    height:(window.innerHeight/4) * 3,
    width:(window.innerWidth/3),
    backgroundColor:'white',
    position:'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin:'auto',
    display:'flex',
    flexDirection:'row'
  },
  login:{
    flex:1,
    justifyContent:'center'
  },
  img:{
    height:'50px',
    margin:'10px 0px 0px 20px'
  },
  loginHeading:{
    fontFamily: 'Roboto',
    margin:'25px 0px 10px 60px',
    color:'#f44242'
  },
  feilds:{
    margin:'20px 0px 0px 100px',
  },
  signUpHeading:{
    fontFamily: 'Roboto',
    textAlign:'center',
    color:'white'
  },
  signUpText:{
    fontFamily: 'Roboto',
    color:'white',
    margin:'0px 10px 0px 10px'
  },
  fieldHeading:{
    fontFamily: 'Roboto',
    margin:'25px 0px 10px 0px',
  }


}
