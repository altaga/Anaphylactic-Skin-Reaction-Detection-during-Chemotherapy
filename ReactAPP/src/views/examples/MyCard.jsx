import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Row,
    Col
  } from "reactstrap";

  var bucket="https://yourbucketname.s3.amazonaws.com/";

class MyCard extends React.Component {

  render() {
    return (<>

<Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={bucket+this.props.imge+".jpg"}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">

                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading"> {this.props.incident}</span>
                          <span className="description">Incidents</span>
                        </div>
                        <div>
                          <span className="heading"> {this.props.cancer}</span>
                          <span className="description">Cancer</span>
                        </div>
                        <div>
                          <span className="heading"> {this.props.medicine}</span>
                          <span className="description">Medicine</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                    {this.props.names}
                      <span className="font-weight-light">{this.props.name}, {this.props.age} years</span>
                    </h3>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Next Appointment:
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      {this.props.appoint}
                    </div>
                    <hr className="my-4" />
                    <a>
                      Comments:<p />
                      {this.props.comments}
                    </a>
                    <p>
                      
                    </p>

                  </div>
                </CardBody>
              </Card>
                </>);
  }
}

export default MyCard;