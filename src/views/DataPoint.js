import React, {Component} from 'react';
import App from "../App";
import {Button, Col, Form, Row} from "react-bootstrap";
import {Link, withRouter} from "react-router-dom";
import {getDataPoint, importDataPoint} from "../services/DataPointService";
import {toast} from "react-toastify";
import {AgGridReact, AgGridColumn} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class DataPoint extends Component {
  state = {
    dataPoints: [],
    isAdding: false,
    selectedFile: null,
    dLoading: true,
    dDfLodaing: true,
    columnDefs: [
      {headerName: "Data Point", field: "data_point", sortable: true, filter: true},
      {headerName: "Data Point Definitions", field: "total_definitions", sortable: true, filter: true},
      {headerName: "Entity", field: "entity", sortable: true, filter: true},
      {headerName: "Parent Entity", field: "parent_entity", sortable: true, filter: true},
      {headerName: "Owner", field: "owner", sortable: true, filter: true},
      {headerName: "Responsible Role", field: "responsible_role", sortable: true, filter: true},
      {headerName: "DW Server", field: "dw_server", sortable: true, filter: true},
      {headerName: "DW Database", field: "dw_database", sortable: true, filter: true},
      {headerName: "Table Name", field: "table_name", sortable: true, filter: true},
      {headerName: "DW Field Name", field: "dw_field_name", sortable: true, filter: true},
    ],

    definitioncolumnDefs: [
      {headerName: "Data Point Definitions", field: "data_point_definition", sortable: true, filter: true},
      // {headerName: "Data Point", field: "data_point", sortable: true, filter: true},
      {headerName: "Entity", field: "entity", sortable: true, filter: true},
      {headerName: "Parent Entity", field: "parent_entity", sortable: true, filter: true},
      {headerName: "Lookup Values", field: "look_up_values", sortable: true, filter: true},
      {headerName: "Lookup Value Definitions", field: "look_up_value_definitions", sortable: true, filter: true},
    ],

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
            dw_field_name: item.dw_field_name
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
            // data_point: item2?.point_data.data_point,
            entity: item2.entity,
            parent_entity: item2.parent_entity,
            look_up_values: item2.look_up_values,
            look_up_value_definitions: item2.look_up_value_definitions,
          }
          rowDataDefinitions.push(row2);
        });

        await this.setState({rowDataDefinitions: rowDataDefinitions, dDfLodaing: false});

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
        toast.success("Success");

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
                dw_field_name: item.dw_field_name
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
                // data_point: item2?.point_data.data_point,
                entity: item2.entity,
                parent_entity: item2.parent_entity,
                look_up_values: item2.look_up_values,
                look_up_value_definitions: item2.look_up_value_definitions,
              }
              rowDataDefinitions.push(row2);
            });

            await this.setState({rowDataDefinitions: rowDataDefinitions, dDfLodaing: false,isAdding: false});

          })
          .catch(errMsg => {
            console.log('Error Message: ', errMsg)
          })

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
        <h6>Data Point</h6>

        {this.state.dLoading ?
          <div>
            Loading...
          </div>
          :
          <div
            className="ag-theme-balham"
            style={{
              height: '400px',
            }}
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}>
            </AgGridReact>
          </div>
        }

        <br/>
        <h6>Data Point Definitions</h6>

        {this.state.dDfLodaing ?
          <div>
            Loading...
          </div>
          :
          <div
            className="ag-theme-balham"
            style={{
              height: '400px',
            }}
          >
            <AgGridReact
              columnDefs={this.state.definitioncolumnDefs}
              rowData={this.state.rowDataDefinitions}>
            </AgGridReact>

          </div>
        }

      </App>
    );
  }
}

export default withRouter(DataPoint);