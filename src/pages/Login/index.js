import styled from "styled-components";
import React from "react";
import { Input, Button } from "antd";
import Link from "next/link";
const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const LoginForm = styled.div``;

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageWrapper>
        <LoginForm>
          <img src="images/logo.png" width="200px" />
          <div>
            User Name <Input />
          </div>

          <div>
            Password <Input />
          </div>
          <Link href="/Dashboard">
            <Button
              style={{
                backgroundColor: "var(--yellow)",
                borderRadius: "5px",
                border: "none",
                display: "flex",
                gap: "5px",
                padding: "0 15px",
                alignItems: "center",
                height: "30px",
              }}
            >
              Login
            </Button>
          </Link>
        </LoginForm>
        <div style={{ backgroundColor: "var(--lightGray)" }}>
          <img src=" images/Browser.png" />
          <p>Trusted & certificated Dashboard System </p>
          <p>
            Turn your smartphone or tablet into powerful POS Manage sales
            inventory and employees with ease; engage custommers increase your
            revenue
          </p>
        </div>
      </PageWrapper>
    );
  }
}

export default index;
