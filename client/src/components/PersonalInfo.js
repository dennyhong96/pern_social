import React from "react";
import { Card, Badge, ListGroup } from "react-bootstrap";

const PersonalInfo = () => {
  return (
    <Card className="personal-info text-center">
      <Card.Body>
        <img
          src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
          className="avatar"
        />
        <hr />
        <h4 className="m-0">John Doe</h4>
        <small className="text-muted">@john_1234</small>
        <hr />
        <p className="mb-0">
          <i class="fas fa-user-friends"></i> Following: 15
        </p>
        <p>
          <i class="fas fa-users"></i> Followers: 12
        </p>
        <hr />
        <div className="d-flex justify-content-around align-items-center flex-wrap">
          <Badge pill variant="accent-light">
            11 Posts
          </Badge>
          <Badge pill variant="primary-light">
            35 Comments
          </Badge>
        </div>
        <hr />
        <ListGroup className="friends-list">
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item action>
            <div className="d-flex align-items-center">
              <img
                src={`${process.env.PUBLIC_URL}/uploads/users/default.png`}
                className="friend-avartar"
              />
              <p className="m-0 ml-2 text-dark">@john123</p>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default PersonalInfo;
