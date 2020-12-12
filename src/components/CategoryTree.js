import React, {Component} from 'react';
import "../assets/scss/category.scss";
import {Link} from "react-router-dom";
import 'react-sortable-tree/style.css';
import SortableTree, {toggleExpandedForAll} from "react-sortable-tree";
//https://openbase.io/js/react-sortable-tree

class CategoryTree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: "",
            searchFocusIndex: 0,
            searchFoundCount: 0,
            treeData: [
                {id: 1, title: 'Chicken', subtitle: 'test', children: [{id: 2, title: 'Egg'}]},
                {id: 3, title: 'Fish', children: [{id: 4, title: 'fingerline', children: [{id: 5, title: 'fingerline', children: [{id: 6, title: 'fingerline', children: [{id: 7, title: 'fingerline', children: [{id: 8, title: 'fingerline', children: [{id: 9, title: 'fingerline'}]}]}]}]}]}]}
            ],
        };

    }

    handleTreeOnChange = treeData => {
        this.setState({treeData});
    };

    editCategory = rowInfo => {
        /*let path = `/categories/add`;
        let history = userHistory();
        history.push(path);*/
        // this.props.history.push("/categories/add");
    };

    handleSearchOnChange = e => {
        this.setState({
            searchString: e.target.value
        });
    };

    selectPrevMatch = () => {
        const {searchFocusIndex, searchFoundCount} = this.state;

        this.setState({
            searchFocusIndex:
                searchFocusIndex !== null
                    ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount
                    : searchFoundCount - 1
        });
    };

    selectNextMatch = () => {
        const {searchFocusIndex, searchFoundCount} = this.state;

        this.setState({
            searchFocusIndex:
                searchFocusIndex !== null
                    ? (searchFocusIndex + 1) % searchFoundCount
                    : 0
        });
    };

    toggleNodeExpansion = expanded => {
        this.setState(prevState => ({
            treeData: toggleExpandedForAll({treeData: prevState.treeData, expanded})
        }));
    };

    render() {
        const {
            treeData,
            searchString,
            searchFocusIndex,
            searchFoundCount
        } = this.state;
        return (
            <div>
                <div className="bar-wrapper">
                    <button onClick={this.toggleNodeExpansion.bind(this, true)} className="btn btn-outline-success btn-sm" >
                        Expand all
                    </button> &nbsp; &nbsp;
                    <button className="btn btn-outline-success btn-sm" onClick={this.toggleNodeExpansion.bind(this, false)}>
                        Collapse all
                    </button> &nbsp; &nbsp;

                    <label>Search: </label> &nbsp; &nbsp;
                    <input onChange={this.handleSearchOnChange}/> &nbsp; &nbsp;

                    <button className="btn btn-outline-success btn-sm" onClick={this.selectPrevMatch}>
                        &lt;
                    </button>
                    <button className="btn btn-outline-success btn-sm" onClick={this.selectNextMatch}>
                        &gt;
                    </button>
                    <label>
                        {searchFocusIndex} / {searchFoundCount}
                    </label>
                </div>

                <div style={{height: 400}}>
                    <SortableTree
                        treeData={treeData}
                        onChange={this.handleTreeOnChange}
                        searchQuery={searchString}
                        searchFocusOffset={searchFocusIndex}
                        searchFinishCallback={matches =>
                            this.setState({
                                searchFoundCount: matches.length,
                                searchFocusIndex:
                                    matches.length > 0 ? searchFocusIndex % matches.length : 0
                            })
                        }
                        generateNodeProps={rowInfo => ({
                            buttons: [
                                <Link
                                    className="btn btn-outline-success btn-sm"
                                    style={{ verticalAlign: "middle" }}
                                    to="/orders/details/123"
                                > Edit
                                </Link>
                            ]
                        })}/>
                </div>
            </div>
        );
    }
}

export default CategoryTree;
