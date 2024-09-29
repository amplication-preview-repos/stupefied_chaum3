import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DeliveryList } from "./delivery/DeliveryList";
import { DeliveryCreate } from "./delivery/DeliveryCreate";
import { DeliveryEdit } from "./delivery/DeliveryEdit";
import { DeliveryShow } from "./delivery/DeliveryShow";
import { ParcelList } from "./parcel/ParcelList";
import { ParcelCreate } from "./parcel/ParcelCreate";
import { ParcelEdit } from "./parcel/ParcelEdit";
import { ParcelShow } from "./parcel/ParcelShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { DriverList } from "./driver/DriverList";
import { DriverCreate } from "./driver/DriverCreate";
import { DriverEdit } from "./driver/DriverEdit";
import { DriverShow } from "./driver/DriverShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Fiki"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Delivery"
          list={DeliveryList}
          edit={DeliveryEdit}
          create={DeliveryCreate}
          show={DeliveryShow}
        />
        <Resource
          name="Parcel"
          list={ParcelList}
          edit={ParcelEdit}
          create={ParcelCreate}
          show={ParcelShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="Driver"
          list={DriverList}
          edit={DriverEdit}
          create={DriverCreate}
          show={DriverShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
