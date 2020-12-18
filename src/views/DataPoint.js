import React, {Component} from 'react';
import App from "../App";
import {Button, Col, Form, Row} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import {getDataPoint, importDataPoint, updateData} from "../services/DataPointService";
import { AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Tabs, Tab} from 'react-bootstrap'

class DataPoint extends Component {
  state = {
    dataPoints: [],
    isAdding: false,
    selectedFile: null,
    dLoading: true,
    dDfLodaing: true,
    columnDefs: [
      {headerName: "Data Point", field: "data_point"},
      {headerName: "Data Point Definitions", field: "total_definitions"},
      {headerName: "Entity", field: "entity"},
      {headerName: "Parent Entity", field: "parent_entity"},
      {headerName: "Owner", field: "owner"},
      {headerName: "Responsible Role", field: "responsible_role"},
      {headerName: "DW Server", field: "dw_server"},
      {headerName: "DW Database", field: "dw_database"},
      {headerName: "Table Name", field: "table_name"},
      {headerName: "DW Field Name", field: "dw_field_name"},
    ],

    defaultColDef: {
      sortable: true,
      filter: 'agSetColumnFilter',
      editable: true,
      filterParams: {
        applyMiniFilterWhileTyping: true,
      },
    },

    definitioncolumnDefs: [
      {headerName: "Data Point Definitions",field: "data_point_definition"},
      {headerName: "Data Point", field: "data_point"},
      {headerName: "Owner", field: "owner"},
      {headerName: "Responsible Role", field: "responsible_role"},
      {headerName: "DW Server", field: "dw_server"},
      {headerName: "DW Database", field: "dw_database"},
      {headerName: "Table Name", field: "table_name"},
      {headerName: "DW Field Name", field: "dw_field_name"},
      {headerName: "Data Type", field: "data_type"},
      {headerName: "Read Write", field: "read_write"},
      {headerName: "Definition Stakeholder",field: "definition_stakeholder"},
      {headerName: "Ongoing Definition Owner",field: "ongoing_definition_owner"},
      {headerName: "Source", field: "source"},
      {headerName: "Entity", field: "entity"},
      {headerName: "Parent Entity", field: "parent_entity"},
      {headerName: "Lookup Values", field: "look_up_values"},
      {headerName: "Lookup Value Definitions",field: "look_up_value_definitions"},
    ],

    modules: [ClientSideRowModelModule, SetFilterModule],
    rowData: [],
    rowDataDefinitions: []
  };

  componentDidMount() {
    getDataPoint()
      .then(async res => {
        let rowData = [...this.state.rowData];
        let rowDataDefinitions = [...this.state.rowDataDefinitions];

        await res.datapoint.forEach(item => {
          const row = {
            data_point: item.data_point,
            total_definitions: item?.data_definitions_count,
            entity: item.entity,
            parent_entity: item.parent_entity,
            owner: item.owner,
            responsible_role: item.responsible_role,
            dw_server: item.dw_server,
            dw_database: item.dw_database,
            table_name: item.table_name,
            dw_field_name: item.dw_field_name,
            id: item.id,
            type: 1
          }
          rowData.push(row);
        });

        await this.setState({
          rowData: rowData,
          dLoading: false,
        }, () => {
          console.log(this.state.rowData);
        });

        await res.datapointdefinitions.forEach(item2 => {
          const row2 = {
            data_point_definition: item2?.data_point_definition,
            data_point: item2?.point_data.data_point,
            owner: item2?.point_data.owner,
            responsible_role: item2.point_data.responsible_role,
            dw_server: item2?.point_data.dw_server,
            dw_database: item2?.point_data.dw_database,
            table_name: item2?.point_data.table_name,
            dw_field_name: item2?.point_data.dw_field_name,
            data_type: item2?.point_data.data_type,
            read_write: item2?.point_data.read_write,
            definition_stakeholder: item2?.point_data.definition_stakeholder,
            ongoing_definition_owner: item2?.point_data.ongoing_definition_owner,
            source: item2?.point_data.source,
            entity: item2.entity,
            parent_entity: item2.parent_entity,
            look_up_values: item2.look_up_values,
            look_up_value_definitions: item2.look_up_value_definitions,
            id: item2.id,
            data_point_id: item2.data_point_id,
            type: 2
          }
          rowDataDefinitions.push(row2);
        });

        await this.setState({rowDataDefinitions: rowDataDefinitions, dDfLodaing: false});

      })
      .catch(errMsg => {
        console.log('Error Message: ', errMsg)
      })
  }

  updateCellData = (data) => {
    updateData(data)
      .then(res => {
        console.log(res);
        if (res.meta.status === 200) {
          toast.success(res.response.message);
        } else {
          toast.error('Sorry! there was a problem while updating data');
        }
      })
      .catch(errMsg => {
        console.log('Error Message: ', errMsg)
      })
  }

  onFileChange = event => {
    this.setState({selectedFile: event.target.files[0]});
  };
  onFileUpload = () => {
    const formData = new FormData();
    formData.append(
      "data_file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    console.log(this.state.selectedFile);
    this.setState({isAdding: true});
    importDataPoint(formData)
      .then(async res => {
        if (res.meta.status === 200) {

          toast.success(res.response.message);
          getDataPoint()
            .then(async res => {
              let rowData = [...this.state.rowData];
              let rowDataDefinitions = [...this.state.rowDataDefinitions];

              await res.datapoint.forEach(item => {
                const row = {
                  data_point: item.data_point,
                  total_definitions: item?.data_definitions_count,
                  entity: item.entity,
                  parent_entity: item.parent_entity,
                  owner: item.owner,
                  responsible_role: item.responsible_role,
                  dw_server: item.dw_server,
                  dw_database: item.dw_database,
                  table_name: item.table_name,
                  dw_field_name: item.dw_field_name,
                  id: item.id,
                  type: 1
                }
                rowData.push(row);
              });

              await this.setState({
                rowData: rowData,
                dLoading: false,
              }, () => {
                console.log(this.state.rowData);
              });

              await res.datapointdefinitions.forEach(item2 => {
                const row2 = {
                  data_point_definition: item2?.data_point_definition,
                  data_point: item2?.point_data.data_point,
                  owner: item2?.point_data.owner,
                  responsible_role: item2.point_data.responsible_role,
                  dw_server: item2?.point_data.dw_server,
                  dw_database: item2?.point_data.dw_database,
                  table_name: item2?.point_data.table_name,
                  dw_field_name: item2?.point_data.dw_field_name,
                  data_type: item2?.point_data.data_type,
                  read_write: item2?.point_data.read_write,
                  definition_stakeholder: item2?.point_data.definition_stakeholder,
                  ongoing_definition_owner: item2?.point_data.ongoing_definition_owner,
                  source: item2?.point_data.source,
                  entity: item2.entity,
                  parent_entity: item2.parent_entity,
                  look_up_values: item2.look_up_values,
                  look_up_value_definitions: item2.look_up_value_definitions,
                  id: item2.id,
                  data_point_id: item2.data_point_id,
                  type: 2
                }
                rowDataDefinitions.push(row2);
              });
              await this.setState({rowDataDefinitions: rowDataDefinitions, dDfLodaing: false, isAdding: false});

            })
            .catch(errMsg => {
              console.log('Error Message: ', errMsg)
            })

        } else {
          toast.error("Sorry! a problem has been occurred while importing data.");
        }
      })
      .catch(errMsg => {
        console.log('Error Message: ', errMsg)
      })
  };


  render() {
    const {formData} = this.state;

    return (
      <App layout="boxed">

        <div className="page-header">
          <h2 className="page-title">Import Data Point</h2>
        </div>

        <div className="card-block">
          <div className="block-body">
            <>
              <Form>
                <Form.Group as={Row} controlId="displayOrShopName">
                  <Form.Label column sm="3">
                    Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Col sm="9" md={8} lg={7}>
                    <Form.Control
                      name={"file"}
                      onChange={this.onFileChange}
                      required
                      type="file"/>

                    <Form.Control.Feedback type="invalid">Please enter name.</Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <div className="mt-3">
                  <Button onClick={this.onFileUpload} size="lg" type={"button"} disabled={this.state.isAdding}
                          variant="primary">{this.state.isAdding ? 'Importing...' : 'Import'}</Button>
                </div>
              </Form>
            </>
          </div>
        </div>
        <h4>Data Dictionary</h4>
        <br/>

        <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
          <Tab eventKey={1} title="Data Point">

            {this.state.dLoading ?
              <div>
                Loading...
              </div>
              :
              <div
                style={{
                  height: '400px',
                }}
                id="myGrid"
                className="ag-theme-alpine"
              >
                <AgGridReact
                  modules={this.state.modules}
                  columnDefs={this.state.columnDefs}
                  onCellEditingStopped={(e) => {
                    this.updateCellData(e.data);
                  }}
                  defaultColDef={this.state.defaultColDef}
                  rowData={this.state.rowData}
                >
                </AgGridReact>
              </div>
            }

          </Tab>
          <Tab eventKey={2} title="Data Point Definition">
            {this.state.dDfLodaing ?
              <div>
                Loading...
              </div>
              :
              <div
                style={{
                  height: '400px',
                }}
                id="myGrid"
                className="ag-theme-alpine"
              >
                <AgGridReact
                  modules={this.state.modules}
                  columnDefs={this.state.definitioncolumnDefs}
                  onCellEditingStopped={(e) => {
                    this.updateCellData(e.data);
                  }}
                  defaultColDef={this.state.defaultColDef}
                  rowData={this.state.rowDataDefinitions}
                >
                </AgGridReact>

              </div>
            }
          </Tab>
        </Tabs>

        <ToastContainer position={"bottom-right"}/>
      </App>
    );
  }
}

export default withRouter(DataPoint);