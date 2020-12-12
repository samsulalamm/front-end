import React, {Component} from 'react';
import "../assets/scss/filter-bar.scss";
import {Button, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import Moment from "moment";
import DateRangePicker from "react-bootstrap-daterangepicker";

class FilterBar extends Component {
  state = {
    startDate: null,
    endDate: null
  }

  handleOnApply = (e, picker) => {
    const startDate = Moment(picker.startDate).format('M/D/Y');
    const endDate = Moment(picker.endDate).format('M/D/Y')
    this.setState({
      startDate: startDate,
      endDate: endDate,
    })
  }

  render() {
    return (
      <div className="filter-bar">
        <div className="">
          <span className="mr-2">Filter by: </span>
          <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="mr-2">
            <ToggleButton variant={"default"} size={"sm"} value={1}>All</ToggleButton>
            <ToggleButton variant={"default"} size={"sm"} value={2}>Today</ToggleButton>
            <ToggleButton variant={"default"} size={"sm"} value={3}>This Week</ToggleButton>
            <ToggleButton variant={"default"} size={"sm"} value={4}>This Month</ToggleButton>
            <ToggleButton variant={"default"} size={"sm"} value={5}>This Year</ToggleButton>

            <ToggleButton onClick={e => {console.log(e.target.value)}} variant={"default"} size={"sm"} value={6}>
              <DateRangePicker onApply={this.handleOnApply}
                               startDate={this.state.startDate || Moment(new Date()).format('M/D/Y')}
                               endDate={this.state.endDate || Moment(new Date()).format('M/D/Y')}>
                <span>{this.state.startDate && this.state.endDate ? this.state.startDate + ' to ' + this.state.endDate : 'Select Date'}</span>
              </DateRangePicker>
            </ToggleButton>
          </ToggleButtonGroup>

          {/*<DateRangePicker onApply={this.handleOnApply}
                           startDate={this.state.startDate || Moment(new Date()).format('M/D/Y')}
                           endDate={this.state.endDate || Moment(new Date()).format('M/D/Y')}>
            <Button size={"sm"}
                    variant={"default"}>{this.state.startDate && this.state.endDate ? this.state.startDate + ' to ' + this.state.endDate : 'Select Date'}</Button>
          </DateRangePicker>*/}

          <Button size={"sm"} variant={"primary"}>Filter</Button>
        </div>
      </div>
    );
  }
}

export default FilterBar;
