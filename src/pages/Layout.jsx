import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
  font: Arial, sans-serif;
  font-size: large;
  float: left;
  padding: 20px 40px;
  margin: auto;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: auto;
`;

const Nav = styled.nav`
  display: flex;
  width: max-width;
  background-color: #6976d9;
  margin: auto;
  border-radius: 0.5rem;
  margin: 0.5rem;
  font-family: sans-serif;
`;

const Layout = () => {
  return (
    <>
      <Nav>
        <Ul>
          <Li key="Student Directory">
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
              Students
            </Link>
          </Li>
          <Li key="Add New Student">
            <Link
              style={{ color: 'white', textDecoration: 'none' }}
              to="/newStudent"
            >
              New Student
            </Link>
          </Li>
        </Ul>
      </Nav>

      <Outlet />
    </>
  );
};

export default Layout;
