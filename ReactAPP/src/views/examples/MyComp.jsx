import React from "react";
import ReactDOM from 'react-dom';
import UIfx from 'uifx'; 
import tickAudio from './notif.mp3';
import MediaCard from './Card.jsx';
import Grid from '@material-ui/core/Grid';
import { Row, Col } from 'reactstrap';

var element;
var mqttClient;

class MyComp extends React.Component {

  componentWillUnmount() {
    mqttClient.end();
    console.log('disconnect');
  }

    componentDidMount() {
        const tick = new UIfx(tickAudio,
            {
              volume: 1.0
            });
          
            const comp1R="/JetsonAI1R"

            // optional cofiguration
        
            
            var AWS = require('aws-sdk');
            var AWSIoTData = require('aws-iot-device-sdk');
            var AWSConfiguration = require('./aws-configuration.js');
            
            //var clinic = "Example Hospital 1"
            
            console.log('Loaded AWS SDK for JavaScript and AWS IoT SDK for Node.js');
            
            //
            // Remember our message history here.
            //
            
            
            var refresh = 0;
            
            //
            // Create a client id to use when connecting to AWS IoT.
            //
            var clientId = 'mqtt-explorer-' + (Math.floor((Math.random() * 100000) + 1));
            
            //
            // Initialize our configuration.
            //
            AWS.config.region = AWSConfiguration.region;
            
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
               IdentityPoolId: AWSConfiguration.poolId
            });
            
            //
            // Create the AWS IoT device object.  Note that the credentials must be 
            // initialized with empty strings; when we successfully authenticate to
            // the Cognito Identity Pool, the credentials will be dynamically updated.
            //
            mqttClient = AWSIoTData.device({
               //
               // Set the AWS region we will operate in.
               //
               region: AWS.config.region,
               //
               ////Set the AWS IoT Host Endpoint
               host:AWSConfiguration.host,
               //
               // Use the clientId created earlier.
               //
               clientId: clientId,
               //
               // Connect via secure WebSocket
               //
               protocol: 'wss',
               //
               // Set the maximum reconnect time to 8 seconds; this is a browser application
               // so we don't want to leave the user waiting too long for reconnection after
               // re-connecting to the network/re-opening their laptop/etc...
               //
               maximumReconnectTimeMs: 1000,
               //
               // Enable console debugging information (optional)
               //
               debug: true,
               //
               // IMPORTANT: the AWS access key ID, secret key, and sesion token must be 
               // initialized with empty strings.
               //
               accessKeyId: '',
               secretKey: '',
               sessionToken: ''
            });
            
            //
            // Attempt to authenticate to the Cognito Identity Pool.  Note that this
            // example only supports use of a pool which allows unauthenticated 
            // identities.
            //
            var cognitoIdentity = new AWS.CognitoIdentity();
            AWS.config.credentials.get(function(err, data) {
               if (!err) {
                  console.log('retrieved identity: ' + AWS.config.credentials.identityId);
                  var params = {
                     IdentityId: AWS.config.credentials.identityId
                  };
                  cognitoIdentity.getCredentialsForIdentity(params, function(err, data) {
                     if (!err) {
                        //
                        // Update our latest AWS credentials; the MQTT client will use these
                        // during its next reconnect attempt.
                        //
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
              mqttClient.subscribe(comp1R);
            }
            
            //
            // Reconnect handler; update div visibility.
            //
            
            
            window.mqttClientReconnectHandler = function() {
              console.log('reconnect : times : ' + refresh.toString());  
              // document.getElementById("connecting-div").style.visibility = 'visible';
              // document.getElementById("explorer-div").style.visibility = 'hidden';
            };
            
            window.mqttClientMessageHandler = function(topic, payload) {
              tick.play();
              var jsonin = JSON.parse(payload.toString())
              element = <MediaCard 
              name={jsonin.name} 
              gen={jsonin.gen}
              hr={jsonin.hr}
              temp = {jsonin.temp}
              stat = {jsonin.stat} 
              />;
              ReactDOM.render(element,document.getElementById('not1'));
              //ReactDOM.render(element,document.getElementById('not2'));
              console.log('message: ' + topic + ':' + payload.toString());
             
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
  render() {
    return (<>
    <Grid fluid>
      <Row>
        <Col style={{marginLeft:"2rem"}} md={12} id='not1' />
        <Col md={12} id='not2' />
      </Row>
    </Grid>
    </>);
  }
}

export default MyComp;
