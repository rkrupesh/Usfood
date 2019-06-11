import React from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DemandCapture from './../components/demandCapture1.jsx';
import DemandCaptureData from './../components/demandCaptureData.jsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

let id = 0;
function createData(indent, location, number,number1, core_flex) {
  id += 1;
  return { id, indent, location, number,number1, core_flex  };
}

const data = [
  createData('12231344', 'Offshore, India, Hyderabad', '2', '2','Core'),
  createData('12432143', 'Onsite, France', '5' ,'4','Flex'),
  createData('45654976', 'Onsite, France', '5','2','Core'),
  // createData('35274573', 'Noida', 'B2'),
  // createData('00393477', 'Mumbai', 'C1'),
  // createData('11747290', 'London', 'C2'),
];


var arrayData = [
  {
    project_description : 'Workday:                                                                                                                                                                                    1. Implement new Workday core HCM platform including recruiting, compensation, payroll, talent mgmt., absence mgmt. and time tracking 2. 50 – 75 consultants on project 3. Timeline:  in progress, initial roll out expected Q3 2018',
    technology_inventory : 'SAP',
    start_date :'Q2 2016',
    end_date : 'Q3 2018',
    tool_inventory : 'Service Now',
    name : 'Senior Director',
    email : 'abc@wipro.com',
    phone : 'xxxxxxx',
    team_composition : [
      {
        role : 'PM',
        location : 'Offshore, India',
        core_flex : 'Core',
        number: '2',
        demand : 'Nil',
        start : 'Q2 2018',
        end : 'Q3 2019',
        priority : 'High',
      },
      {
        role : 'Developer',
        location : 'Onsite, France',
        core_flex : 'Flex',
        demand : 'Nil',
        number: '5',
        start : 'Q2 2018',
        end : 'Q3 2019',
        priority : 'High',
      },
      {
        role : 'Tester',
        location : 'Onsite, France',
        core_flex : 'Core',
        number: '5',
        demand : 'Nil',
        start : 'Q2 2018',
        end : 'Q3 2019',
        priority : 'High',
      }
    ]
  },
  {
    project_description : 'Finance Transformation:                                                                                                                                                                                    1. Implementation of ERP system for financials 2. Timeline:  software evaluations underway; multi-year effort expected',
    technology_inventory : '.Net',
    start_date :'Q3 2017',
    end_date : 'Q3 2018',
    tool_inventory : 'PeopleSoft Finance, APPeopleSoft Finance, Asset ManagementPeopleSoft Finance, Project CostPeopleSoft Finance, AREnvision',
    name : 'Director',
    email : 'def@wipro.com',
    phone : 'xxxxxxx',
    team_composition : [
      {
        role : 'PM',
        location : 'Offshore, India',
        core_flex : 'Core',
        number: '2',
        demand : 'Nil',
        start : 'Q2 2018',
        end : 'Q3 2019',
        priority : 'High',
      },
      {
        role : 'Developer',
        location : 'Onsite, France',
        core_flex : 'Flex',
        demand : 'Nil',
        number: '5',
        start : 'Q2 2018',
        end : 'Q3 2019',
        priority : 'High',
      },
      {
        role : 'Tester',
        location : 'Onsite, France',
        core_flex : 'Core',
        number: '5',
        demand : 'Nil',
        start : 'Q2 2018',
        end : 'Q3 2019',
        priority : 'High',
      }
    ]
  },
  {
    project_description : 'ChefStore ERP:                                                                                                                                                                                   1. Implement MS Dynamics AX 365 for Operations 2. Workstreams include Financial Management, Planning, Purchasing & Inventory, Warehouse Management and Retail 3. 25 – 30 consultants on project 4. Timeline:  Initial phase completed in Q1 2018; Additional work underway',
    technology_inventory : 'Windows',
    start_date :'Q1 2017',
    end_date : 'Q3 2018',
    tool_inventory : 'Dynamics 365',
    name : 'Senior Manager',
    email : 'ghi@wipro.com',
    phone : 'xxxxxxx',
    team_composition : [
      {
        role : 'PM',
        location : 'Offshore, India',
        core_flex : 'Core',
        number: '2',
        demand : 'Nil',
        start : 'Q2 2018',
        end : 'Q3 2019',
        priority : 'High',
      },
      {
        role : 'Developer',
        location : 'Onsite, France',
        core_flex : 'Flex',
        demand : 'Nil',
        number: '5',
        start : 'Q2 2018',
        end : 'Q3 2019',
        priority : 'High',
      },
      {
        role : 'Tester',
        location : 'Onsite, France',
        core_flex : 'Core',
        number: '5',
        demand : 'Nil',
        start : 'Q2 2018',
        end : 'Q3 2019',
        priority : 'High',
      }
    ]
  }
]

export default class Dashboard extends React.Component {
   constructor(props){
     super(props)
     this.state = {
       open: false,
       open1: false,
       openData : {},
       expanded: null,
       index: 0
     }
   }
   handleClose(){
     this.setState({
       open: false
     })
   }
   handleClose1(){
     this.setState({
       open1: false
     })
   }
   handleChange(panel, event, expanded){
     console.log(panel,event,expanded);
    this.setState({
      expanded: expanded ? panel : false
    });
  };
   render() {
      return (
         <div>
           <AppBar position="static" color="default" style={{textAlign:'center',position:'fixed',top:'0',left:'0',right:'0'}}>
             <Toolbar>
               <img src="./client/images/geftco_logo.jpg" width='40' />
               {/* <center> */}
               <Typography variant="title" color="inherit" style={{marginLeft:'30px'}}>
                 Demand Capture Dashboard
               </Typography>
               {/* </center> */}
               <Button component={Link} to='/' style={{position:'absolute',right:'90px',float:'right'}}>
                 LOGOUT
               </Button>
               <img src="./client/images/wipro.png"  width='60' style={{position: 'absolute',right:'0',marginRight:'15px'}}/>
             </Toolbar>
           </AppBar>
           <center>
           <ExpansionPanel style={{marginTop:'80px',marginBottom:'5px',width:'80%'}}>
             <ExpansionPanelSummary style={{backgroundColor:'#000'}}>
               <Grid container spacing={24}>
                 <Grid item xs={2}><Typography style={{color:'#FFF',fontWeight:'bold'}}>Project ID</Typography></Grid>
                 <Grid item xs={2}><Typography style={{color:'#FFF',fontWeight:'bold'}}>Project Name</Typography></Grid>
                 <Grid item xs={1}><Typography style={{color:'#FFF',fontWeight:'bold'}}>Demand</Typography></Grid>
                 <Grid item xs={1}><Typography style={{color:'#FFF',fontWeight:'bold'}}>Fulfilled</Typography></Grid>
                 <Grid item xs={2}><Typography style={{color:'#FFF',fontWeight:'bold'}}>Start Date</Typography></Grid>
                 <Grid item xs={2}><Typography style={{color:'#FFF',fontWeight:'bold'}}>End Date</Typography></Grid>
                 <Grid item xs={2}><Typography style={{color:'#FFF',fontWeight:'bold'}}>Status</Typography></Grid>
                 {/* <Typography style={{color:'#FFF'}}>General settings</Typography> */}
               </Grid>
               {/* <Typography >I am an expansion panel</Typography> */}
             </ExpansionPanelSummary>
           </ExpansionPanel>
           <ExpansionPanel expanded={this.state.expanded === 'panel1'} onChange={this.handleChange.bind(this,'panel1')} style={{width:'80%'}}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Grid container spacing={24}>
                <Grid item xs={2}><Typography>WRKD23432</Typography></Grid>
                <Grid item xs={2}><Typography>INES</Typography></Grid>
                <Grid item xs={1}><Typography>12</Typography></Grid>
                <Grid item xs={1}><Typography>8</Typography></Grid>
                <Grid item xs={2}><Typography>06-08-2018</Typography></Grid>
                <Grid item xs={2}><Typography>06-08-2020</Typography></Grid>
                <Grid item xs={2}><Typography>Pending</Typography></Grid>
                {/* <Typography style={{color:'#FFF'}}>General settings</Typography> */}
              </Grid>
                {/* <Typography >I am an expansion panel</Typography> */}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Paper style={{width:'100%'}}>
                 <Table style={{borderRadius:'5px'}}>
                   <TableHead >
                     <TableRow style={{backgroundColor:'rgb(107, 107, 107)'}}>
                       <TableCell style={{color:'white',fontSize:'14px',fontWeight:'bold'}}>Requirement No.</TableCell>
                       <TableCell style={{color:'white',fontSize:'14px',fontWeight:'bold'}}>Location</TableCell>
                       <TableCell style={{color:'white',fontSize:'14px',fontWeight:'bold'}}>Demand</TableCell>
                       <TableCell style={{color:'white',fontSize:'14px',fontWeight:'bold'}}>Fulfilled</TableCell>
                       <TableCell style={{color:'white',fontSize:'14px',fontWeight:'bold'}}>Core/Flex</TableCell>
                     </TableRow>
                   </TableHead>
                   <TableBody>
                     {data.map((n,i) => {
                       // console.log(n);
                       return (
                         <TableRow key={i}>
                           <TableCell component="th" scope="row" style={{fontSize:'14px'}} onClick={()=>{
                             this.setState({
                               open1 : true,
                               openData : arrayData,
                               index: 0
                             })
                           }}><span style={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>{n.indent}</span></TableCell>
                           {/* <TableCell numeric>{n.indent}</TableCell> */}
                           <TableCell style={{fontSize:'14px'}}>{n.location}</TableCell>
                           <TableCell style={{fontSize:'14px'}}>{n.number}</TableCell>
                           <TableCell style={{fontSize:'14px'}}>{n.number1}</TableCell>
                           <TableCell style={{fontSize:'14px'}}>{n.core_flex}</TableCell>
                         </TableRow>
                       );
                     })}
                   </TableBody>
                 </Table>
               </Paper>
              </ExpansionPanelDetails>
            </ExpansionPanel>
           <ExpansionPanel expanded={this.state.expanded === 'panel2'} onChange={this.handleChange.bind(this,'panel2')} style={{width:'80%'}}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Grid container spacing={24}>
                <Grid item xs={2}><Typography>FNCT57547</Typography></Grid>
                <Grid item xs={2}><Typography style={{fontSize:'13px'}}>OVL</Typography></Grid>
                <Grid item xs={1}><Typography>12</Typography></Grid>
                <Grid item xs={1}><Typography>8</Typography></Grid>
                <Grid item xs={2}><Typography>16-07-2019</Typography></Grid>
                <Grid item xs={2}><Typography>23-06-2022</Typography></Grid>
                <Grid item xs={2}><Typography>Pending</Typography></Grid>
              </Grid>
                {/* <Typography >I am an expansion panel</Typography> */}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Paper style={{width:'100%'}}>
                 <Table style={{borderRadius:'5px'}}>
                   <TableHead >
                     <TableRow style={{backgroundColor:'rgb(107, 107, 107)'}}>
                       <TableCell style={{color:'white',fontSize:'14px',fontWeight:'bold'}}>Requirement No.</TableCell>
                       <TableCell style={{color:'white',fontSize:'14px',fontWeight:'bold'}}>Location</TableCell>
                       <TableCell style={{color:'white',fontSize:'14px',fontWeight:'bold'}}>Demand</TableCell>
                       <TableCell style={{color:'white',fontSize:'14px',fontWeight:'bold'}}>Fulfilled</TableCell>
                       <TableCell style={{color:'white',fontSize:'14px',fontWeight:'bold'}}>Core/Flex</TableCell>
                     </TableRow>
                   </TableHead>
                   <TableBody>
                     {data.map((n,i) => {
                       // console.log(n);
                       return (
                         <TableRow key={i}>
                           <TableCell component="th" scope="row" style={{fontSize:'14px'}} onClick={()=>{
                             this.setState({
                               open1 : true,
                               openData : arrayData,
                               index: 1
                             })
                           }}><span style={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>{n.indent}</span></TableCell>
                           {/* <TableCell numeric>{n.indent}</TableCell> */}
                           <TableCell style={{fontSize:'14px'}}>{n.location}</TableCell>
                           <TableCell style={{fontSize:'14px'}}>{n.number}</TableCell>
                           <TableCell style={{fontSize:'14px'}}>{n.number1}</TableCell>
                           <TableCell style={{fontSize:'14px'}}>{n.core_flex}</TableCell>
                         </TableRow>
                       );
                     })}
                   </TableBody>
                 </Table>
               </Paper>
              </ExpansionPanelDetails>
            </ExpansionPanel>
           <ExpansionPanel expanded={this.state.expanded === 'panel3'} onChange={this.handleChange.bind(this,'panel3')} style={{width:'80%'}}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Grid container spacing={24}>
                  <Grid item xs={2}><Typography>CSTR45032</Typography></Grid>
                  <Grid item xs={2}><Typography>FVL</Typography></Grid>
                  <Grid item xs={1}><Typography>12</Typography></Grid>
                  <Grid item xs={1}><Typography>8</Typography></Grid>
                  <Grid item xs={2}><Typography>12-03-2019</Typography></Grid>
                  <Grid item xs={2}><Typography>31-07-2024</Typography></Grid>
                  <Grid item xs={2}><Typography>Pending</Typography></Grid>
              </Grid>
                {/* <Typography >I am an expansion panel</Typography> */}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Paper style={{width:'100%'}}>
                 <Table style={{borderRadius:'5px'}}>
                   <TableHead >
                     <TableRow style={{backgroundColor:'rgb(107, 107, 107)'}}>
                       <TableCell style={{color:'white',fontSize:'14px',fontWeight:'bold'}}>Requirement No.</TableCell>
                       <TableCell style={{color:'white',fontSize:'14px',fontWeight:'bold'}}>Location</TableCell>
                       <TableCell style={{color:'white',fontSize:'14px',fontWeight:'bold'}}>Demand</TableCell>
                       <TableCell style={{color:'white',fontSize:'14px',fontWeight:'bold'}}>Fulfilled</TableCell>
                       <TableCell style={{color:'white',fontSize:'14px',fontWeight:'bold'}}>Core/Flex</TableCell>
                     </TableRow>
                   </TableHead>
                   <TableBody>
                     {data.map((n,i) => {
                       // console.log(n);
                       return (
                         <TableRow key={i}>
                           <TableCell component="th" scope="row" style={{fontSize:'14px'}} onClick={()=>{
                             this.setState({
                               open1 : true,
                               openData : arrayData,
                               index: 2
                             })
                           }}><span style={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>{n.indent}</span></TableCell>
                           {/* <TableCell numeric>{n.indent}</TableCell> */}
                           <TableCell style={{fontSize:'14px'}}>{n.location}</TableCell>
                           <TableCell style={{fontSize:'14px'}}>{n.number}</TableCell>
                           <TableCell style={{fontSize:'14px'}}>{n.number1}</TableCell>
                           <TableCell style={{fontSize:'14px'}}>{n.core_flex}</TableCell>
                         </TableRow>
                       );
                     })}
                   </TableBody>
                 </Table>
               </Paper>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </center>


          <div style={{position:'fixed',bottom:'0',right:'0',marginRight:'248px',marginBottom:'35px'}}>
            <Button variant="fab" color="secondary" aria-label="Add" onClick={()=>{
              // console.log(this.state.open);
              this.setState({
                open: true
             })}}>
              <AddIcon />
            </Button>
          </div>

          <DemandCapture open={this.state.open} handleClose={this.handleClose.bind(this)}/>
          {this.state.open1 ?
            <DemandCaptureData open={this.state.open1} data={this.state.openData} index={this.state.index} handleClose={this.handleClose1.bind(this)}/> : null
          }
         </div>
      );
   }
}

{/* <Grid container spacing={24}>
  <Grid item xs={3}><Typography>CSTR45032</Typography></Grid>
  <Grid item xs={3}><Typography>ChefStore ERP</Typography></Grid>
  <Grid item xs={2}><Typography>12-03-2019</Typography></Grid>
  <Grid item xs={2}><Typography>31-07-2024</Typography></Grid>
  <Grid item xs={2}><Typography>Pending</Typography></Grid>
</Grid> */}

{/* <Grid container spacing={24}>
  <Grid item xs={3}><Typography>FNCT57547</Typography></Grid>
  <Grid item xs={3}><Typography>Finance Transformation</Typography></Grid>
  <Grid item xs={2}><Typography>16-07-2019</Typography></Grid>
  <Grid item xs={2}><Typography>23-06-2022</Typography></Grid>
  <Grid item xs={2}><Typography>Pending</Typography></Grid>
</Grid> */}
