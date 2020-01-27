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
import MyCard from './MyCard'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.jsx";

var Dbname="HacksterDB";

var AWS = require('aws-sdk');
  var AWSConfiguration = require('./aws-configuration.js');
  AWS.config.region = AWSConfiguration.region;
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
     IdentityPoolId: AWSConfiguration.poolId
  });

  var cognitoIdentity = new AWS.CognitoIdentity();
  AWS.config.credentials.get(function(err, data) {
  if (!err) {console.log('retrieved identity: ' + AWS.config.credentials.identityId);
  var params = {IdentityId: AWS.config.credentials.identityId};
  cognitoIdentity.getCredentialsForIdentity(params, function(err, data) {
  if (!err) {} 
  else {console.log('error retrieving credentials: ' + err);
  alert('error retrieving credentials: ' + err);
  }});} 
  else {console.log('error retrieving identity:' + err);}});

var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

class Profile extends React.Component {

componentDidMount() {
  

}
// DONT USE # and Call in ProjectionExpression


  Appear()
  {
    var params = {
      ExpressionAttributeValues: {
       ":v1": {
         S: "dev1"
        }
      }, 
      KeyConditionExpression: "PartKey = :v1", 
      TableName: Dbname
     };
    
    dynamodb.query(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else { 
        var i;
        var pointer=0;
        for (i = 0; i < data.Items.length; i++) {
          if(data.Items[i].SortKey.S===(document.getElementById("input-first-name").value + " " + document.getElementById("input-last-name").value))
          {
            pointer=i;
            break;
          }
        }
        console.log(data.Items[pointer].SortKey.S)
        console.log()
        ReactDOM.render(<MyCard imge={document.getElementById("input-first-name").value + document.getElementById("input-last-name").value} name={data.Items[i].SortKey.S} incident={data.Items[pointer]["Incidents"]["S"]} cancer={data.Items[pointer]["Cancer"]["S"]} medicine={data.Items[pointer]["Medicine"]["S"]} age={data.Items[pointer]["Age"]["S"]} appoint={data.Items[pointer]["App"]["S"]} comments={data.Items[pointer]["Comments"]["S"]}/>,document.getElementById('cardplace'))
      }
    }
    );
    }
  

  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container style={{marginTop:"-40rem"}} fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4" id="cardplace" />
            <Col className="order-xl-1" xl="8"  id='search' >
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Patient information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              First name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </Form>
                </CardBody>
                <CardBody>
                <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0"></h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={() => this.Appear()}
                        size="l"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                  </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
