/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from 'react-dom';
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line} from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1
} from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";

var options2={
  scales: {
    yAxes: [
      {
        gridLines: {
          color: "black",
          zeroLineColor: "#212529"
        },
        ticks: {
          callback: function(value) {
            if (!(value % 10)) {
              return "" + value + "";
            }
          }
        }
      }
    ]
  },
  tooltips: {
    callbacks: {
      label: function(item, data) {
        var label = data.datasets[item.datasetIndex].label || "";
        var yLabel = item.yLabel;
        var content = "";

        if (data.datasets.length > 1) {
          content += label;
        }

        content += "" + yLabel + "";
        return content;
      }
    }
  }
}

var mqttClient;

class Index extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1",
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
      // Sub Topic
      const topicsS="/ChartsInfoS"
      const topicsR="/ChartsInfoR"

      var AWS = require('aws-sdk');
      var AWSIoTData = require('aws-iot-device-sdk');
      var AWSConfiguration = require('./examples/aws-configuration.js');
      console.log('Loaded AWS SDK for JavaScript and AWS IoT SDK for Node.js');
      var refresh = 0;
      var clientId = 'mqtt-explorer-' + (Math.floor((Math.random() * 100000) + 1));
      AWS.config.region = AWSConfiguration.region;
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
         IdentityPoolId: AWSConfiguration.poolId
      });
      mqttClient = AWSIoTData.device({
         region: AWS.config.region,
         host:AWSConfiguration.host,
         clientId: clientId,
         protocol: 'wss',
         maximumReconnectTimeMs: 1000,
         debug: true,
         accessKeyId: '',
         secretKey: '',
         sessionToken: ''
      });
      var cognitoIdentity = new AWS.CognitoIdentity();
      AWS.config.credentials.get(function(err, data) {
         if (!err) {
            console.log('retrieved identity: ' + AWS.config.credentials.identityId);
            var params = {
               IdentityId: AWS.config.credentials.identityId
            };
            cognitoIdentity.getCredentialsForIdentity(params, function(err, data) {
               if (!err) {
                  mqttClient.updateWebSocketCredentials(data.Credentials.AccessKeyId,
                     data.Credentials.SecretKey,
                     data.Credentials.SessionToken);
               } else {
                  console.log('error retrieving credentials: ' + err);
                  alert('error retrieving credentials: ' + err);
               }
            });
         } else {
            console.log('error retrieving identity:' + err);
         }
      });
       
      window.mqttClientConnectHandler = function() 
      {
        console.clear();
        console.log('connect');
        mqttClient.subscribe(topicsR);
        mqttClient.publish(topicsS,"HI");
      }
      window.mqttClientReconnectHandler = function() {
        console.log('reconnect : times : ' + refresh.toString());  
      };
      
      window.mqttClientMessageHandler = function(topic, payload) {
        if(topicsR===topic)
        {
          var jsonin = JSON.parse(payload.toString())
          var data1 = {
            labels: jsonin.chl,
            datasets: [
              {
                label: "Performance",
                data: jsonin.ch1d
              }
            ]
          }
          
          var data2 = {
            labels: jsonin.chl,
            datasets: [
              {
                label: "Performance",
                data:jsonin.ch2d
              }
            ]
          }
      const head = <Header img={jsonin.images} epo={jsonin.epochs}  acc={jsonin.acc} loss={jsonin.loss}/>;
    
      

     const elem =   
       <Row>
            <Col className="mb-0 mb-xl-0" xl="6">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Overview
                      </h6>
                      <h2 className="text-white mb-0">Accuracy vs Epoch</h2>
                    </div>

                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Line
                      data={data1}
                      options={chartExample1.options}
                      getDatasetAtEvent={e => console.log(e)}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="6">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Overview
                      </h6>
                      <h2 className="mb-0">Loss vs Epoch</h2>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                  <Line
                      data={data2}
                      options={options2}
                      getDatasetAtEvent={e => console.log(e)}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        
        ReactDOM.render(head,document.getElementById('recieveH'));
        ReactDOM.render(elem,document.getElementById('recieve'));
        //ReactDOM.render(element,document.getElementById('not2'));
        console.log('message: ' + topic + ':' + payload.toString());
        }
        mqttClient.end();
        console.log('disconnect');

      };
      
      mqttClient.on('connect', window.mqttClientConnectHandler);
      mqttClient.on('reconnect', window.mqttClientReconnectHandler);
      mqttClient.on('message', window.mqttClientMessageHandler);
      mqttClient.on('close', function() {
        console.log('close');
      });
      mqttClient.on('offline', function() {
        console.log('offline');
      });
      mqttClient.on('error', function(error) {
        console.log('error', error);
      });


  }

componentDidMount(){
  console.log(chartExample1['data2'])

}

  render() {
    return (
      <>

<>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Container id="recieveH" />
             </div>
          </Container>
        </div>
      </>

        {/* Page content */}
        <Container className="mt--7" fluid id="recieve">
          
         </Container>
      </>
    );
  }
}

export default Index;
