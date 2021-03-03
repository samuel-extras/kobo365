import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from "./components";
import {
  Dashboard,
  EmployeeFormPage,
  EmployeesPage,
  LoginPage,
  PayrollPage,
} from "./pages";
import NotFound from "./components/not-found";
import Company from "./components/company";
import Settings from "./components/settings";
import { AuthLayout, MainLayout } from "./layout";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={Dashboard}
        exact
        path="/"
        layout={MainLayout}
      />
      <RouteWithLayout
        component={LoginPage}
        exact
        path="/login"
        layout={AuthLayout}
      />
      <RouteWithLayout
        exact
        path="/payroll"
        layout={MainLayout}
        component={PayrollPage}
      />
      <RouteWithLayout
        exact
        path="/employees"
        layout={MainLayout}
        component={EmployeesPage}
      />
      <RouteWithLayout
        exact
        path="/add-employee"
        layout={MainLayout}
        component={EmployeeFormPage}
      />
      <RouteWithLayout
        exact
        path="/settings"
        layout={MainLayout}
        component={Settings}
      />
      <RouteWithLayout
        exact
        path="/company"
        layout={MainLayout}
        component={Company}
      />
      <RouteWithLayout
        exact
        path="/not-found"
        layout={MainLayout}
        component={NotFound}
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
